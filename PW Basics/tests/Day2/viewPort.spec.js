import {test} from "@playwright/test"

test("viewport size", async ({page}) => {
    var vp = page.viewportSize()
    console.log(vp);
    await page.setViewportSize({width:500,height:500})
    await page.goto("https://www.youtube.com")
    await page.setViewportSize({width:1000,height:800})
    await page.waitForTimeout(5000)
    await page.setViewportSize({width:1500,height:1200})
    var vp = page.viewportSize()
    console.log(vp);
    await page.waitForTimeout(5000)
})