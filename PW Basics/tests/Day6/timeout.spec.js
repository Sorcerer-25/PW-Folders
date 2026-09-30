import {test} from "@playwright/test"


test.use({
    actionTimeout:2000,
})

test("element wait",async ({page}) => {

    test.setTimeout(1000)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[placeholder="Username"]').fill("Sa")
    await page.locator('[placeholder="Password"]').fill("12345")
})