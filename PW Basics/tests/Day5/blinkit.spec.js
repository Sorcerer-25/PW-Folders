import {test} from "@playwright/test"

test("blinkit search",async ({page}) => {
    await page.goto("https://blinkit.com/")
    // await page.getByRole("button",{name:"Detect my location"}).click()
    await page.locator('//input[@placeholder="search delivery location"]').fill("Rajajinagar")
    await page.locator('(//div[@class="LocationSearchList__LocationListContainer-sc-93rfr7-0 lcVvPT"])[1]').click()
    await page.locator('//a[@class="SearchBar__Button-sc-16lps2d-4 fgHDQx"]').click()
    await page.locator('//input[@class="SearchBarContainer__Input-sc-hl8pft-3 irVxjq"]').fill("Pepsi")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})