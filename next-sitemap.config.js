/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "http://localhost:3000",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
};

console.log("process.env.SITE_URL: ", process.env.SITE_URL);
