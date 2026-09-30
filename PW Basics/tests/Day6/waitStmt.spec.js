import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("harry potter")
    let suggestion = await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]')
    // await suggestion.last().waitFor({state:"attached"})
    await page.waitForSelector('[class="s-suggestion s-suggestion-ellipsis-direction"]',{state:"visible"})
    console.log(await suggestion.allTextContents());
})