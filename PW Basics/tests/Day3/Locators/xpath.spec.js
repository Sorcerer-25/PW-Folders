import {test} from "@playwright/test"

test("insta login",async ({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.locator('//html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input').fill('standard_user')
    await page.locator('//html/body/div/div/div[2]/div[1]/div/div/form/div[2]/input').fill("secret_sauce")
    await page.locator('//html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button').click()
    await page.locator('//html/body/div/div/div/div[1]/div/div[3]/a').click()
    await page.locator('//html/body/div/div/div/div[2]/div/div[2]/button[1]').click()
    await page.locator('//html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[1]/a').click()
})
