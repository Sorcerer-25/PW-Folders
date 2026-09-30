import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1")
    await page.getByRole("button",{name:"Start"}).click()
    await page.locator('[id="loading"]').waitFor({state:"attached"})
    console.log("Load added");
    await page.locator('[id="loading"]').waitFor({state:"hidden"})
    console.log("Load Hidden");
    let text = await page.locator('//div[@id="finish"]/h4').textContent()
    console.log(text);
})