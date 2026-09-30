import {test} from "@playwright/test"
import data from "../../test-data/data.json"

test("Login",async ({page}) => {

    await page.goto(data.url)
    await page.fill('[name="user_name"]',data.uname)
    await page.fill('[name="user_password"]',data.password)

    // let uname = 'admin'
    // let password = 'admin'
    // await page.goto("http://49.249.29.4:8888/")
    // await page.fill('[name="user_name"]',`${uname}`)
    // await page.fill('[name="user_password"]',`${password}`)
    await page.click('[id="submitButton"]')
    // await page.waitForTimeout(10000)
})