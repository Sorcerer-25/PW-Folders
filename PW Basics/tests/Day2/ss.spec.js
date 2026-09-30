import {test} from "@playwright/test"
import path from "node:path"


test("ss",async ({page}) => {

    await page.goto("https://www.amazon.in")
    await page.waitForTimeout(4000)
    // await page.screenshot({path : "picture.jpg"})
    await page.screenshot({path : `tests/Day2/screenshot/${Date.now()}.png`,fullPage:true},)
})

