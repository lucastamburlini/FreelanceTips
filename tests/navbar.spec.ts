import { test, expect, Page, Browser } from "@playwright/test";

test.describe("Navbar component", () => {
  const url = "http://localhost:5173";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("navigation to blog", async () => {
    const blogButton = page.locator(
      '//*[@id="root"]/div/nav/div[1]/div/div[2]/div/a[2]'
    );
    expect(await blogButton.isVisible()).toBeTruthy();
    await blogButton.click();
    expect(page.url()).toBe(`${url}/blog`);
  });

  test("navigation to contact", async () => {
    const contactButton = page.locator(
      '//*[@id="root"]/div/nav/div[1]/div/div[2]/div/a[3]'
    );
    expect(await contactButton.isVisible()).toBeTruthy();
    await contactButton.click();
    expect(page.url()).toBe(`${url}/contact`);
  });

  test("navigation to home", async () => {
    await page.goto(`${url}/blog`);
    const contactButton = page.locator(
      '//*[@id="root"]/div/nav/div[1]/div/div[2]/div/a[1]'
    );
    expect(await contactButton.isVisible()).toBeTruthy();
    await contactButton.click();
    expect(page.url()).toBe(`${url}/`);
  });
});
