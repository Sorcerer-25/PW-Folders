//! Test Annotaions :

//? Predefined Methods, it decides
//? Which test to skip and how long it should run

//* test.only()
//* test.skip()
//* test.fixme()
//* test.fail()
//* test.slow()
//* test.setTimeOut()
//* test.decribe()

import {test} from "@playwright/test"

// test.only("Only Annotaion",async ({page})=>{
//     console.log("Running Only....");
//     await page.waitForTimeout(2000)
    
// })

test("test 1",async () => {
    console.log("Running 1");
})

test("test 2",async () => {
    console.log("Running 2");
})

test("test 3",async () => {
    console.log("Running 3");
})

test.skip("skipped test", async ()=>{
    console.log("Skipped Test");
})

test.fixme("fix test",async () => {
    console.log("Bugssss......");
})

test.fail("Failed test",async ({page}) => {

    test.slow()
    
    await page.goto("https://youtubeee.com")
})

test("slow test",async ({page}) => {
    test.setTimeout(4000)
    await page.waitForTimeout(2000)

})

// test.describe.only("Describe",()=>{
//     test("sub1",()=>{
//         console.log("Scenario 1");
//     })
//     test("sub2",()=>{
//         console.log("Scenario 2");
//     })
//     test("sub3",()=>{
//         console.log("Scenario 3");

//     })
// })