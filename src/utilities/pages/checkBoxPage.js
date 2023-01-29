const { CheckBoxElems } = require('../locators/checkboxElems');

exports.CheckBoxPage = class CheckBoxPage {
  constructor(page) {
    this.elems = new CheckBoxElems();
    this.page = page;
    this.homeCheckbox = page.locator(this.elems.homeCheckbox);
    this.desktopCheckbox = page.locator(this.elems.desktopCheckbox);
    this.notesCheckbox = page.locator(this.elems.notesCheckbox);
    this.commandsCheckbox = page.locator(this.elems.commandsCheckbox);
    this.documentsCheckbox = page.locator(this.elems.documentsCheckbox);
    this.workspaceCheckbox = page.locator(this.elems.workspaceCheckbox);
    this.officeCheckbox = page.locator(this.elems.officeCheckbox);
    this.downloadsCheckbox = page.locator(this.elems.downloadsCheckbox);
    this.wordFileCheckbox = page.locator(this.elems.wordFileCheckbox);
    this.excelFileCheckbox = page.locator(this.elems.excelFileCheckbox);
    this.expandAllButton = page.locator(this.elems.expandAllButton);
    this.collapseAllButton = page.locator(this.elems.collapseAllButton);
  }

  async goto() {
    await this.page.goto('/checkbox');
  }

  async expandAll() {
    await this.expandAllButton.click();
  }

  async collapseAll() {
    await this.collapseAllButton.click();
  }

  allHiddenCheckboxes() {
    const filtered = ['elems', 'page', 'homeCheckbox', 'expandAllButton', 'collapseAllButton'];
    const elems = Object.keys(this).filter((arrayItem) => !filtered.includes(arrayItem));
    return elems;
  }
};
