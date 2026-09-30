export class Home {
  constructor(page) {
    this.page = page;
    this.calendar = page.locator('//a[text()="Calendar"]');
    this.organizations = page.locator('//a[text()="Organizations"]');
    this.contacts = page.locator('//a[text()="Contacts"]');
    this.opportunities = page.locator('//a[text()="Opportunities"]');
    this.products = page.locator('//a[text()="Products"]');
    this.documents = page.locator('//a[text()="Documents"]');
    this.email = page.locator('//a[text()="Email"]');
    this.troubleTickets = page.locator('//a[text()="Trouble Tickets"]');
    this.dashboard = page.locator('//a[text()="Dashboard"]');
    this.leads = page.locator('//a[text()="Leads"]');
    this.more = page.locator('//a[text()="More"]');
  }

  async click(variable) {
    await this[variable].click();
  }
}
