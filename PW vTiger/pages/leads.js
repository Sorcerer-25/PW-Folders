export class Leads {
  letructor(page) {
    this.page = page;

    this.createLeadBtn = page.locator('[title="Create Lead..."]');
    this.firstNameInput = page.locator('[name="firstname"]');
    this.lastNameInput = page.locator('[name="lastname"]');
    this.companyInput = page.locator('[name="company"]');
    this.saveBtn = page.locator('[title="Save [Alt+S]"]').first();

    this.validFirstName = page.locator('[id="dtlview_First Name"]');
    this.validLastName = page.locator('[id="dtlview_Last Name"]');
    this.validCompany = page.locator('[id="dtlview_Company"]');
  }

  async initiateLeadCreation() {
    await this.createLeadBtn.click();
  }

  async fillLeadDetails(firstName, lastName, company) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.companyInput.fill(company);
    await this.saveBtn.click();
  }

  async verifyLeadDetails() {
    let actualFirstName = await this.validFirstName.textContent();
    let actualLastName = await this.validLastName.textContent();
    let actualCompany = await this.validCompany.textContent();

    return {
      actualFirstName: actualFirstName.trim(),
      actualLastName: actualLastName.trim(),
      actualCompany: actualCompany.trim(),
    };
  }
}
