import {test} from "@playwright/test"

test("Data Test",async ({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("standard_user")
    await page.getByTestId("password").fill("secret_sauce")
    await page.getByTestId("login-button").click()
    await page.waitForTimeout(50000)
})