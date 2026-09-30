import {test} from "@playwright/test"

test("scroll",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,500)
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,1000)
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,-1400)
    await page.waitForTimeout(3000)
    await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
})


test.only("horizontal",async ({page}) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/horizontal-scroll.php")
    await page.waitForTimeout(3000)
    await page.locator('(//p[@class="text-justify"])[1]').hover()
    await page.mouse.wheel(200,0)
    await page.waitForTimeout(3000)
    
})