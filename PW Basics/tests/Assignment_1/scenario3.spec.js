import {test,chromium} from "@playwright/test"
import path from "node:path"

test("scenario 3",async () => {
    let browser = await chromium.launch({headless:false})
    let context = await browser.newContext()
    let tab = await context.newPage()
    await tab.setViewportSize({height:600,width:800})
    await tab.goto("https://www.amazon.in/")
    await tab.waitForTimeout(2000)
    let cookies = await context.cookies()
    console.log("Cookies Count (before) : ",cookies.length)
    await context.clearCookies()
    let emptyCookies = await context.cookies()
    console.log("Cookie Count (after) :", emptyCookies.length)
})
