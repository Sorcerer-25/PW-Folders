import { expect, test } from "@playwright/test";
import data from "../../test-data/data.json";
import { Login } from "../../pages/login.js";
import { Home } from "../../pages/home.js";
import { Org } from "../../pages/organization.js";
import { Logout } from "../../pages/logout.js";
import { Excel } from "../../utilities/excel.js";

test("Organization Creation with Industry Category Flow", async ({ page }) => {
    let login = new Login(page);
    let home = new Home(page);
    let orgPage = new Org(page);
    let logout = new Logout(page);
    let excel = new Excel();

    let org = await excel.data("orgData", 3, 2);
    let randomName = org + Date.now()
    let category = 'Healthcare'; 

    await login.navigate(data.url);
    await login.login(data.uname, data.password);

    await home.click('organizations');

    await orgPage.createOrganization();
    await orgPage.fillOrgData(randomName, category);

    let actualOrgName = await orgPage.orgValidation();
    expect(actualOrgName.trim()).toBe(randomName);

    await logout.logout();

    expect().toBeVisible()
});