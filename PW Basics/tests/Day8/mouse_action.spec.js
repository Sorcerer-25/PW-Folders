import {test} from "@playwright/test"

test("Mouse up/down",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    await page.locator('[id="circle"]').hover()
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.up()


})

test("click",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.locator('[id="btn"]').click({button:"left",clickCount:3})
    await page.waitForTimeout(4000)
})

test("double click",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator('[id="btn_a"]').dblclick()
    await page.waitForTimeout(4000)
})

test.only("right click",async ({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
    await page.locator('[id="btn_a"]').click({button:"right"})
    await page.waitForTimeout(4000)
})
