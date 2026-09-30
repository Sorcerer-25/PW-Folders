import { expect, test } from "@playwright/test";
import data from "../../test-data/data.json";
import { Login } from "../../pages/login.js";
import { Home } from "../../pages/home.js";
import { Products } from "../../pages/products.js";
import { Logout } from "../../pages/logout.js";
import { Excel } from "../../utilities/excel.js";
import { Random } from "../../utilities/random.js";
import { Dialog } from "../../utilities/dialog.js";

test("Product Search, ID Logging and Dynamic Target Deletion Flow", async ({ page }) => {
    let login = new Login(page);
    let home = new Home(page);
    let products = new Products(page);
    let logout = new Logout(page);
    let excel = new Excel();
    let random = new Random();
    let dialog = new Dialog(page);

    let num = random.randomNumber();
    let baseName = await excel.data("products", 2, 2); 
    let uniqueProductName = baseName + "_" + num;

    await login.navigate(data.url);
    await login.login(data.uname, data.password);

    await home.click('products');

    await products.createProduct();
    await products.fillProductDetails(uniqueProductName);

    let header = await products.getHeaderContent();
    expect(header).toContain(uniqueProductName);

    await products.searchProduct(uniqueProductName);

    dialog.toAccept(); 
    
    let deletedId = await products.locateAndExecuteDeletion(uniqueProductName);
    
    let isDeletedSuccessfully = await products.validateProductDeleted(deletedId);
    expect(isDeletedSuccessfully).toBe(true);

    await logout.logout();
});