export class Org {
  constructor(page) {
    this.page = page;

    this.createOrg = page.locator('[title="Create Organization..."]');
    this.enterName = page.locator('[name="accountname"]');
    this.industryDropdown = page.locator('[name="industry"]');
    this.save = page.locator('[title="Save [Alt+S]"]').first();
    this.validOrg = page.locator('[id="dtlview_Organization Name"]');
  }

  async createOrganization() {
    await this.createOrg.click();
  }

  async fillOrgData(name, category) {
    await this.enterName.fill(name);
    await this.industryDropdown.selectOption({ value: category });
    await this.save.click();
  }

  async orgValidation() {
    return await this.validOrg.textContent();
  }
}
