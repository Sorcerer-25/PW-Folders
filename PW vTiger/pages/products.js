export class Products {
  letructor(page) {
    this.page = page;

    this.createBtn = page.locator('[title="Create Product..."]');
    this.productName = page.locator('[name="productname"]');
    this.saveBtn = page.locator('[title="Save [Alt+S]"]').first();
    this.validProductName = page.locator('[id="dtlview_Product Name"]');
    this.productCreatePage = page.locator('[class="lvtHeaderText"]');
    this.productsMenu = page.locator('//a[text()="Products"]');
    this.searchbar = page.locator('[name="search_text"]');
    this.searchDropdown = page
      .locator('//select[@id="bas_searchfield"]')
      .first();
    this.searchSubmitBtn = page
      .locator('[class="crmbutton small create"]')
      .first();

    this.tableRows = page.locator(
      "tr[onmouseover=\"this.className='lvtColDataHover'\"]",
    );
    this.deleteButton = page.locator('[value="Delete"]').first();

    this.noRecordsText = page.locator(
      '//span[@class="genHeaderSmall" or contains(text(),"No Product Found")]',
    );
  }

  async createProduct() {
    await this.createBtn.click();
  }

  async fillProductDetails(productName) {
    await this.productName.fill(productName);
    await this.saveBtn.click();
  }

  async productValidation() {
    return await this.validProductName.textContent();
  }

  async getHeaderContent() {
    return await this.productCreatePage.textContent();
  }

  async searchProduct(productName) {
    await this.productsMenu.first().click();
    await this.searchbar.fill(productName);
    await this.searchDropdown.selectOption({ value: "productname" });
    await this.searchSubmitBtn.click();
    await this.page.waitForTimeout(2000);
  }

  async locateAndExecuteDeletion(targetName) {
    let targetRow = this.page.locator(
      `//tr[contains(@onmouseover,"lvtColDataHover") and .//a[text()="${targetName}"]]`,
    );

    if ((await targetRow.count()) > 0) {
      let productId = await targetRow.locator("td").nth(1).textContent();
      let cleanedId = productId.trim();
      console.log(`Target item found! Product ID: ${cleanedId}`);

      await targetRow.locator('input[type="checkbox"]').check();
      await this.deleteButton.click();
      await this.page.waitForTimeout(2000);

      return cleanedId;
    } else {
      throw new Error(
        `Could not find a product matching name string: ${targetName}`,
      );
    }
  }

  async validateProductDeleted(productId) {
    await this.productsMenu.first().click();
    await this.searchbar.fill(productId);
    await this.searchDropdown.selectOption({ value: "product_no" });
    await this.searchSubmitBtn.click();
    await this.page.waitForTimeout(2000);

    let rowCount = await this.tableRows.count();
    return rowCount === 0;
  }
}
