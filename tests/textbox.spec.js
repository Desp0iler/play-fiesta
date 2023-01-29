const { test, expect } = require('@playwright/test');
const { TextBoxPage } = require('../src/utilities/pages/textBoxPage');

test('That a form can be populated and submitted', async ({ page }) => {
  const textBox = new TextBoxPage(page);
  await textBox.goto();

  await test.step('Verify the form fields can be populated', async () => {
    await textBox.fillform();
  });

  await test.step('verify the form can be submitted', async () => {
    await textBox.submit();
  });

  await test.step('Verify the input submitted matches returned values', async () => {
    expect(textBox.nameField).toContainText(textBox.data.fullName);
    expect(textBox.emailField).toContainText(textBox.data.email);
    expect(textBox.currAddressField).toContainText(textBox.data.currentAddress);
    expect(textBox.permAddressField).toContainText(textBox.data.permAddress);
  });
});
