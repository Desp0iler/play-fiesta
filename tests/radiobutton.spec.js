const { test, expect } = require('@playwright/test');
const { RadioPage } = require('../src/utilities/pages/radioButtonPage');

test('Verify radio buttons can be selected', async ({ page }) => {
  const RadioButtonPage = new RadioPage(page);
  await RadioButtonPage.goto();

  await test.step('Verify the "Yes" radial can be selected', async () => {
    await RadioButtonPage.selectYes();
    expect(RadioButtonPage.successText).toContainText(RadioButtonPage.textFromSelectingYes);
  });

  await test.step('Verify the "Impressive" radial can be selected', async () => {
    await RadioButtonPage.selectImpressive();
    expect(RadioButtonPage.successText).toContainText(RadioButtonPage.textFromSelectingImpressive);
  });
});
