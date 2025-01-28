const{test,expect}=require ('@playwright/test')

test('youtube testing',async ({page})=>{
await page.goto ('https://www.youtube.com/')
await page.waitForTimeout (3000);
await page.locator ("(//input[@type='text'])[1]").fill('minnale nee')
await page.press ("(//input[@type='text'])[1]","Enter")
await page.waitForTimeout (3000);
await page.screenshot({path:'screenshots/youtube.png'})
await page.pause();
})