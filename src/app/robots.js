export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/_next/', '/private/'],
    },
    sitemap: 'https://laptopsecure.com/sitemap.xml',
    host: 'https://laptopsecure.com',
  };
}
