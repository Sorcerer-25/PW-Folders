import {test} from "@playwright/test"

test("move element",async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
    await page.locator('[class="cursor-move bg-orange-600 w-36 h-11 p-3 text-white absolute react-draggable"]').hover()
    await page.mouse.down()

    let a = await page.locator('[class="draggable-column bg-slate-100 flex justify-center items-center p-2 min-h-[400px] relative"]').boundingBox()
    console.log(a);
     await page.mouse.move(0,0)
     await page.waitForTimeout(4000)
     await page.mouse.move(0,400)
     await page.waitForTimeout(4000)

})

test.only("drag and drop",async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.locator('(//div[@class="draggable"])[1]').dragTo(page.locator('[class="drop-column  min-h-[200px] bg-slate-100"]'))
    // await page.mouse.down()
    // let coords = await page.locator('[class="drop-column  min-h-[200px] bg-slate-100"]').boundingBox()
    // console.log(coords);
    // await page.mouse.move(653,121)
    // await page.mouse.up()
    await page.waitForTimeout(2000)

})