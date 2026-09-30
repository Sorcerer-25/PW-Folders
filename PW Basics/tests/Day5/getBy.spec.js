import {test} from "@playwright/test"

test("valid_test" ,async ({page,browser}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill("kavi")
    await page.getByPlaceholder("Password").fill("admin123")
    // await page.keyboard.press("Enter")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole("")
    let dashboard = await page.getByRole("heading",{name:"Dashboard"}).textContent()
    if(dashboard === "Dashboard")
        console.log("Dashboard Opened");
    else
    {
        console.log("Dashboard Not Opened");
        browser.close()

    }

})