import {test,expect} from "@playwright/test"

test("URL",async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    let username = await page.getByTestId("username")
    expect(username).toBeEditable()
    await username.fill("standard_user")
    let password = await page.getByTestId("password")
    expect(password).toBeEditable()
    await password.fill("secret_sauce")
    let submit = await page.getByTestId("login-button")
    expect (submit).toBeEditable()
    await submit.click()
    expect(await page.url()).toBe("https://www.saucedemo.com/inventory.html")
})