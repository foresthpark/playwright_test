import { test, expect } from "@playwright/test";
import { chromium } from "@playwright/test";

test("homepage has title and links to intro page", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.getByRole("link", { name: "Get started" });

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute("href", "/docs/intro");

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

// test("Test oops", async ({ page }) => {
//   const browser = await chromium.launch({
//     headless: false,
//   });
//   const context = await browser.newContext();
//   await page.goto("http://uitestingplayground.com/scrollbars");
//   await page.getByRole("button", { name: "Hiding Button" }).click();

//   // ---------------------
//   await context.close();
//   await browser.close();
// });

test("Test some stuff", async ({ page }) => {
  const browser = await chromium.launch();

  await page.goto("http://localhost:3000/");
  await page.getByRole("button", { name: "Send request" }).click();

  const findParagraph = await page.locator("#message_test");

  await expect(findParagraph).toHaveText(
    "Hello, Forest Park. You are 22 years old"
  );

  await browser.close();
});
