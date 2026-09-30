import {expect, test} from "@playwright/test"

test("dialog alert",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async(diag) => {
        await expect(diag.type()).toBe("confirm")
        await expect(diag.message()).toContain("Press a button")
        await page.waitForTimeout(2000)
        await diag.accept()

    })
    await page.click('[id="confirmBt"]')
    await page.waitForTimeout(3000)
    await page.click('[id="confirmBtn"]')
    await page.waitForTimeout(3000)
    await page.click('[id="confirmBtn"]')
    await page.waitForTimeout(3000)
    await expect(await page.locator('[id="demo"]')).toContainText("OK")
})