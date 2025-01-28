const{test,expect}=require ('@playwright/test')

test ('DragDrop', async({page})=>{

    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout (2000);
    await page.dragAndDrop ("//div[@id='draggable']" , "//div[@id='droppable']")
    await page.waitForTimeout (2000);

    await page.goto ('https://www.amazon.in/') 
    await page.locator ()
    

})