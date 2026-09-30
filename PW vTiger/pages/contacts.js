export class Contacts {
  constructor(page) {
    this.page = page;

    this.createContactBtn = this.page.locator('[title="Create Contact..."]');
    this.firstNameInput = this.page.locator('[name="firstname"]');
    this.lastNameInput = page.locator('[name="lastname"]');
    this.orgLookupIcon = page.locator('//img[@title="Select"]').first();
    this.saveBtn = page.locator('[title="Save [Alt+S]"]').first();

    this.validFirstName = page.locator('[id="dtlview_First Name"]');
    this.validLastName = page.locator('[id="dtlview_Last Name"]');
  }

  async createContact() {
    await this.createContactBtn.click();
  }

  async fillDetails(firstName, lastName) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async selectOrganization(orgName) {
    let [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.orgLookupIcon.click(),
    ]);

    await popup.locator('[name="search_text"]').fill(orgName);
    await popup.locator('[name="search"]').click();
    await popup.locator(`//a[text()="${orgName}"]`).click();
  }

  async saveContact() {
    await this.saveBtn.click();
  }

  async verifyDetails() {
    let actualFirstName = await this.validFirstName.textContent();
    let actualLastName = await this.validLastName.textContent();
    return { actualFirstName, actualLastName };
  }
}
