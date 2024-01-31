import { test, beforeEach } from "@playwright/test";
import { landing } from "../PageObjects/Landing";

let lan;

beforeEach(async ({ page }) => {
  lan = new landing(page);
  await lan.openLandingPage();
  await page.waitForTimeout(7000);
});

test("Verify landing page is visible", async ({ page }) => {
  await lan.verifyLandingPage();
});

test("verifiy UI on the landing page", async ({ page }) => {
  await lan.verifyUI();
});
