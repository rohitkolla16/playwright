const {test , expect} = require('@playwright/test')

test ('Alret',async ({page}) =>{
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout (2000);

    // Enable
    page.on ('dialog' , async popup =>{
        let type = await popup.type();
        
        expect (type).toContain ('alert');
        await page.waitForTimeout (2000);
        await popup.accept();

    })
    //trigger

    await page.click ("//button[text()='Simple Alert']")
    await page.pause ();
})


test ('Conformation Alert',async ({page}) =>{
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout (2000);

    // Enable
    page.on ('dialog', async box=>{
        let type = await box.type ();
        expect (type).toContain ('confirm');

        let m  = await box. message ();
        expect (m).toContain ('Press a button!')
        await page.waitForTimeout (2000);
        await box.dismiss();
        
    })

    // Trigger

    await page.click("//button[text()='Confirmation Alert']")

})


test.only ('Prompt Alert',async ({page}) =>{
    await page.goto ('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout (2000);


    // Enable

    page.on ('dialog' , async alert =>{
        let type = await alert.type ();
        let mesg = await alert.message ();
        let value= await alert.defaultValue();

        expect (type).toContain ('prompt');
        expect (mesg).toContain ('Please enter your name:')
        expect (value).toContain ('Harry Potter');
        await alert.accept ('King Of Kolla')
    })

    // Trigger 

    await page.click ("//button[text()='Prompt Alert']")
    await page.waitForTimeout (2000);
    let message = await page.locator ("//p[@id='demo']")
    expect (message).toHaveText('Hello King Of Kolla! How are you today?')
    await page.pause();
})

console.log("success");
