import { expect, test } from '@playwright/test';

const siteUrl = 'https://thinking-cola.ml/'

test('Top page', async ({ page }) => {
  const response = await page.goto(siteUrl)
  expect(response.status()).toEqual(200)
  await expect(page.locator('h1')).toContainText('thinking cola')
})
