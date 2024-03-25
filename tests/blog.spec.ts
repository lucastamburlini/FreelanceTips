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

  test("new post", async () => {
    const buttonNewPost = await page.waitForSelector(
      '//*[@id="root"]/div/section/div[1]/div/div/button'
    );
    await buttonNewPost.click();

    await page.waitForSelector('//*[@id="title"]');
    await page.locator('//*[@id="title"]').fill("Test");
    await page.waitForSelector('//*[@id="category"]');
    await page.selectOption('//*[@id="category"]', { label: "Tools" });
    await page.waitForSelector('//*[@id="content"]');
    await page.locator('//*[@id="content"]').fill("Test");

    const buttonSendPost = await page.waitForSelector(
      '//*[@id="root"]/div/section/div[1]/div[2]/div/div[3]/button'
    );
    await buttonSendPost.click();
    await page.waitForSelector("button.swal2-confirm.swal2-styled");
    const buttonSend = page.locator("button.swal2-confirm.swal2-styled");
    await buttonSend.click();

    await page.waitForSelector("button.swal2-confirm.swal2-styled");
    const buttonEnd = page.locator("button.swal2-confirm.swal2-styled");
    await buttonEnd.click();
    await page.waitForTimeout(2000);
  });
});
