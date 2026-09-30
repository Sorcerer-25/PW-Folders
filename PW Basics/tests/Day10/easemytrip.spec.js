import {test} from "@playwright/test"
import path from "node:path"


test("booking",async({page}) => {

    await page.goto("https://www.easemytrip.com/?rdt=true")
    await page.click('[id="FromSector_show"]')
    // await page.fill('[id="a_FromSector_show"]')
    await page.keyboard.type("nagpur")
    await page.click(`(//div[@class="mflexcol"]/div/p/span)[1]`)
    await page.click('[id="a_Editbox13_show"]')
    await page.keyboard.type('pune')
    await page.click('[id="ddate"]')
    let a = '15'
    let found = false
    while(!found)
    {
        let month = await page.locator('//div[@class="box"]//div[@class="month2"]').textContent()
        
        if (month.includes('Nov'))
        {
            for(let i=1;i<=5;i++)
            {
                for(let j=1;j<=7;j++)
                {
                    if((await page.locator(`(((//div[@class="days"])[${i}]//li[@onclick="SelectDate(this.id)"])[${j}])`).innerText()).startsWith(a))
                    {
                        await page.locator(`(((//div[@class="days"])[${i}]//li[@onclick="SelectDate(this.id)"])[${j}])`).click()
                        found = true
                        break
                    }
                }
                if(found)
                    break
            }
            break
        }
        await page.click('[id="img2Nex"]')
    }
    await page.waitForTimeout(4000)
})