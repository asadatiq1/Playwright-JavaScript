import { test, beforeEach } from "@playwright/test";
import { landing } from "../PageObjects/Landing";

let lan;

beforeEach(async ({ page }) => {
  await page.goto("https://conduit.realworld.how/");
  await page.waitForTimeout(7000);
  lan = new landing(page);
});

test("Verify landing page is visible", async ({ page }) => {
  await lan.verifyLandingPage();
});

test("verifiy UI on the landing page", async ({ page }) => {
  await lan.verifyUI();
});
