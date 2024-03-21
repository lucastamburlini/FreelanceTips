import { test, expect, Page, Browser, ElementHandle } from "@playwright/test";

test.describe("Blog view", () => {
  const url = "http://localhost:5173/blog";
  let page: Page;

  test.beforeEach(async ({ browser }: { browser: Browser }) => {
    page = await browser.newPage();
    await page.goto(url);
  });

  test("See more post", async () => {
    let buttonMore: ElementHandle<SVGElement | HTMLElement> | null;

    buttonMore = await page.waitForSelector(
      "#root > div > section > div:nth-child(3) > button"
    );
    expect(await buttonMore.isVisible()).toBeTruthy();

    while (buttonMore) {
      await buttonMore.click();

      buttonMore = await page.$(
        "#root > div > section > div:nth-child(3) > button"
      );
    }

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    const buttonUp = await page.waitForSelector(
      "#root > div > section > div:nth-child(3) > div > button"
    );
    expect(await buttonUp.isVisible()).toBeTruthy();
    buttonUp.click();

    await page.waitForFunction(() => {
      return document.documentElement.scrollTop === 0;
    });

    await page.waitForTimeout(1000);

    expect(await page.evaluate(() => document.documentElement.scrollTop)).toBe(
      0
    );
  });
});
