import {test} from "@playwright/test"

test("download",async({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.fill('[placeholder="Enter text here"]',"Hello World")
    let [download] = await Promise.all([page.waitForEvent("download")],[page.locator('[id="downloadButton"]').click()])
    await download.saveAs("tests/Day9/downloads/text.pdf")
})