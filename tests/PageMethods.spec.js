const {test , expect}= require ('@playwright/test')

test ('Page Intercations ', async ({page}) => {
    await page.goto ('https://practicetestautomation.com/practice-test-login/')

    await page.waitForTimeout (3000);

    await page.locator ('id=username').fill ('rohit')

    await page.fill ('id=password', 'good')

    await page.waitForTimeout (5000);

    await page. locator ( 'id=submit' ).click();


    
    await page.waitForTimeout (5000)

})





































































