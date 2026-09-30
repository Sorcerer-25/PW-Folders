import {test} from "@playwright/test"
import path from "node:path"

test("Amazon Application",async ({page}) => {

    await page.goto("https://amazon.in/")
    await page.fill('[name="field-keywords"]','laptop')
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    let productNames = await page.locator('//div[@role="listitem"]/descendant::h2').allTextContents()
    for(let i=0;i<3;i++)
    {
        console.log(productNames[i]+"\n");
        await page.locator('//div[@role="listitem"]').nth(i).screenshot({path:`tests/screenshot/image${i+1}.png`})
    }

})