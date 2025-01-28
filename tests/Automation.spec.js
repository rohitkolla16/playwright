const {test, expect} = require ('@playwright/test');
test ('Alertwithok' , async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.click("//a[text()='Alert with OK ']");
    await page.waitForTimeout(2000);
   

    //#Alert With Ok #//
    page.on('dialog' , async Alertwithok => {
        let book = await Alertwithok.type();
        expect(book).toContain('alert')
        let msg = await Alertwithok.message();
        expect(msg).toContain('I am an alert box!')
        await Alertwithok.accept();
        })

    //Enabled
    await page.click("//button[@onclick='alertbox()']")
    await page.waitForTimeout(5000);
    await page.screenshot({path:"demoalert.png"});
    
})

test('Alertwithokcancel', async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.click("//a[text()='Alert with OK & Cancel ']")
    await page.waitForTimeout(3000);

    page.on('dialog', async Alertwithcancel =>{
        let note = await Alertwithcancel.type();
        expect(note).toContain('confirm');
        let msgs = await Alertwithcancel.message();
        expect(msgs).toContain('Press a Button !');
        await Alertwithcancel.dismiss();

    })
    await page.click("//button[text()='click the button to display a confirm box ']")
    await page.waitForTimeout(3000);

    let showmsg = await page.locator("//p[@id='demo']")
    expect(showmsg).toHaveText('You Pressed Cancel')
})

test.only ('Alertwithtextbox', async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");
    await page.waitForTimeout(3000);
    await page.click("//a[text()='Alert with Textbox ']")
    await page.waitForTimeout(3000);

    page.on('dialog', async Alertwithtext =>{
        let pen = await Alertwithtext.type();
        expect(pen).toContain('prompt');
        let mesg = await Alertwithtext.message();
        expect(mesg).toContain('Please enter your name');
        let box = await Alertwithtext.defaultValue();
        expect(box).toContain('Automation Testing user');
        console.log("Default Message: " + box);
        await Alertwithtext.accept("Karthi");
    })
   await page.click("//button[text()='click the button to demonstrate the prompt box ']"); 
   await page.waitForTimeout(3000);
   
})