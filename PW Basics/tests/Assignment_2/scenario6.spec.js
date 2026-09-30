import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto("https://www.flipkart.com")
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("Powerbank")
    let svg = await page.locator(`(//*[name()="svg"])[3]`)
    // await svg.click()
    await page.keyboard.press("Enter")
    let description = await page.locator('(//div[@class="RGLWAk"]/descendant::div[@class="U_GKRr"])[7]')
    await description.screenshot({path : "tests/Assignment_2/desc.png"})
    console.log("Product Description : ",await description.textContent());
})  