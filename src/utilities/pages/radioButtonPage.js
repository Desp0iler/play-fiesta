exports.RadioPage = class RadioPage {
  constructor(page) {
    this.page = page;
    this.yesRadio = page.getByText('Yes');
    this.impressiveRadio = page.getByText('Impressive');
    this.successText = page.locator('.text-success');
    this.textFromSelectingYes = 'Yes';
    this.textFromSelectingImpressive = 'Impressive';
  }

  async goto() {
    await this.page.goto('/radio-button');
  }

  async selectYes() {
    await this.yesRadio.click();
  }

  async selectImpressive() {
    await this.impressiveRadio.click();
  }
};
