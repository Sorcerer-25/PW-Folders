import {test,expect} from "@playwright/test"


test("Validate" ,async ({page}) => {

    await page.goto("https://www.saucedemo.com/")
    await page.locator('[placeholder="Username"]').click()

    let actual_uname = "standard_user"
    let actual_pass = "secret_sauce"

    await page.keyboard.type("Name")
    await page.reload()

    await page.locator('[placeholder="Username"]').fill(actual_uname)
    await page.locator('[placeholder="Password"]').fill(actual_pass)
    
    expect(await page.locator('[placeholder="Username"]').inputValue()).toBe(actual_uname)
    expect(await page.locator('[placeholder="Password"]').inputValue()).toBe(actual_pass)

    await page.getByRole("button",{name:"Login"}).click()

    await page.goBack()
    expect(await page.url(),"Login page not visible").toBe("https://www.saucedemo.com/")
    await page.goForward()
    expect(await page.url(),"").toBe("https://www.saucedemo.com/")

})