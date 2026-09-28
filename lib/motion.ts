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
  // Bail entirely if user prefers reduced motion
  if (prefersReducedMotion()) {
    document.documentElement.classList.add('motion-reduced')
    // Make everything visible immediately
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      el.classList.add('is-visible')
    })
    return () => {}
  }

  // iOS --vh fix
  setVh()
  window.addEventListener('resize', setVh)

  // Expand staggers before observing
  expandStaggers()

  // Set perspective origins (needs layout to be painted)
  requestAnimationFrame(() => {
    setPerspectiveOrigins()
  })

  // Mark html as motion-ready (removes the initial-hide CSS)
  document.documentElement.classList.add('motion-ready')

  // Observe all [data-reveal] elements
  const observer = createRevealObserver()
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    observer.observe(el)
  })

  // Cleanup
  return () => {
    observer.disconnect()
    window.removeEventListener('resize', setVh)
  }
}
