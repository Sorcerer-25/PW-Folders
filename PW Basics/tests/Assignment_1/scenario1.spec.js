import {test,chromium} from "@playwright/test"
import path from "node:path"

test("scenario 1",async () => {
    let browser = await chromium.launch()
    let context = await browser.newContext()
    let tab = await context.newPage()
    await tab.setViewportSize({height:720,width:1280})
    await tab.goto("https://github.com")
    await tab.waitForTimeout(3000)

    let url = await tab.url()
    let title = await tab.title()

    console.log("URL is : ",url);
    console.log("GITHUB Title : ",title);
    await tab.screenshot({path : "tests/Assignment_1/github_home.png"})
})