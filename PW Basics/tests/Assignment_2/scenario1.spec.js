import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto("https://demoqa.com/text-box")
    await page.locator('//input[@placeholder="Full Name"]').fill("Atharv")
    await page.getByRole("button",{name:"Submit"}).click()
    let output = await page.locator('//p[@id="name"]').textContent()
    if(output.includes("Atharv"))
        console.log("Output is displayed correctly ==> ",output);
    else
        console.log(output);
})