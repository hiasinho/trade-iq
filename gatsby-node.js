var fs = require('fs-extra-promise')
var sm = require('sitemap')

function pagesToSitemap(pages) {
  var urls = pages.map(function(p) {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })

  urls = urls.filter(function(u) { return u !== undefined })
  urls = urls.filter(function(u) { return u.url.match(/404/) === null })
  return urls
}

function generateSiteMap(pages) {
  var sitemap = sm.createSitemap({
    hostname: 'http://trade-iq.com',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

exports.postBuild = function(pages, callback) {
  generateSiteMap(pages)
  callback()
}
