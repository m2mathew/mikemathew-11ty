module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Mike Mathew',
  siteDescription:
    'Personal internet website for Mike Mathew — front end web developer, business owner, and community leader.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Mike Mathew', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'mike.mathew@hey.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://www.mikemathew.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#F4D0DF', //  Manifest: defines the default theme color for the application
  themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
    twitterSite: 'https://www.twitter.com/drumsensei', // i.e. @site - twitter profile of the site
    twitterCreator: '@drumsensei', // i.e. @author -  twitter profile of the site
    mastodonProfile: 'https://mstdn.social/@drumsensei' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Mike Mathew\'s Blog',
    description:
      'Betwixt Code and Music.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Drumsensei Media',
    street: '',
    city: 'Dallas',
    state: 'Texas',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: 'mike.mathew@hey.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
