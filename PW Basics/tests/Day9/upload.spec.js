import {test} from "@playwright/test"
import path from "node:path"

test("upload",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('[id="singleFileInput"]').setInputFiles("A:/PDF/Zyphera - CiviQ.pdf")
    await page.waitForTimeout(2000)

    await page.locator('[id="singleFileInput"]').setInputFiles(path.join(__dirname,"downloads/text.pdf"))
    // await page.waitForTimeout()

    await page.locator('[id="multipleFilesInput"]').setInputFiles([path.join(__dirname,"../Day6/desc.png"),path.join("A:/PPT/ISTE Presentation.pptx")])
    await page.waitForTimeout(3000)
})

