import { expect, test } from "@playwright/test";
import data from "../../test-data/data.json";
import { Login } from "../../pages/login.js";
import { Home } from "../../pages/home.js"; 
import { Org } from "../../pages/organization.js";
import { Logout } from "../../pages/logout.js";
import { Excel } from "../../utilities/excel.js";

test("Organization Creation", async ({ page }) => {
    let login = new Login(page);
    let home = new Home(page); 
    let org = new Org(page);
    let logout = new Logout(page);
    let excel = new Excel();

    let baseName = await excel.data("orgData", 2, 2);
    let randomName = baseName + Date.now();
    
    await login.navigate(data.url);
    await login.login(data.uname, data.password);
  
    await home.click('organizations'); 
    
    await org.createOrganization();
    await org.fillOrgData(randomName);
    
    let actualName = await org.orgValidation();
    expect(actualName.trim()).toBe(randomName);

    await logout.logout();
});

//* Works in debug mode, headed mode, headless mode
//! Requires stable and fast internet connection

/*
athar_nk0za4o@Atharv MINGW64 /y/vTiger
$ npx playwright test tests/scenarios/TC_01.spec.js --headed --debug

Running 1 test using 1 worker
  1 passed (1.0m)

To open last HTML report run:

  npx playwright show-report
*/