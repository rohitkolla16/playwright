const{test , expect, chromium}=require('@playwright/test')

test ('MultipleWindos' , async ()=>{

    let broweser = await chromium.launch ();
    let contexA =await broweser.newContext();

    
})