const { expect } = require("@playwright/test");

exports.landing = class landing {
  constructor(page) {
    this.page = page;
    this.globalFeeddTab = page.locator("ul").filter({ hasText: "Global Feed" });
    this.header = page.getByRole("heading", { name: "conduit" });
    this.subheader = page.getByText("A place to share your");
    this.tags = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div');
  }

  async visibility(element) {
    return await element.isVisible();
  }

  async waits(element) {
    const val = await element.isVisible();
    if (!val) {
      await this.page.waitForTimeout(5000);
    } else return;
  }

  async verifyLandingPage() {
    await this.waits(this.header);
    const actualText = await this.header.innerText();
    expect(actualText).toEqual(expect.stringContaining("conduit"));
  }

  async verifyUI() {
    const elementsToCheck = [
      this.header,
      this.subheader,
      this.tags,
      this.globalFeeddTab,
    ];

    for (const element of elementsToCheck) {
      const isElementVisible = await this.visibility(element);
      console.log(isElementVisible);
      expect(isElementVisible).toBe(true);
    }
  }
};
