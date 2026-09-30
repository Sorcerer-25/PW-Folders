import {test,chromium} from "@playwright/test"
import path from "node:path"

test("scenario 5",async () => {
    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext()
    let tab = await context.newPage()
    await tab.setViewportSize({height:700,width:1000})
    await tab.goto("https://stackoverflow.com")
    let url = await tab.url()
    console.log("URL is : ",url);

    if (url.includes("stack"))
    {
        console.log("StackOverflow opened");
        await tab.goto("https://www.amazon.com/")
        await tab.waitForTimeout(5000)
        let newURL = await tab.url()
        console.log("New URL is : ", newURL);
        await tab.screenshot({path : "tests/Assignment_1/amazon.png"})
    }
})