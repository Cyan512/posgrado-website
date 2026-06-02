import { getStrapiConfig } from "@/lib/config/env"

interface StrapiCollection<T> {
  data: T[]
}

export async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const { url, token } = getStrapiConfig()
  const res = await fetch(`${url}/api${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
    ...options,
  })
  if (!res.ok) throw new Error(`Strapi fetch error: ${res.status} ${res.statusText}`)
  return res.json()
}

export async function fetchCollection<T>(endpoint: string, options?: RequestInit): Promise<T[]> {
  const res = await fetchAPI<StrapiCollection<T>>(endpoint, options)
  return res.data
}
