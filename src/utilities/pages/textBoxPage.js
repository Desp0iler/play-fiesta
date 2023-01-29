const { TextBoxElems } = require('../locators/textBoxElems');
const { User } = require('../data/datagen');

exports.TextBoxPage = class TextBoxPage {
  constructor(page) {
    this.elems = new TextBoxElems();
    this.data = new User();
    this.page = page;
    this.fullName = page.locator(this.elems.fullName);
    this.email = page.locator(this.elems.email);
    this.currentAddress = page.locator(this.elems.currentAddress);
    this.permAddress = page.locator(this.elems.permanentAddress);
    this.submitButton = page.locator(this.elems.submitButton);
    this.nameField = page.locator(this.elems.verifyName);
    this.emailField = page.locator(this.elems.verifyEmail);
    this.currAddressField = page.locator(this.elems.verifyCurAddress);
    this.permAddressField = page.locator(this.elems.verifyPermAddress);
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
