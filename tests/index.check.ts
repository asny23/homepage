import { BrowserCheck } from '@checkly/cli/constructs'

new BrowserCheck('homepage-browser-check', {
  name: 'Homepage',
  code: {
    entrypoint: './pages.spec.ts'
  }
})
