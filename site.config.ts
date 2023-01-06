import { siteConfig } from './lib/site-config'

const domainConfig = {
  'whitelabel.banklessacademy.com': {
    rootNotionPageId: '8198f1db3f1c490cb2aedf361fc3e416',
    rootNotionSpaceId: '99a00784-dfcd-41d5-8941-002db8ff69be',
    name: 'Bankless Academy - Whitelabel Platform',
    domain: 'whitelabel.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Build your own web3 educational platform in no time by leveraging Bankless Academy’s infrastructure.',
    pageUrlOverrides: {
      '/content-creation-process': '2504d274430b4b4aa28d6171c9b06335'
    },
  },
  'documentation.banklessacademy.com': {
    rootNotionPageId: '73cae3c0d9124d38babe1f1f9ec5c65f',
    rootNotionSpaceId: '99a00784-dfcd-41d5-8941-002db8ff69be',
    name: 'Bankless Academy - Documentation',
    domain: 'documentation.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Documentation about the Bankless Academy web3 learning platform.',
    pageUrlOverrides: {
      '/generate-utm-links': 'ea6c9d2b537b46d2aa57b7d4df3d93ca',
    },
  },
  'talent.banklessacademy.com': {
    rootNotionPageId: '56d3b0a011fe443aa2a9682f0ca443bb',
    rootNotionSpaceId: '99a00784-dfcd-41d5-8941-002db8ff69be',
    name: 'Bankless Academy - Talent',
    domain: 'talent.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {
      '/product-manager': '65dfe884acb749ef90dd5250f585314d',
      '/project-manager': 'fa0aa8ba0a034c4cbcc7407b650207e1',
      '/graphic-designer': 'e6ffab31d7604580b0879ad296bfe6fc',
      '/web3-developer': '9738fb45eed245cab1f134481afc36fd',
      '/open-application': 'f6c390f5b0754c85acec7b9bcafa00cb'
    },
  },
  'sponsors.banklessacademy.com': {
    rootNotionPageId: '208c77594ddc47ef9ea628c029d29ab0',
    rootNotionSpaceId: '99a00784-dfcd-41d5-8941-002db8ff69be',
    name: 'Bankless Academy - Sponsors',
    domain: 'sponsors.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {
      '/user-journey': '6bf3b997937545e0b99bd3d8273e9c96'
    },
  }
}

const config = (process.env.DOMAIN && Object.keys(domainConfig).includes(process.env.DOMAIN)) ? domainConfig[process.env.DOMAIN] : domainConfig['whitelabel.banklessacademy.com']

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: config.rootNotionPageId,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: config.rootNotionSpaceId,

  // basic site info (required)
  name: config.name,
  domain: config.domain,
  author: config.author,

  // open graph metadata (optional)
  description: config.description,

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: config.pageUrlOverrides,

  isSearchEnabled: false,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: []
})
