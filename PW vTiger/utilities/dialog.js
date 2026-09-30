export class Dialog {
  constructor(page) {
    this.page = page;
  }
  toAccept() {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }
  toDecline() {
    this.page.on("dialog", async (dialog) => {
      await dialog.dismiss();
    });
  }
}
