/**
 * Cinematic motion engine — IntersectionObserver-based reveals with
 * bidirectional visibility, stagger expansion, and perspective origins.
 *
 * Respects `prefers-reduced-motion`. No scroll listeners (except the
 * iOS --vh fix which runs once on resize).
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MotionCleanup {
  (): void
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** iOS viewport-height fix: sets --vh so 100vh works on mobile Safari. */
function setVh() {
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  )
}

// ---------------------------------------------------------------------------
// Stagger expansion
// ---------------------------------------------------------------------------

/**
 * For every container with `data-stagger`, wraps (or finds) direct children
 * and assigns incremental `transition-delay` values.
 *
 * Attributes on the container:
 *   data-stagger="fade" | "zoom"          — reveal type per child
 *   data-stagger-seq="0.1"                — seconds between each child
 *   data-stagger-startvisible="50"        — % threshold to start (unused here, observer handles it)
 */
function expandStaggers() {
  document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((container) => {
    const type = container.dataset.stagger // "fade" | "zoom"
    const seq = parseFloat(container.dataset.staggerSeq || '0.1')
    const children = Array.from(container.children) as HTMLElement[]

    children.forEach((child, i) => {
      child.setAttribute('data-reveal', type || 'fade')
      child.style.transitionDelay = `${(i * seq).toFixed(2)}s`
    })
  })
}

// ---------------------------------------------------------------------------
// Perspective origins
// ---------------------------------------------------------------------------

/**
 * For containers with `class="stagger-perspective"`, calculates each child's
 * `transform-origin` relative to the group center so zoom reveals radiate
 * outward from the center of the set.
 */
function setPerspectiveOrigins() {
  document.querySelectorAll<HTMLElement>('.stagger-perspective').forEach((container) => {
    const rect = container.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2

    Array.from(container.children).forEach((child) => {
      const cr = child.getBoundingClientRect()
      const ox = cx - cr.left
      const oy = cy - cr.top
      ;(child as HTMLElement).style.transformOrigin = `${ox}px ${oy}px`
    })
  })
}

// ---------------------------------------------------------------------------
// IntersectionObserver reveal engine
// ---------------------------------------------------------------------------

function createRevealObserver(): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
        } else {
          // Bidirectional — hide when leaving viewport
          el.classList.remove('is-visible')
        }
      })
    },
    {
      rootMargin: '-10% 0% -10% 0%',
      threshold: 0,
    }
  )
}

// ---------------------------------------------------------------------------
// Public init
// ---------------------------------------------------------------------------

export function initMotion(): MotionCleanup {
  const reduced = prefersReducedMotion()

  // Bail entirely if user prefers reduced motion
  if (reduced) {
    document.documentElement.classList.add('motion-reduced')
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.classList.add('is-visible')
    })
  }

  // iOS --vh fix
  setVh()
  window.addEventListener('resize', setVh)

  if (!reduced) {
    // Expand staggers before observing
    expandStaggers()

    // Set perspective origins (needs layout to be painted)
    requestAnimationFrame(() => {
      setPerspectiveOrigins()
    })

    // Mark html as motion-ready (removes the initial-hide CSS)
    document.documentElement.classList.add('motion-ready')
  }

  // Observe all [data-reveal] elements
  const observer = reduced ? null : createRevealObserver()
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (reduced) {
      el.classList.add('is-visible')
    } else {
      observer!.observe(el)
    }
  })

  // Watch for new [data-reveal] elements added during client-side navigation
  const mutationObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue
        // Check the node itself and its descendants
        const reveals = node.matches?.('[data-reveal]')
          ? [node, ...node.querySelectorAll<HTMLElement>('[data-reveal]')]
          : [...node.querySelectorAll<HTMLElement>('[data-reveal]')]
        for (const el of reveals) {
          if (reduced) {
            (el as HTMLElement).classList.add('is-visible')
          } else {
            observer!.observe(el as HTMLElement)
          }
        }
        // Expand staggers inside new content
        if (!reduced) {
          const staggers = node.matches?.('[data-stagger]')
            ? [node, ...node.querySelectorAll<HTMLElement>('[data-stagger]')]
            : [...node.querySelectorAll<HTMLElement>('[data-stagger]')]
          for (const container of staggers) {
            const type = (container as HTMLElement).dataset.stagger
            const seq = parseFloat((container as HTMLElement).dataset.staggerSeq || '0.1')
            Array.from(container.children).forEach((child, i) => {
              ;(child as HTMLElement).setAttribute('data-reveal', type || 'fade')
              ;(child as HTMLElement).style.transitionDelay = `${(i * seq).toFixed(2)}s`
              observer!.observe(child as HTMLElement)
            })
          }
        }
      }
    }
  })
  mutationObserver.observe(document.body, { childList: true, subtree: true })

  // Cleanup
  return () => {
    observer?.disconnect()
    mutationObserver.disconnect()
    window.removeEventListener('resize', setVh)
  }
}
