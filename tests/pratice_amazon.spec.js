const{test,expect}=require ('@playwright/test')

test ('amazon search', async ({page})=>{
await page.goto ('https://www.amazon.in/')
await page.waitForTimeout (5000);
await page.locator ("// input[@type='text']").fill("laptop cleaning solution")
await page.press ("// input[@type='text']","Enter")
await page.waitForTimeout  (3000);
await page. screenshot ({path:'screenshots/abc.png'}) 
await page.pause ();

})