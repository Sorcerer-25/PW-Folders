import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/")
    let btn = await page.getByRole("button",{name:"Add Element"})
    await btn.click()
    await btn.click()
    let delBtn = await page.locator('//button[text()="Delete"]')
    await delBtn.first().click()
    let count = await delBtn.all()
    console.log("Number of delete buttons : ",count.length);
    
})