import {test} from "@playwright/test"

test("move element",async({page})=>{

    await page.goto("https://demoqa.com/select-menu")
    await page.locator('(//div[@class="css-19bb58m"])[2]').click()
    // for(let i = 0;i<4;i++)
    //     await page.keyboard.press("ArrowDown")
    // await page.waitForTimeout(4000)
    await page.locator('[id="react-select-3-option-0-4"]').click()
    await page.waitForTimeout(4000)
})


test("Flipkart suggest",async({page})=>{

    await page.goto("https://flipkart.com/")
    await page.locator('(//input[@placeholder="Search for Products, Brands and More"])').fill('phone')
    await page.locator('(//li[@class="Swx5kP"])[2]').click()
    await page.waitForTimeout(4000)
})


