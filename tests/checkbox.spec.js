const { test, expect } = require('@playwright/test');
const { CheckBoxPage } = require('../src/utilities/pages/checkBoxPage');

test('Verify checkboxes can be expanded and collapsed', async ({ page }) => {
  const checkBox = new CheckBoxPage(page);
  await checkBox.goto();

  await test.step('Verify the checkboxes can be expanded', async () => {
    await checkBox.expandAll();
    const elems = checkBox.allCheckboxes();
    elems.forEach((arrayItem) => expect(checkBox[arrayItem]).toBeVisible());
  });

  await test.step('Verify the checkboxes can be collapsed', async () => {
    await checkBox.collapseAll();
    const elems = checkBox.allHiddenCheckboxes();
    elems.forEach((arrayItem) => expect(checkBox[arrayItem]).not.toBeVisible());
  });
});

test('Verify each checkbox can be checked', async ({ page }) => {
  const checkBox = new CheckBoxPage(page);
  await checkBox.goto();
  await checkBox.expandAll();
  await checkBox.homeCheckbox.click();
  for (const check of await checkBox.checkmarkImage.all()) { expect(check).toBeVisible(); }
});
