const{test,expect}=require('@playwright/test')

test ('Screenshot' , async({page})=>{
    
    await page.goto ('https://www.cricbuzz.com/')   
    await page.waitForTimeout (3000);
    await page.screenshot ({path:'screenshots/'+ Date.now() +'cricbuzz 1.jpg' , fullPage:true });
    await page.waitForTimeout(3000);

    
    await page.goto ('https://rog.asus.com/in/')
    await page.waitForTimeout (10000);
    await page.locator ("(//img[@role='presentation'])[1]")
    await page.screenshot ({path:'screenshots/' + Date.now()+ 'asus logo.jpg'})
    await page.waitForTimeout (3000);


})