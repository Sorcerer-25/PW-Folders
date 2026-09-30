import {test,chromium} from "@playwright/test"
import path from "node:path"

test("scenario 6",async () => {
    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext()
    let tab = await context.newPage()
    await tab.setViewportSize({height:800,width:1300})
    await tab.goto("https://github.com")
    let title = await tab.title()
    let url = await tab.url()
    console.log("URL is : ",url);
    console.log("Title is : ",title);
    await tab.screenshot({path : "tests/Assignment_1/scenario6_ss/github.png"})

    await tab.goto("https://wikipedia.org")
    let title2 = await tab.title()
    if (title2.includes("Wikipedia"))
    {
        console.log("Wiki Loaded");
    }
    else
    {
        console.log("Error");
    }

    await tab.goto("https://amazon.in")
    await tab.waitForTimeout(3000)
    let cookies = await context.cookies()
    console.log("Cookies Count (before) : ",cookies.length)
    await context.clearCookies()
    let emptyCookies = await context.cookies()
    console.log("Cookie Count (after) :", emptyCookies.length)
    await tab.screenshot({path : "tests/Day2/Assignment/scenario6_ss/amazon.png"})

    browser.close()
})