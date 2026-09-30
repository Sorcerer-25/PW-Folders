import {test} from "@playwright/test"

test("qspider login", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('[placeholder="Enter your name"]').pressSequentially("Atharv")
    await page.keyboard.down("Space")
    await page.keyboard.up("Space")
    await page.keyboard.press("Shift+A")
    await page.keyboard.press('Tab')
    await page.keyboard.type('atharv@gmail')
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Tab")
    await page.keyboard.press("Enter")

    page.waitForLoadState()
    


})