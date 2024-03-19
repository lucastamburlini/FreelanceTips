import { test, expect, Page, Browser } from "@playwright/test";

test.describe("Home component", () => {
  const url = "http://localhost:5173";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("main title", async () => {
    await expect(
      page.locator('//*[@id="root"]/div/section/div/div/h1')
    ).toContainText(
      "Tips y Trucos para Freelancers ¡Haz que tu trabajo cuente!"
    );
  });

  test("subtitle", async () => {
    await expect(
      page.locator('//*[@id="root"]/div/section/div/div/p')
    ).toContainText(
      "Descubre y comparte consejos prácticos, trucos y estrategias para tener éxito como freelancer en el competitivo mundo laboral actual."
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
