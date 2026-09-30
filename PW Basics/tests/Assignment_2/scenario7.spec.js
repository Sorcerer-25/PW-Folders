import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/tables")
    let rows = await page.locator('//tbody/descendant::tr').all();
    await page.waitForTimeout(2000)
    let due = 0.0
    for(let i=1 ; i<=rows.length; i++)
    {
        let lname = await page.locator(`(//tbody/descendant::tr)[${i}]/child::td[1]`).textContent()
        let fname = await page.locator(`(//tbody/descendant::tr)[${i}]/child::td[2]`).textContent()
        let name = fname + " " + lname
        
        if(name === "Jason Doe")
        {
            let amt = await page.locator(`(//tbody/descendant::tr)[${i}]/child::td[4]`).textContent()
            due += (Number(amt.replace('$','')))
        }
    }
    if (due > 50)
        console.log("Amount > 50");
    else
        console.log("Amount < 50");
}) 
