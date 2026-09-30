import {test} from "@playwright/test"

test("amazon title",async ({page})=>{
    await page.goto("https://www.youtube.com/")
    await page.waitForTimeout(2000)
    let pageTitle = await page.title()
    let url = await page.url()

    
    console.log(url);
    console.log(pageTitle);

    if(pageTitle === "YouTube")
        console.log("YESSSSSSS");
    else
        console.log("NOOOOOOOOOO");
})