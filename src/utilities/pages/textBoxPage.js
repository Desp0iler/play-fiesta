const { User } = require('../data/datagen');

exports.TextBoxPage = class TextBoxPage {
  constructor(page) {
    this.data = new User();
    this.page = page;
    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permAddress = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.nameField = page.locator('#name');
    this.emailField = page.locator('#email');
    this.currAddressField = page.locator('#currentAddress.mb-1');
    this.permAddressField = page.locator('#permanentAddress.mb-1');
  }

  async goto() {
    await this.page.goto('/text-box');
  }

  async fillform() {
    await this.fullName.fill(this.data.fullName);
    await this.email.fill(this.data.email);
    await this.currentAddress.fill(this.data.currentAddress);
    await this.permAddress.fill(this.data.permAddress);
  }

  async submit() {
    await this.submitButton.click();
  }
};
