const express = require('express')
const router = express.Router()
const puppeteer = require('puppeteer')

router.get('/9A-challenge1', async (req, res) => {
    let browser = await puppeteer.launch({headless: "new"});
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/contests/tcet-shastra-coding-challenge-9-a/challenges/final-challenge-2/leaderboard/1');
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    for (let i = 1; i <= 10; i++)
    {
        let [i1] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[2]/p/a`);
        let [i2] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[4]/p`);
        let [i3] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[5]/p`);
        let [i4] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[6]/img`);
        let txt = await i1.getProperty('textContent');
        let score = await i2.getProperty('textContent');
        let time = await i3.getProperty('textContent');
        let country = await i4.getProperty('src');
        let rawText = (await txt).toString();
        let rawScore = (await score).toString();
        let rawTime = (await time).toString();
        let imgURL = (await country).toString();
        let arrText = rawText.split(' ');
        let arrScore = rawScore.split(' ');
        let arrTime = rawTime.split(' ');
        let arrCountry = imgURL.split('JSHandle:');
        arr1.push(arrText[20]);
        arr2.push(arrScore[16]);
        arr3.push(arrTime[20]);
        arr4.push(arrCountry[1]);
    }
    browser.close();
    res.render('challenge-9A/9A_final_challenge', {arr1: arr1, arr2: arr2, arr3: arr3, arr4: arr4})
})

router.get('/9A-challenge2', async (req, res) => {
    let browser = await puppeteer.launch({headless: "new"});
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/contests/tcet-shastra-coding-challenge-9-a/challenges/games-of-arrays/leaderboard/1');
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    for (let i = 1; i <= 10; i++)
    {
        let [i1] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[2]/p/a`);
        let [i2] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[4]/p`);
        let [i3] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[5]/p`);
        let [i4] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[6]/img`);
        let txt = await i1.getProperty('textContent');
        let score = await i2.getProperty('textContent');
        let time = await i3.getProperty('textContent');
        let country = await i4.getProperty('src');
        let rawText = (await txt).toString();
        let rawScore = (await score).toString();
        let rawTime = (await time).toString();
        let imgURL = (await country).toString();
        let arrText = rawText.split(' ');
        let arrScore = rawScore.split(' ');
        let arrTime = rawTime.split(' ');
        let arrCountry = imgURL.split('JSHandle:');
        arr1.push(arrText[20]);
        arr2.push(arrScore[16]);
        arr3.push(arrTime[20]);
        arr4.push(arrCountry[1]);
    }
    browser.close();
    res.render('challenge-9A/9A_games_of_arrays', {arr1: arr1, arr2: arr2, arr3: arr3, arr4: arr4})
})

router.get('/9A-challenge3', async (req, res) => {
    let browser = await puppeteer.launch({headless: "new"});
    let page = await browser.newPage();
    await page.goto('https://www.hackerrank.com/contests/tcet-shastra-coding-challenge-9-a/challenges/dream-string/leaderboard/1');
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    for (let i = 1; i <= 10; i++)
    {
        let [i1] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[2]/p/a`);
        let [i2] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[4]/p`);
        let [i3] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[5]/p`);
        let [i4] = await page.$x(`//*[@id="leaders"]/div[${i}]/div/div[6]/img`);
        let txt = await i1.getProperty('textContent');
        let score = await i2.getProperty('textContent');
        let time = await i3.getProperty('textContent');
        let country = await i4.getProperty('src');
        let rawText = (await txt).toString();
        let rawScore = (await score).toString();
        let rawTime = (await time).toString();
        let imgURL = (await country).toString();
        let arrText = rawText.split(' ');
        let arrScore = rawScore.split(' ');
        let arrTime = rawTime.split(' ');
        let arrCountry = imgURL.split('JSHandle:');
        arr1.push(arrText[20]);
        arr2.push(arrScore[16]);
        arr3.push(arrTime[20]);
        arr4.push(arrCountry[1]);
    }
    browser.close();
    res.render('challenge-9A/9A_dream_string', {arr1: arr1, arr2: arr2, arr3: arr3, arr4: arr4})
})

router.get('/', async (req, res) => {
    res.render('challenge-9A/index')
})

module.exports = router