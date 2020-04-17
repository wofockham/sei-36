const Crawler = require('crawler');

// Predicate function to decide if we want to add a URL to the queue
const isCrawlable = (url) => {
  if (!url) return false;
  if (!url.startsWith('http')) return false;

  // Check if our URL matches any of these terrible sites:
  const terribleSites = ['archive.md', 'cloudflare.com', 'twitter.com'];
  return !terribleSites.some( awfulSite => url.includes( awfulSite ) ); // Heavy magic

  // const awfulSiteDetected = terribleSites.some(function (awfulSite) {
  //   if (url.includes(awfulSite)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  //
  // return !awfulSiteDetected;
};

const c = new Crawler({
  rateLimit: 1000,

  callback: function (err, res, done) {
    if (typeof res.$ === 'function') {
      console.log( res.$('title').text() );
      console.log( res.request.uri.href );

      const $links = res.$('a');
      $links.each(function () {
        const href = res.$(this).attr('href');

        if (isCrawlable(href)) {
          c.queue( href );
        }
      });
    }

    done();
  }
});

c.queue( process.argv[2] || 'https://lobste.rs' );
