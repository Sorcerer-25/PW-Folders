import {test} from "@playwright/test"
import path from "node:path"

test("Data Test",async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByTestId("2").screenshot({path:"tests/Day5/product_screenshot/product_1.png"})
    await page.getByTestId("31").screenshot({path:"tests/Day5/product_screenshot/product_2.png"})
    await page.getByTestId("72").screenshot({path:"tests/Day5/product_screenshot/product_3.png"})
    await page.getByTestId("16").screenshot({path:"tests/Day5/product_screenshot/product_4.png"})
    await page.getByTestId("74").screenshot({path:"tests/Day5/product_screenshot/product_5.png"})
    await page.getByTestId("75").screenshot({path:"tests/Day5/product_screenshot/product_6.png"})
})