import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://protektautodesign.com.au'

  // Static pages
  const routes = [
    '',
    '/ceramic-coating-sydney',
    '/paint-correction',
    '/window-tinting-sydney',
    '/ppf-car-wrap-sydney',
    '/motorcycle-protection',
    '/packages',
    '/gallery',
    '/blog',
  ]

  // Blog posts (static for now)
  const blogPosts = [
    '/blog/ceramic-coating-benefits',
    '/blog/ppf-vs-ceramic-coating',
    '/blog/window-tinting-guide',
  ]

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogRoutes = blogPosts.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
