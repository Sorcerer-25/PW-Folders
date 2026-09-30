import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto(" https://opensource-demo.orangehrmlive.com")
    await page.locator('//input[@placeholder="Username"]').fill("Admin")
    await page.locator('//input[@placeholder="Password"]').fill("admin123")
    await page.getByRole("button",{name:"Login"}).click()
    let dashboard = await page.getByRole("heading",{name:"Dashboard"}).textContent()
    
    if(dashboard === "Dashboard")
        console.log("Dashboard Opened");
})