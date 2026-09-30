import {test} from "@playwright/test"

test("test 1",async ({page}) => {
    await page.goto("https://demoqa.com/webtables")
    let details = await page.locator('//tbody/tr').all()
    for(let i=1;i<=details.length;i++)
    {
        let fname = await page.locator(`(//tbody/tr)[${i}]/td[1]`).textContent()
        let lname = await page.locator(`(//tbody/tr)[${i}]/td[2]`).textContent()
        let name = fname+" "+lname

        if(name === "Kierra Gentry")
        {
            let salary = await page.locator(`((//tbody/tr)[${i}]/td/following-sibling::td)[4]`).textContent()
            if(salary > 10000)
                console.log(true);
            else
                console.log(false);
            break
        }
        
        
    }
})