export class Logout {
  constructor(page) {
    this.page = page;

    this.admin = page.locator('//td[@class="small"]/img').first();
    this.signout = page.locator('//a[text()="Sign Out"]');
  }

  async logout() {
    await this.admin.hover();
    await this.signout.click();
  }
}
