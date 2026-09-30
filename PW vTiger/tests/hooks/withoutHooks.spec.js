import {test,chromium} from "@playwright/test"
let page;
test.beforeAll("Test 1",async ({browser}) => {

    
    let context = await browser.newContext()
     page = await context.newPage()
    let uname = 'kavinesh@gmail.com'
    let password = 'Kavin@123'

    await page.goto("https://shoppersstack.com/")

    await page.click('[id="loginBtn"]')
    
    await page.fill('[name="Email"]',`${uname}`)
    await page.fill('[name="Password"]',`${password}`)
    await page.click('//span[text()="Login"]')
    
})

test.afterAll("Test 2",async () => {

    await page.locator('[aria-label="Account settings"]').click()
    await page.locator('//li[@role="menuitem"][.="Logout"]').click()
})

test("add product" , async () => {

    await page.locator('[id="electronics"]').last().hover()
    await page.waitForTimeout(5000)
    await page.locator('//a[text()="Cameras "]').click()
    await page.mouse.move(100,100)
    await page.locator('//button[contains(text(),"cart")]').first().click()
    // await page.waitForTimeout(2000)

})

test("cart value",async () => {

    await page.keyboard.press("Control+R")
    await page.click('[id="cartIcon"]')
    await page.waitForTimeout(5000)
    console.log(await page.locator('[class="cart_totalAmount__7EyDU"]').textContent());
})