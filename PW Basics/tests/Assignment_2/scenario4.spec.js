import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto("https://www.flipkart.com")
    let searchbox = await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("Mobiles")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
    let product1 = await page.locator('//div[@class="jIjQ8S"]/descendant::div[@class="RG5Slk"]').first().textContent()
    let price1 = await page.locator(`(//div[@class="RG5Slk"])[1]/ancestor::div[2]/descendant::div[@class="hZ3P6w DeU9vF"]`).textContent()
    console.log(product1);
    console.log(price1);
    
})