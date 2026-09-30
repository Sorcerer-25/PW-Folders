import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("iqoo Neo 10")
    await page.keyboard.press('Enter')
    // await page.locator('//button[@class="bJtikv"]').click()
    let price = await page.locator('(//div[@class="jIjQ8S"])[3]/descendant::div[@class="hZ3P6w DeU9vF"]').textContent()
    let name = await page.locator('(//div[@class="jIjQ8S"])[3]/descendant::div[@class="RG5Slk"]').textContent()
    await page.waitForTimeout(5000)
    console.log(name);
    console.log(price);

})