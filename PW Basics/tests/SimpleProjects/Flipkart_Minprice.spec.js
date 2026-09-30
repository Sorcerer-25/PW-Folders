import {test} from "@playwright/test"

test("bb",async ({page}) => {
    await page.goto("https://www.flipkart.com/")
    let searchbox = await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill("kavi")
    await page.keyboard.press('Enter')
    await page.waitForLoadState("load")
    let count = await page.locator('//div[@class="jIjQ8S"]/descendant::div[@class="RG5Slk"]').all()
    let minPrice = 0
    let p_name = null
    let p_price = null

    let arr1 = []
    let arr2 = []

    for(let i=1;i<=count.length;i++)
    {
        let priceStr = await page.locator(`(//div[@class="RG5Slk"])[${i}]/ancestor::div[2]/descendant::div[@class="hZ3P6w DeU9vF"]`).textContent()
        let price = ""
        if(priceStr.charAt(i)!== "₹" && priceStr.charAt(i)!==",")
        {
            price += priceStr.charAt(i)
        }
        
        if (minPrice==0)
            minPrice = price
        if (price < minPrice)
        {
            minPrice = price
            p_name = await page.locator(`(//div[@class="jIjQ8S"])[${i}]/descendant::div[@class="RG5Slk"]`).textContent()
            p_price = priceStr
        }
        // console.log(minPrice);
        
    
    }
    for(let i=1;i<=count.length;i++)
    {
        let priceStr = await page.locator(`(//div[@class="RG5Slk"])[${i}]/ancestor::div[2]/descendant::div[@class="hZ3P6w DeU9vF"]`).textContent()

        if(p_price === priceStr)
        {
            arr1.push(await page.locator(`(//div[@class="jIjQ8S"])[${i}]/descendant::div[@class="RG5Slk"]`).textContent())
            arr2.push(p_price)
        }
    }
    for(let i = 0;i<arr1.length;i++)
        console.log(arr1[i]," : ",arr2[i]);

})