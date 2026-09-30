import { expect, test } from "@playwright/test";
import data from "../../test-data/data.json";
import { Login } from "../../pages/login.js";
import { Home } from "../../pages/home.js";
import { Campaigns } from "../../pages/campaigns.js";
import { Logout } from "../../pages/logout.js";
import { Excel } from "../../utilities/excel.js";

test("Campaign Creation and Verification Flow", async ({ page }) => {
    let login = new Login(page);
    let home = new Home(page);
    let campaigns = new Campaigns(page);
    let logout = new Logout(page);
    let excel = new Excel();

    let campaignName = await excel.data("campaign", 2, 2);

    await login.navigate(data.url);
    await login.login(data.uname, data.password);

    await campaigns.navigateToCampaignsMenu(home);

    await campaigns.initiateCampaignCreation();
    await campaigns.fillCampaignDetails(campaignName);

    let actualCampaignName = await campaigns.campaignValidation();
    expect(actualCampaignName.trim()).toBe(campaignName);

    await logout.logout();
});