import { test, Page, Browser } from "@playwright/test";

test.describe("Contact view", () => {
  const url = "http://localhost:5173/contact";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("send message", async () => {
    await page.waitForSelector('//*[@id="name"]');
    await page.locator('//*[@id="name"]').fill("Test Name");

    await page.waitForSelector('//*[@id="email"]');
    await page.locator('//*[@id="email"]').fill("testemail@gmail.com");

    await page.waitForSelector('//*[@id="phone"]');
    await page.locator('//*[@id="phone"]').fill("11 4242 4242");

    await page.waitForSelector('//*[@id="message"]');
    await page.locator('//*[@id="message"]').fill("This is a test message");

    const button = page.locator(
      '//*[@id="root"]/div/section/div/div/div[2]/form/div[4]/button/span[2]'
    );
    await button.click();

    await page.waitForSelector("button.swal2-confirm.swal2-styled");
    const buttonSend = page.locator("button.swal2-confirm.swal2-styled");
    await buttonSend.click();
    await page.waitForTimeout(600);

    await page.waitForSelector("button.swal2-confirm.swal2-styled");
    const buttonEnd = page.locator("button.swal2-confirm.swal2-styled");
    await buttonEnd.click();
  });
});
