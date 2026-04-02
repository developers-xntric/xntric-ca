import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

// Create a client for server-side fetching (no token needed for public content)
export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

// Fetch all blogs for listing page (filtered by "xntric ca")
export async function getAllBlogs() {
  const query = `*[_type == "blog" && blogCategory == "xntric ca"] | order(publishedDate desc) {_id, title, description, metaDescription, "slug": slug.current, publishedDate, readTime, category, blogCategory, "bannerImageURL": bannerImage.asset->url, "bannerImageAlt": bannerImage.alt, "mainImageURL": image.asset->url, "mainImageAlt": image.alt, subsections, conclusion, faqs, quotes}`
  return serverClient.fetch(query)
}

// Fetch a single blog by slug
export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "blog" && blogCategory == "xntric ca" && slug.current == $slug][0] {_id, title, description, metaDescription, "slug": slug.current, publishedDate, readTime, category, blogCategory, "bannerImageURL": bannerImage.asset->url, "bannerImageAlt": bannerImage.alt, "mainImageURL": image.asset->url, "mainImageAlt": image.alt, subsections, conclusion, faqs, quotes}`
  return serverClient.fetch(query, { slug })
}

// Fetch related blogs (excluding current blog, filtered by "xntric ca")
export async function getRelatedBlogs(excludeSlug: string, limit: number = 2) {
  const query = `*[_type == "blog" && blogCategory == "xntric ca" && slug.current != $excludeSlug] | order(publishedDate desc)[0...$limit] {_id, title, description, "slug": slug.current, publishedDate, readTime, category, "bannerImageURL": bannerImage.asset->url}`
  return serverClient.fetch(query, { excludeSlug, limit })
}

// Fetch all blog slugs for static generation (filtered by "xntric ca")
export async function getAllBlogSlugs() {
  const query = `*[_type == "blog" && blogCategory == "xntric ca" && defined(slug.current)] {"slug": slug.current}`
  return serverClient.fetch(query)
}
