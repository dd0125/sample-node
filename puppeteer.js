const puppeteer = require('puppeteer');
const url = 'https://www.google.com/?hl=ja';
const path = 'temp/google_screenshot.png'

async function screenShot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto(url);

    // ページのボタンをクリックしてみる
    // await page.click('#hptl > a');
    // await page.waitForNavigation({waitUntil: 'domcontentloaded'});


    await page.screenshot({ path: path});

    await browser.close();
}

screenShot();


// その他、DOMの取得も使えるので、スクレイピングも可能