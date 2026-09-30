import {test} from "@playwright/test"

test("fill details",async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@placeholder="Enter Name"]').fill("Atharv")
    await page.locator('input[placeholder="Enter EMail"]').fill("atharv@gmail.com")
    await page.locator('//input[@placeholder="Enter Phone" and @id="phone"]').fill("1234567890")
    await page.getByText("Male",{exact:true}).click()
    await page.locator('label[for="tuesday"]').check()
    let con = await page.locator('label[for="tuesday"]').isChecked()
    await page.waitForTimeout(4000)
    console.log(con);
})