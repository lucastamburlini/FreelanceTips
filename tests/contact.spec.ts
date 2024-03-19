import { test, expect, Page, Browser } from "@playwright/test";

test.describe("Contact component", () => {
  const url = "http://localhost:5173/contact";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(500);
  });

  test("Send message", async () => {
    await page.locator('//*[@id="name"]').fill("Nombre de prueba");
    await page.waitForTimeout(2000);
  });
});
