const {test , expect} = require ('@playwright/test')
const { log } = require('console')

test ('Single Dropdown', async({page})=>{
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.locator("//select[@id='country']").selectOption ('France')  //  text
    await page.waitForTimeout (3000)
    await page.locator("//select[@id='country']").selectOption ({index:3})   // index
    await page.waitForTimeout (3000)
    await page.locator("//select[@id='country']").selectOption ('india')   // value
    await page.waitForTimeout (3000)
    await page.selectOption ("//select[@id='country']", 'Australia')  // alternate method
    await page.waitForTimeout (3000)
})

test.only ('multipledropdown' , async ({page})=>{
    await page.goto ('https://testautomationpractice.blogspot.com/')
    let countries =await page.$$("//select[@id='country']//child::option")

    await page.waitForTimeout (3000)
   for (let country of countries){
    let data= await country.textContent();
    console.log(data);
    
   }
})