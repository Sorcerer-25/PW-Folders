import {test} from "@playwright/test"

test("context controls",async ({context,page}) => {
    await page.goto("https://youtube.com/")

    let cookie = await context.cookies()
    console.log("Beforeeeeee : ",cookie);

    await context.clearCookies()

    let emptyCookie = await context.cookies()
    console.log("Afterrrrrrrrrrr: ",emptyCookie);
})