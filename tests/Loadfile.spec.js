const{test , expect}=require('@playwright/test')

test('Loadfile', async({page})=>{
    await page.goto ('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout (2000);
// single file upload

    await page.locator ("//input[@type='file']").setInputFiles("C:/Users/multi/Downloads/wallpaperflare.com_wallpaper.jpg");   
    await page.waitForTimeout (3000); 
    await page.screenshot ({path:'screenshots/' + Date.now()+ 'loadfile.jpg'})

    // multiple flie upload

    await page.locator ("//input[@type='file']").setInputFiles(["C:/Users/multi/Downloads/axis bank mar 2023-apr 2024 statement.pdf",
"C:/Users/multi/Downloads/wallpaperflare.com_wallpaper.jpg",
"C:/Users/multi/Downloads/P L Ramesh Policy Copy Endosement.pdf",
"C:/Users/multi/Downloads/Union Bank.pdf"])
await page.waitForTimeout (3000);
await page.screenshot ({path:'screenshots/' + Date.now()+ 'loadfile.jpg'})

// remove uploaded files 

  await page.locator ("//input[@type='file']").setInputFiles([]);
  await page.waitForTimeout (5000);
  await page.screenshot ({path:'screenshots/' + Date.now()+ 'loadfile.jpg'})
})


