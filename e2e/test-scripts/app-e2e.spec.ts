import { test, expect } from '@playwright/test';

test('User can enter single meter reading', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByTestId('meter-input').fill('00100');
  await page.getByTestId('submit-button').click();

  await expect(page.getByTestId('list-100')).toHaveText('00100 - customer');
});

test('User can enter successive meter readings', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByTestId('meter-input').fill('00100');
  await page.getByTestId('submit-button').click();

  await page.getByTestId('meter-input').fill('00250');
  await page.getByTestId('submit-button').click();

  await page.getByTestId('meter-input').fill('00350');
  await page.getByTestId('submit-button').click();

  await page.getByTestId('meter-input').fill('00400');
  await page.getByTestId('submit-button').click();
  

  await expect(page.getByTestId('list-100')).toHaveText('00100 - customer');
  await expect(page.getByTestId('list-250')).toHaveText('00250 - customer');
  await expect(page.getByTestId('list-350')).toHaveText('00350 - customer');
  await expect(page.getByTestId('list-400')).toHaveText('00400 - customer');

  await expect(page.getByTestId('predicted-usage')).toHaveText('00500');
});

test('User gets an error message if they type a meter reading that is lower than previous reading', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByTestId('meter-input').fill('00100');
  await page.getByTestId('submit-button').click();
  await expect(page.getByTestId('list-100')).toHaveText('00100 - customer');

  await page.getByTestId('meter-input').fill('00099');
  await page.getByTestId('submit-button').click();

  await expect(page.getByTestId('error-message')).toBeVisible();
});

test('User gets an error message if they type value 1 only', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByTestId('meter-input').fill('1');
  await page.getByTestId('submit-button').click();

  await expect(page.getByTestId('list-100')).not.toBeVisible();
  await expect(page.getByTestId('error-message')).toBeVisible();

});

test('User gets an error message if they type value abcde', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.getByTestId('meter-input').fill('abcde');
  await page.getByTestId('submit-button').click();

  await expect(page.getByTestId('list-100')).not.toBeVisible();
  await expect(page.getByTestId('error-message')).toBeVisible();
});
