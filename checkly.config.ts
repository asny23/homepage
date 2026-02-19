import { Frequency, EmailAlertChannel, SlackAlertChannel } from 'checkly/constructs'

const alertChannels = []

if (process.env.CHECKLY_EMAIL) {
  alertChannels.push(
    new EmailAlertChannel('email-channel', {
      sendFailure: true,
      sendRecovery: true,
      sendDegraded: false,
      sslExpiry: true,
      sslExpiryThreshold: 30,
      address: process.env.CHECKLY_EMAIL
    })
  )
}

if (process.env.CHECKLY_SLACK_URL) {
  alertChannels.push(
    new SlackAlertChannel('slack-channel', {
      sendFailure: true,
      sendRecovery: true,
      sendDegraded: false,
      sslExpiry: true,
      sslExpiryThreshold: 30,
      url: process.env.CHECKLY_SLACK_URL
    })
  )
}

export default {
  projectName: 'Homepage',
  logicalId: 'homepage',
  repoUrl: 'https://github.com/asny23/homepage',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2025.04',
    frequency: Frequency.EVERY_12H,
    locations: ['ap-northeast-1', 'us-east-1'],
    tags: ['homepage'],
    alertChannels: alertChannels,
    checkMatch: 'tests/*.check.ts'
  },
  cli: {
    runLocation: 'ap-northeast-1'
  }
}
