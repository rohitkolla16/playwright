const {test,expect}=require ('@playwright/test')

test ('flipcart testing', async ({page})=>{

    await page.goto ('https://www.flipkart.com/')
    await page.waitForTimeout (3000);
    await page.locator ("//input[@type='text']").fill("laptop")
    await page.press ("//input[@type='text']","Enter")
    await page.waitForTimeout (3000);
    await page.screenshot ({path:'screenshots/abc2.png'})
    await page.pause();
})

test.only ('flipcart testing', async ({page})=>{
    


    })
