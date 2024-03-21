import { test, expect, Page, Browser } from "@playwright/test";

test.describe("Home view", () => {
  const url = "http://localhost:5173";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("main title", async () => {
    await expect(
      page.locator('//*[@id="root"]/div/section/div/div/h1')
    ).toContainText("Tips and Tricks for Freelancers Make Your Work Count!");
  });

  test("subtitle", async () => {
    await expect(
      page.locator('//*[@id="root"]/div/section/div/div/p')
    ).toContainText(
      "Discover and share practical tips, tricks, and strategies for succeeding as a freelancer in today's competitive job market."
    );
  });

  test("primary button: to blog", async () => {
    const button = page.locator(
      '//*[@id="root"]/div/section/div/div/div/button'
    );
    expect(await button.isVisible()).toBeTruthy();
    await button.click();
    expect(page.url()).toBe(`${url}/blog`);
  });
});
