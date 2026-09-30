import {test} from "@playwright/test"

test("iframe",async({page}) => {

    await page.goto("https://vinothqaacademy.com/iframe/")
    let fr2 = await page.frameLocator('[name="popuppage"]')
    await fr2.locator('[name="alertbox"]').click()
    await page.waitForTimeout(3000)


    let fr1 = await page.frame({url:'https://vinothqaacademy.com/demo-site/'})
    await fr1.locator('[name="vfb-5"]').fill("Kavinesh Kumar")
    await page.waitForTimeout(3000)


    let fr3 = await page.frame({name:'employeetable'})
    await fr3.locator('[id="nameInput"]').fill("Kavineshwaran")
    await page.waitForTimeout(3000)
})

test("all frames",async({page}) => {

    await page.goto("https://vinothqaacademy.com/iframe/")
    let frm = await page.frames()
    await frm[1].locator('[id="nameInput"]').fill("KAVIN")
    await page.waitForTimeout(4000)
})

test.only("nested frames",async({page}) => {

    await page.goto("https://www.dezlearn.com/nested-iframes-example/")
    let frm = await page.frame({name:'demo_parent_iframe'})
    let cfrm = await frm.childFrames()
    await cfrm[0].locator('[id="u_5_6"]').click()
    await page.waitForTimeout(4000)
})