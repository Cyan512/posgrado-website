const protocol = process.env.STRAPI_PROTOCOL;
const host = process.env.STRAPI_HOST;

const env = {
  strapi: {
    api: `${protocol}://${host}`,
    token: process.env.STRAPI_TOKEN,
  },
};

export default env;
