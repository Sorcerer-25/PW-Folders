import {test,expect} from "@playwright/test"
import data from "../../test-data/data.json"


test("Org",async ({page}) => {

    await page.goto(data.url)
    await page.fill('[name="user_name"]',data.uname)
    await page.fill('[name="user_password"]',data.password)

    // let u_name = 'admin'
    // let password = 'admin'
    let org = '8BIT'
    let category = 'Healthcare'
    // await page.goto("http://49.249.29.4:8888/")
    // await page.fill('[name="user_name"]',`${u_name}`)
    // await page.fill('[name="user_password"]',`${password}`)
    await page.click('[id="submitButton"]')
    
    await page.click('//a[text()="Organizations"]')
    await page.click('[title="Create Organization..."]')

    await page.fill('[name="accountname"]',`${org}`)
    await page.locator('[name="industry"]').selectOption({value:`${category}`})
    await page.locator('[title="Save [Alt+S]"]').first().click()
    await expect(await page.locator('[id="dtlview_Organization Name"]').textContent()).toBe(org)


    // await page.waitForTimeout(5000)

})