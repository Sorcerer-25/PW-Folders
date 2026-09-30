import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("phone")
    await page.keyboard.press("Enter")
    await page.waitForLoadState("domcontentloaded")
    await page.screenshot({path:"tests/Day6/wait.jpg"})
    

})