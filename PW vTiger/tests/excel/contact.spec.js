import {test} from "@playwright/test"
import data from "../../test-data/data.json"

test("Org",async ({page}) => {


    await page.goto(data.url)
    await page.fill('[name="user_name"]',data.uname)
    await page.fill('[name="user_password"]',data.password)
    // let u_name = 'admin'
    // let password = 'admin'
    let org = 'S8UL'
    let lname = 'Sharma'
    // await page.goto("http://49.249.29.4:8888/")
    // await page.fill('[name="user_name"]',`${u_name}`)
    // await page.fill('[name="user_password"]',`${password}`)
    await page.click('[id="submitButton"]')
    
    await page.click('//a[text()="Contacts"]')
    await page.click('[title="Create Contact..."]')
    await page.fill('[name="lastname"]',`${lname}`)

    let [page1] = await Promise.all([page.waitForEvent("popup"),page.locator('//img[@title="Select"]').first().click()])

    await page1.fill('[name="search_text"]',`${org}`)
    await page1.click('[name="search"]')
    await page1.click(`//a[text()="${org}"]`)

    await page.locator('[title="Save [Alt+S]"]').first().click()
    await page.locator('//td[@class="small"]/img').first().hover()
    await page.click('//a[text()="Sign Out"]')

    await page.waitForTimeout(10000)
})
