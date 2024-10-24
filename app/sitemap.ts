import { NAVIGATIONS } from '@/components/provided/navigation'
import type { NavigationItem } from 'musae/types/bench'
import type { MetadataRoute } from 'next'

const toSitemap = (navigations: NavigationItem[] = []): MetadataRoute.Sitemap => {
  return navigations.reduce<MetadataRoute.Sitemap>((prev, { children, ...navigation }) => {
    return [
      ...prev,
      {
        url: `https://aisz.dev${navigation.path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly'
      },
      ...toSitemap(children)
    ]
  }, [])
}

export default function sitemap() {
  return toSitemap(NAVIGATIONS)
}
