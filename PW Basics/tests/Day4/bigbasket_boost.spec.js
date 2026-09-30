import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.bigbasket.com/")
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("boost")
    await page.keyboard.press('Enter')
    // await page.locator('//button[@class="bJtikv"]').click()
    let price = await page.locator('(//div[.="IQOO Neo 10 (Alpine White, 256 GB)"])[1]/ancestor::div[2]/descendant::div[@class="hZ3P6w DeU9vF"]').textContent()
    console.log(price);
})