export const env = {
  strapi: {
    api: process.env.STRAPI_URL!,
    token: process.env.STRAPI_TOKEN!,
  },
}

export function getStrapiConfig() {
  if (!env.strapi.api) throw new Error("STRAPI_URL is not defined")
  if (!env.strapi.token) throw new Error("STRAPI_TOKEN is not defined")
  return { url: env.strapi.api, token: env.strapi.token }
}
