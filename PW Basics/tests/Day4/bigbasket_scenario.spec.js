import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.bigbasket.com/")
    let url = await page.url()
    await page.locator('(//a[@href="/?nc=logo"])[1]').click()
    let newURL = await page.url()
    if(url === newURL)
        console.log("New Page Opend");
    else
        console.log("Same Page");
})