const { expect } = require("@playwright/test");
const { utils } = require("../CommonUtils/utils");

exports.landing = class landing {
  constructor(page) {
    this.page = page;
    this.util = new utils(page);
    this.globalFeeddTab = page.locator("ul").filter({ hasText: "Global Feed" });
    this.header = page.getByRole("heading", { name: "conduit" });
    this.subheader = page.getByText("A place to share your");
    this.tags = page.locator('//*[@id="root"]/div/div[2]/div/div[2]/div');
  }

  url = "https://conduit.realworld.how/";

  async openLandingPage() {
    await this.page.goto(this.url);
  }

  async verifyLandingPage() {
    await this.util.waits(this.header);
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
      const isElementVisible = await this.util.visibility(element);
      console.log(isElementVisible);
      expect(isElementVisible).toBe(true);
    }
  }
};
