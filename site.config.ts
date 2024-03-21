import { siteConfig } from './lib/site-config'

const domainConfig = {
  'whitelabel.banklessacademy.com': {
    rootNotionPageId: 'e8fb353a977848c4b893729bd1c99cab',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Whitelabel Platform',
    domain: 'whitelabel.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Build your own web3 educational platform in no time by leveraging Bankless Academy’s infrastructure.',
    pageUrlOverrides: {
      '/content-creation-process': '5d814f9876924a6c802ffe6d2ce59443'
    },
  },
  'documentation.banklessacademy.com': {
    rootNotionPageId: '880101fb558c4f988505b813447387a0',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Documentation',
    domain: 'documentation.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Documentation about the Bankless Academy web3 learning platform.',
    pageUrlOverrides: {
      '/generate-utm-links': 'a47da38dfbff4c3fbba046217e25f24c',
    },
  },
  'talent.banklessacademy.com': {
    rootNotionPageId: '864244614a6a439ab1cee809b11553b3',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Talent',
    domain: 'talent.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {
      '/product-manager': 'bf5b080736274c35856a73a1b50ee883',
      '/project-manager': 'cf326ca0ccd84e40ac785e10e5933591',
      '/graphic-designer': '78adf4978c544dc3a3fc81d4fe3d0c15',
      '/web3-developer': 'f5a539bca540402fa89b6d85d871b5c2',
      '/open-application': '979dbac605af44e291ee0ce82acf0aec'
    },
  },
  'sponsors.banklessacademy.com': {
    rootNotionPageId: 'f40db2c23e624594afca70707ccd9d95',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Lesson Sponsors',
    domain: 'sponsors.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {
      '/user-journey': 'c484be41e2324abfbcf6a7acc5f37805'
    },
  },
  'articles.banklessacademy.com': {
    rootNotionPageId: '56bce1b5b63b48a9aa35481830387488',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Sponsored Articles',
    domain: 'articles.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {
      '/user-journey': 'c484be41e2324abfbcf6a7acc5f37805'
    },
  },
  'workshop.banklessacademy.com': {
    rootNotionPageId: '9263622389da4b6597db6edde05243f4',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Workshop',
    domain: 'workshop.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {},
  },
  'notion.banklessacademy.com': {
    rootNotionPageId: 'e4ed61c5c56d428d9e74260d9bb7b887',
    rootNotionSpaceId: 'b3891dc2-9a69-4b66-b190-6db4f7cbcdae',
    name: 'Bankless Academy - Notion',
    domain: 'notion.banklessacademy.com',
    author: 'Bankless Academy',
    description: 'Join us in onboarding the next wave of explorers into the Web3 multiverse.',
    pageUrlOverrides: {
      '/bankless-academy-branding-assets': '0e09fd2fc09c4a40bee190bc8862b1de'
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
  isPreviewImageSupportEnabled: false,

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
