// const puppeteer = require("puppeteer");

// (
//     async () => {
//         const browser = await puppeteer.launch({headless: false })
//         const page = await browser.newPage()
//         await page.goto("https://web.whatsapp.com/" )
    
//     try {
        
//        const raja = await page.waitForSelector('span [title="RAJA"]' )

//         await console.log("success")
//     } catch (error) {
//         console.log(error)
//     }

        
//         const target = await page.$('span [title="RAJA"]')

//         //   await target.click('span [title="RAJA"]')
//             console.log(target)

//         const iptBox = await page.$("p.selectable-text")

//         //   await iptBox.click()

//         for (let i = 0; i < 2; i++) {
//             await iptBox.type('hi')
            
//             await page.keyboard.press("Enter")
//         }
//         // await browser.close()

//     }
// )()



const puppeteer = require("puppeteer");

(async ()=>{
  const browser = await puppeteer.launch({
    product : "chrome" ,
    headless: false})
  const page = await browser.newPage()
  await page.goto("https://web.whatsapp.com/" )

  // await page.waitForSelector('[title="RAJA"]' )

  // const raja = await page.$('[title="Vishal"]' )

  // await raja.click()

  // console.log(await raja)



})()





// chat-list-search

// const puppeteer = require("puppeteer");



// (async () =>{

//   try{
//     const browser = await puppeteer.launch({ headless: false });
//     const page = await browser.newPage();
 
//      await page.goto("https://web.whatsapp.com/");
//          await page.setDefaultTimeout(0);
//          await page.waitForSelector('div._13NKt.copyable-text.selectable-text')
//          .then(()=>  page.click('div._13NKt.copyable-text.selectable-text', {
//            delay: 3000
//          }))
 
//   }  catch (error) {
//     console.log(error)
//   }
// }


// )()