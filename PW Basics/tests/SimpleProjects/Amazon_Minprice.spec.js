import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("harry potter")
    await page.keyboard.press("Enter")
    

})