import {test} from "@playwright/test"

test("print all",async ({page}) => {
    await page.goto("https://www.amazon.in/")
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("harry potter")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
    let all = await page.locator('//div[@class="puisg-row"]/descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').allInnerTexts()
    let first = await page.locator('//div[@class="puisg-row"]/descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').first().textContent()
    let last = await page.locator('//div[@class="puisg-row"]/descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').last().textContent()
    let nth = await page.locator('//div[@class="puisg-row"]/descendant::h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').nth(5).textContent()

    console.log(first);
    console.log(last);
    console.log(nth);

    console.log(all);
})