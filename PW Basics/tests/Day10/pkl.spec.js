import {test} from "@playwright/test"

test("table",async({page}) =>{

    await page.goto("https://www.prokabaddi.com/standings")
    let team = "Puneri Paltan"
    let win = await page.locator(`(//p[text()="${team}"]/ancestor::div[@class="row-head"]//p[@class="count"])[2]`).textContent()
    let loss = await page.locator(`(//p[text()="${team}"]/ancestor::div[@class="row-head"]//p[@class="count"])[3]`).textContent()
    let total = await page.locator(`(//p[text()="${team}"]/ancestor::div[@class="row-head"]//p[@class="count"])[5]`).textContent()

    console.log("Wins : ",win);
    console.log("Losses : ",loss);
    console.log("Total : ",total);
})