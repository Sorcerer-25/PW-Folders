import {test} from "@playwright/test"

test("notification",async({browser}) => {

    let context = await browser.newContext({permissions:['camera','microphone','notifications','geolocation']})
    let page = await context.newPage()
    await page.goto("https://thetest.com/")
    await page.waitForTimeout(10000)
})