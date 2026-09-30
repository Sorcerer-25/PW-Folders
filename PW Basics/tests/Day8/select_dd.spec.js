import {test} from "@playwright/test"

test("select",async({page}) =>{

    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
    await page.locator('[id="select3"]').selectOption("India")
    await page.waitForTimeout(3000)
    await page.locator('[id="select5"]').selectOption({value:"Goa"})
    await page.waitForTimeout(3000)
    await page.locator('[id="select5"]').selectOption({index:3})
    await page.waitForTimeout(3000)
    
})

test.only("multi select",async({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1")
    await page.locator('[id="select-multiple-native"]').selectOption(["Fjallraven - Foldsac...","Mens Casual Premium ..."])
    await page.locator('[class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    await page.waitForTimeout(5000)
    await page.locator('[id="select-multiple-native"]').selectOption([{value:"Mens Casual Slim Fit"},{value:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}])
    await page.locator('[class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click()
    await page.waitForTimeout(5000)
    // let arr = await page.locator()
})