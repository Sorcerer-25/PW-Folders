import {test,firefox} from "@playwright/test"
import path from "node:path"

test("scenario 2",async () => {
    let browser = await firefox.launch({headless:false})
    let context = await browser.newContext()
    let tab = await context.newPage()
    await tab.setViewportSize({height:768,width:1024})
    await tab.goto("https://wikipedia.org")
    await tab.waitForTimeout(3000)

    let title = await tab.title()
    if (title === "Wikipedia")
        console.log("Correct Page Loaded");
    else
        console.log("Wrong Page");
})