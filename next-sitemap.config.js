/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://modding-godhand.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    exclude: ['/404'],
    robotsTxtOptions: {
        policies: [{
            userAgent: "*",
            disallow: "/api"
        }]
    },
    transform: async (config, path) => {
        if (path.includes('/')) {
            return {
                loc: path, // URL
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString(),
            };
        }
        return {
            loc: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },
}