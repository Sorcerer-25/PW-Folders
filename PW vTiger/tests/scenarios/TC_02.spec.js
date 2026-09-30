import { expect, test } from "@playwright/test"
import data from "../../test-data/data.json"
import { Login } from "../../pages/login.js"
import { Home } from "../../pages/home.js"
import { Contacts } from "../../pages/contacts.js"
import { Logout } from "../../pages/logout.js"
import { Excel } from "../../utilities/excel.js";
import path from "node:path"

test("Contact Creation", async ({ page }) => {
    let login = new Login(page)
    let home = new Home(page)
    let contacts = new Contacts(page)
    let logout = new Logout(page)
    let excel = new Excel();

    let org = await excel.data("contactData", 2, 4);
    let lname = await excel.data("contactData", 2, 3);
    let fname = await excel.data("contactData", 2, 2);

    // let book = new Workbook()
    // await book.xlsx.readFile(path.join(__dirname, "../../test-data/test_data.xlsx"))
    // let sheet = book.getWorksheet("contactData")
    
    // let org = sheet.getRow(2).getCell(4).toString() 
    // let lname = sheet.getRow(2).getCell(3).toString()
    // let fname = sheet.getRow(2).getCell(2).toString()

    await login.navigate(data.url)
    await login.login(data.uname, data.password)

    await home.click('contacts')

    await contacts.createContact()
    await contacts.fillDetails(fname, lname)
    await contacts.selectOrganization(org)
    await contacts.saveContact()

    let { actualFirstName, actualLastName } = await contacts.verifyDetails()
    expect(actualFirstName).toBe(fname)
    expect(actualLastName).toBe(lname)

    await logout.logout()
})


//* Works in headless mode, headed mode and debug mode

/* 
athar_nk0za4o@Atharv MINGW64 /y/vTiger
$ npx playwright test tests/scenarios/TC_02.spec.js

Running 1 test using 1 worker
  1 passed (11.3s)

To open last HTML report run:

  npx playwright show-report
*/