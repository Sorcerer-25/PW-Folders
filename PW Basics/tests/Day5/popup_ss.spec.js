import {test} from "@playwright/test"

test("ss",async ({page})=>{
    await page.goto("https://www.flipkart.com")
    await page.locator('//div[@class="q7ywiQ"]').screenshot({path:"tests/Day5/popup.webp"})

})