// for more config options;
// https://www.npmjs.com/package/next-sitemap#configuration-options

module.exports = {
  // ========================
  // sitemap.xml
  // ========================
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://something-is-wrong-if-you-see-this.com',
  changefreq: 'daily', // always hourly daily weekly monthly yearly never
  priority: 0.7, // between 0 and 1

  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next']
      }
    ]
  },
  exclude: [
    // '/page-0'
  ]
};
