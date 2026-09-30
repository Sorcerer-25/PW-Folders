import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.nykaa.com/")
    let url = await page.url()
    await page.locator('(//a[@href="/?root=logo"])').click()
    let newURL = await page.url()
    if(url === newURL)
        console.log("Same Tab/Page was opened");
    else
        console.log("New Tab/Page was opened");

    console.log(url);
    console.log(newURL);
})

