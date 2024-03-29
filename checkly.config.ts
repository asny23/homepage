import { defineConfig } from 'checkly'
import { Frequency, EmailAlertChannel, SlackAlertChannel } from 'checkly/constructs'

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30
}

const emailChannel = new EmailAlertChannel('email-channel', {
  address: process.env.CHECKLY_EMAIL || '',
  ...sendDefaults
})

const slackChannel = new SlackAlertChannel('slack-channel', {
  url: new URL(process.env.CHECKLY_SLACK_URL || 'https://hooks.slack.com/services/'),
  ...sendDefaults
})

export default defineConfig({
  projectName: 'Homepage',
  logicalId: 'homepage',
  repoUrl: 'https://github.com/asny23/homepage',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2022.10',
    frequency: Frequency.EVERY_12H,
    locations: ['ap-northeast-1', 'us-east-1'],
    tags: ['homepage'],
    alertChannels: [emailChannel, slackChannel],
    checkMatch: 'tests/*.check.ts'
  },
  cli: {
    runLocation: 'ap-northeast-1'
  }
})
