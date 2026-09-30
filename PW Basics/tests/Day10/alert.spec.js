import {expect, test} from "@playwright/test"

test("alert",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.once('dialog', async(diag) => {
        await expect(diag.type()).toBe("alert")
        await expect(diag.message()).toContain("alert box!")
        await page.waitForTimeout(2000)
        await diag.accept()

    })
    await page.click('[id="alertBtn"]')
    await page.waitForTimeout(3000)
})



test.only("prompt",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.once('dialog', async(diag) => {
        await expect(diag.type()).toBe("prompt")
        await expect(diag.message()).toContain("name")
        await page.waitForTimeout(2000)
        await diag.accept("KK")

    })
    await page.click('[id="promptBtn"]')
    await page.waitForTimeout(3000)
})