import { test, expect, Page, Browser } from "@playwright/test";

test.describe("Contact component", () => {
  const url = "http://localhost:5173/contact";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("Send message", async () => {
    await page.locator('//*[@id="name"]').fill("Nombre de prueba");
    await page.locator('//*[@id="email"]').fill("emaildeprueba@gmail.com");
    await page.locator('//*[@id="phone"]').fill("11 4242 4242");
    await page
      .locator('//*[@id="message"]')
      .fill("Este es un mensaje de prueba");
    const button = page.locator(
      '//*[@id="root"]/div/section/div/div/div[2]/form/div[4]/button/span[2]'
    );
    await button.click();
    const buttonSend = page.locator('button.swal2-confirm.swal2-styled');
    await buttonSend.click();
  });
});
