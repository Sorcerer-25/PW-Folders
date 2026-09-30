import {expect, test} from "@playwright/test"


test("Flipkart suggest",async({page})=>{

    await page.goto("https://amazon.in/")
    let search = await page.locator('[id="twotabsearchtextbox"]')
    await search.fill('iqoo neo 10')
    await page.keyboard.press("Enter")

    let [page1] = await Promise.all([page.waitForEvent("popup"),page.locator('//a[@class="a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal"]').first().click()])
    
    await page1.locator('(//input[@title="Add to Shopping Cart"])[2]').click()
    await page1.waitForTimeout(2000)
})