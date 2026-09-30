import { test,firefox,chromium,webkit } from '@playwright/test';
//import browser : chromium
test("launch",async ()=> {
  // create browser, headless to show actual window, slomo to hold screen for some time


  let chrome = await chromium.launch({headless:false,slowMo:3000})
  let wk = await webkit.launch({headless:false,slowMo:3000})
  let ff = await firefox.launch({headless:false,slowMo:3000})
  


  //create context
  let context1 = await chrome.newContext()
  let context2 = await wk.newContext()
  let context3 = await ff.newContext()



  //create tabs
  let tab1 = await context1.newPage()
  let tab4 = await context1.newPage()
  let tab2 = await context2.newPage()
  let tab3 = await context3.newPage()



  //open applications
  await tab1.goto("https://www.youtube.com/")
  await tab4.goto("https://www.amazon.in/")
  await tab2.goto("https://www.youtube.com/")
  await tab3.goto("https://www.youtube.com/")

})