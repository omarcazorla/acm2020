export interface BlogPost {
  slug: string
  title: { es: string; ca: string; en: string; fr: string }
  excerpt: { es: string; ca: string; en: string; fr: string }
  date: string
  category: 'amianto' | 'radon' | 'normativa' | 'general'
}

// Blog posts metadata - content will come from MDX files in content/blog/{locale}/
export const blogPosts: BlogPost[] = [
  // Posts will be added here as MDX content is created
]
