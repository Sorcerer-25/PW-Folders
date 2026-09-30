import {test} from "@playwright/test"

test("insta login",async ({page}) => {
    await page.goto("https://www.instagram.com/?hl=en")
    // await page.waitForTimeout(2000)
    await page.locator('input[name="email"]').fill('atharv')
    await page.locator('input[name="pass"]').fill("xyz152266hfch")
    await page.locator('div[aria-label="Log In"]').click()

    await page.waitForTimeout(50000)

})
