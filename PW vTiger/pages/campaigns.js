export class Campaigns {
  constructor(page) {
    this.page = page;
    this.campaignsSubMenu = page.locator('[name="Campaigns"]');
    this.createCampaignBtn = page.locator('[title="Create Campaign..."]');
    this.campaignNameInput = page.locator('[name="campaignname"]');
    this.saveBtn = page.locator('[title="Save [Alt+S]"]').first();
    this.validCampaignName = page.locator('[id="dtlview_Campaign Name"]');
  }

  async navigateToCampaignsMenu(homePageInstance) {
    await homePageInstance.more.hover();
    await this.campaignsSubMenu.click();
  }

  async initiateCampaignCreation() {
    await this.createCampaignBtn.click();
  }

  async fillCampaignDetails(name) {
    await this.campaignNameInput.fill(name);
    await this.saveBtn.click();
  }

  async campaignValidation() {
    return await this.validCampaignName.textContent();
  }
}
