import { expect, test } from "@playwright/test";
import data from "../../test-data/data.json";
import { Login } from "../../pages/login.js";
import { Home } from "../../pages/home.js";
import { Leads } from "../../pages/leads.js";
import { Logout } from "../../pages/logout.js";
import { Excel } from "../../utilities/excel.js"; 

test("Lead Creation using Excel Utility Flow", async ({ page }) => {
    let login = new Login(page);
    let home = new Home(page);
    let leads = new Leads(page);
    let logout = new Logout(page);
    let excel = new Excel();

    let fname = await excel.data("leads", 2, 2);
    let lname = await excel.data("leads", 2, 3);
    let org   = await excel.data("leads", 2, 4);

    await login.navigate(data.url);
    await login.login(data.uname, data.password);

    await home.click('leads');

    await leads.initiateLeadCreation();
    await leads.fillLeadDetails(fname, lname, org);

    let { actualFirstName, actualLastName, actualCompany } = await leads.verifyLeadDetails();
    expect(actualFirstName).toBe(fname);
    expect(actualLastName).toBe(lname);
    expect(actualCompany).toBe(org);

    await logout.logout();
});