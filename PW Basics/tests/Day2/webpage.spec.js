import {test} from "@playwright/test"
import { timeLog } from "node:console"
import { TIMEOUT } from "node:dns"

test("test 1",async ({page}) => {
    test.setTimeout(10000)
    await page.goto("https://youtube.com")
    await page.goto("https://google.com")

    await page.waitForTimeout(7000)
    await page.waitForTimeout(2000)

})