import { expect, test } from "@playwright/test";
import data from "../../test-data/data.json";
import { Login } from "../../pages/login.js";
import { Home } from "../../pages/home.js";
import { Products } from "../../pages/products.js";
import { Logout } from "../../pages/logout.js";
import { Excel } from "../../utilities/excel.js";

test("Product Creation and Logout Flow", async ({ page }) => {
    let login = new Login(page);
    let home = new Home(page);
    let products = new Products(page);
    let logout = new Logout(page);
    let excel = new Excel()

    let productName = excel.data("products",3,2)

    // let productName = 'Vandal';

    await login.navigate(data.url);
    await login.login(data.uname, data.password);

    await home.click('products');

    await products.createProduct();
    await products.fillProductDetails(productName);

    let actualProductName = await products.productValidation();
    expect(actualProductName.trim()).toBe(productName);

    await logout.logout();
});