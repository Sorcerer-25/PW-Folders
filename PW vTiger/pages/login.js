export class Login {
  constructor(page) {
    this.page = page;

    this.uname = page.locator('[name="user_name"]');
    this.pass = page.locator('[name="user_password"]');
    this.submit = page.locator('[id="submitButton"]');
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async login(user, password) {
    await this.uname.fill(user);
    await this.pass.fill(password);
    await this.submit.click();
  }
}
