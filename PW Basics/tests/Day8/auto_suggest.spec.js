import {expect, test} from "@playwright/test"


test("Flipkart suggest",async({page})=>{

    await page.goto("https://amazon.in/")
    let search = await page.locator('[id="twotabsearchtextbox"]')
    await search.fill('cake')
    await search.click()
    await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]').first().waitFor({state:"attached"})
    let arr = await page.locator('[class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents()
    for(let i=0; i<arr.length;i++)
    {
        if(arr[i] === "cake baking set")
            await page.locator(`(//div[@class="s-suggestion s-suggestion-ellipsis-direction"])[${i+1}]`).click()
    }
    await page.waitForTimeout(2000)
    
    expect(await page.locator('//input[@id="twotabsearchtextbox"]').inputValue()).toBe("cake baking set")
    await page.waitForTimeout(3000)
})