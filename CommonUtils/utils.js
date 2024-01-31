exports.utils = class utils {
  constructor(page) {
    this.page = page;
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
};
