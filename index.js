const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const mul = async () => {
        const page = await browser.newPage();
        await page.goto("https://www.youtube.com/watch?v=1lYB9slJSH0");

        //   const setting = await page.$(".ytp-button.ytp-settings-button")

        //   await setting.click().then(async ()=>{const quality = await page.$(".ytp-menuitem")

        //   quality.click()

        // })
    };
    for (let i = 0; i < 30; i++) {
        await mul();

        //    browser.newPage()
        //   await page.goto("https://www.youtube.com/watch?v=MN0ToFqSp3Q");
    }

    // const puppeteer = require("puppeteer");

    // (async () =>{
    //     const browser = await puppeteer.launch({headless:  false , defaultViewport: false  });
    //     const page = await browser.newPage() ;
    //     await page.goto("https://www.amazon.in/deal/701e6e7a?showVariations=true&ref=dlx_12414_gd_dcl_img_0_701e6e7a_dt_mese20_14")

    //     const parentElement = await page.$$(".a-fixed-left-grid-inner")

    // for(const childElement of parentElement){
    //   const title = await page.evaluate(el => el.querySelector("div.a-section.octopus-dlp-asin-info-section > div.a-section.octopus-dlp-asin-title > a"), childElement)
    //   console.log(childElement)
    //   // div.a-section.octopus-dlp-asin-info-section > div.a-section.octopus-dlp-asin-title > a
    // }

    // console.log(parentElement)

    // await browser.close()

    // })()

    // const puppeteer = require("puppeteer");

    // (async () =>{
    //     const browser = await puppeteer.launch({headless:  false , defaultViewport: false  });
    //     const page = await browser.newPage() ;
    //     await page.goto("https://www.amazon.com/s?rh=n%3A16225007011&fs=true&ref=lp_16225007011_sar")

    //     // const kuch = await page.$(".a-size-base-plus.a-color-base.a-text-normal")

    //     //   await kuch.click()
    //     const parentElement = await page.$$("div.s-main-slot.s-result-list.s-search-results.sg-row")

    //     for(const childElement of parentElement){
    //       const title = await page.evaluate(el => el.querySelector(".a-size-base-plus.a-color-base.a-text-normal").click(), childElement)
    //       console.log(title)
    //       // div.a-section.octopus-dlp-asin-info-section > div.a-section.octopus-dlp-asin-title > a
    //     }
    //     // console.log(parentElement)
    //     // await browser.close()

    // })()

    // const closeFun = async() =>{
    //   await browser.close()
    // }
    // await setTimeout(closeFun, 14000);
})();
