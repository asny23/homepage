import { BrowserCheck } from 'checkly/constructs'

new BrowserCheck('homepage-browser-check', {
  name: 'Homepage',
  code: {
    entrypoint: './pages.spec.ts'
  },
  frequency: 12 * 60, // 12 hours in minutes
  locations: ['us-east-1', 'eu-west-1'],
  tags: ['browser'],
  activated: true,
  muted: false
})
