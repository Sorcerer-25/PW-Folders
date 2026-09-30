import {test,chromium} from "@playwright/test"
import path from "node:path"

test("scenario 4",async () => {
    let browser = await chromium.launch()
    let context = await browser.newContext()
    let tab = await context.newPage()
    await tab.setViewportSize({height:800,width:1200})
    await tab.goto("https://flipkart.com")
    await tab.waitForTimeout(3000)

    let url = await tab.url()

    console.log("URL is : ",url);
    await tab.screenshot({path : "tests/Assignment_1/screenshot/flipkart.png"})
})