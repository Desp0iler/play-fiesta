exports.CheckBoxPage = class CheckBoxPage {
  constructor(page) {
    this.page = page;
    this.homeCheckbox = page.locator('label').filter({ hasText: 'Home' }).locator('svg').first();
    this.desktopCheckbox = page.locator('label').filter({ hasText: 'Desktop' }).locator('svg').first();
    this.notesCheckbox = page.getByRole('listitem').filter({ hasText: 'Notes' }).locator('svg').first();
    this.commandsCheckbox = page.getByRole('listitem').filter({ hasText: 'Commands' }).locator('svg').first();
    this.documentsCheckbox = page.locator('label').filter({ hasText: 'Documents' }).locator('svg').first();
    this.workspaceCheckbox = page.locator('label').filter({ hasText: 'WorkSpace' }).locator('svg').first();
    this.reactCheckbox = page.getByRole('listitem').filter({ hasText: 'React' }).locator('svg').first();
    this.angularCheckbox = page.getByRole('listitem').filter({ hasText: 'Angular' }).locator('svg').first();
    this.VeuCheckbox = page.getByRole('listitem').filter({ hasText: 'Veu' }).locator('svg').first();
    this.officeCheckbox = page.locator('label').filter({ hasText: 'Office' }).locator('svg').first();
    this.publicCheckbox = page.getByRole('listitem').filter({ hasText: 'Public' }).locator('svg').first();
    this.privateCheckbox = page.getByRole('listitem').filter({ hasText: 'Private' }).locator('svg').first();
    this.classifiedCheckbox = page.getByRole('listitem').filter({ hasText: 'Classified' }).locator('svg').first();
    this.generalCheckbox = page.getByRole('listitem').filter({ hasText: 'General' }).locator('svg').first();
    this.downloadsCheckbox = page.locator('label').filter({ hasText: 'Downloads' }).locator('svg').first();
    this.wordFileCheckbox = page.getByRole('listitem').filter({ hasText: 'Word File.doc' }).locator('svg').first();
    this.excelFileCheckbox = page.getByRole('listitem').filter({ hasText: 'Excel File.doc' }).locator('svg').first();
    this.checkmarkImage = page.locator('svg.rct-icon-check');
    this.expandAllButton = page.getByRole('button', { name: 'Expand all' });
    this.collapseAllButton = page.getByRole('button', { name: 'Collapse all' });
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
    const filtered = ['elems', 'page', 'homeCheckbox', 'expandAllButton', 'collapseAllButton', 'checkmarkImage'];
    const elems = Object.keys(this).filter((arrayItem) => !filtered.includes(arrayItem));
    return elems;
  }

  allCheckboxes() {
    const filtered = ['elems', 'page', 'expandAllButton', 'collapseAllButton', 'checkmarkImage'];
    const elems = Object.keys(this).filter((arrayItem) => !filtered.includes(arrayItem));
    return elems;
  }

  checkAll() {
    const filtered = ['elems', 'page', 'expandAllButton', 'collapseAllButton'];
    // const vvv = ['workspaceCheckbox', 'notesCheckbox'];
    const elems = Object.keys(this).filter((arrayItem) => !filtered.includes(arrayItem));
    // for (let idx = 0, end = vvv.length; idx < end; idx += 1) {
    //   console.log(this[vvv[idx]]);
    //   yield this[vvv[idx]];
    // }
    // await elems.forEach((arrayItem) => this[arrayItem].click());
    // console.log(elems);
    return elems;
  }
};
