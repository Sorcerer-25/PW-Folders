import {test} from "@playwright/test"

test("qspider login", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('[placeholder="Enter your name"]').click()
    await page.keyboard.type('Atharv')
    await page.keyboard.press("Space")
    await page.keyboard.type('Bhutkar')
    await page.keyboard.press('Tab')
    await page.keyboard.type('atharv@gmail')
    await page.keyboard.press("Tab")
    await page.keyboard.type('12345')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Enter')

})