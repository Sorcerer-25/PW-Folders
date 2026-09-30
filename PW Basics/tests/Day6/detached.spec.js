import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator('[class="q7ywiQ"]').waitFor({state:"attached"})
    await page.locator('[role="button"]').click()
    await page.locator('[class="q7ywiQ"]').waitFor({state:"detached"})
    await page.screenshot({path:"tests/Day6/detached.png"})
})