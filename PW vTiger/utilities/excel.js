import { Workbook } from "exceljs";
import path from "node:path";

export class Excel{

    async data(s,row,cell)
    {
        let book = new Workbook()
        await book.xlsx.readFile(path.join(__dirname,"../test-data/test_data.xlsx"))
        let sheet = book.getWorksheet(s)
        let value = sheet.getRow(row).getCell(cell).toString()

        return value
    }
}