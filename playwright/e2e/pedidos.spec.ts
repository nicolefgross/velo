import { test, expect } from '@playwright/test';

test('deve consultar um pedido aprovado', async ({ page }) => {
//arrange
  await page.goto('http://localhost:5173/');
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');
  //(contudo esses dois cenarios abaixo tambem podem estar dentro da etapa de act)
  await page.getByRole('link', { name: 'Consultar Pedido' }).click();
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido');
//act
  await page.getByTestId('search-order-id').click();
  await page.getByTestId('search-order-id').fill('VLO-GR5LA4');
//assert
  await page.getByTestId('search-order-button').click();
  await expect(page.getByTestId('order-result-id')).toBeVisible();
  await expect(page.getByTestId('order-result-id')).toContainText('VLO-GR5LA4');
  await expect(page.getByTestId('order-result-status')).toBeVisible();
  await expect(page.getByTestId('order-result-status')).toContainText('APROVADO');



});
