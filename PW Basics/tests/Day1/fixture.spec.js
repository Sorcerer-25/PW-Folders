import {test,chromium} from "@playwright/test"

test("test 1" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 2" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 3" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 4" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 5" , async({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 6" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 7" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 8" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 9" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
})

test("test 10" , async ({page})=>{

    await page.goto("https://www.youtube.com/")
    await page.goto("https://www.flipkart.com/")
    
})

test("test 11" , async ({context})=>{

    let c1 = await context.newPage()
    await c1.goto("https://www.youtube.com/")
    let c2 = await context.newPage()
    await c2.goto("https://www.flipkart.com/")
    
})

test("test 12" , async ({browser})=>{

    let c1 = await browser.newContext()
    let page1 = await c1.newPage()
    await page1.goto("https://gemini.google.com/app?hl=en-IN")

    let c2 = await browser.newContext()
    let page2 = await c2.newPage()
    let page3 = await c2.newPage()
    await page2.goto("https://www.flipkart.com/")
    await page3.goto("https://www.youtube.com/")
   
})

test("BrowserName fixture" , async ({browserName}) => {
    console.log("Current Browser is : ", browserName);
})