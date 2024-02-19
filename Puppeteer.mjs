import puppeteer from 'puppeteer'
// const main = async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: {
//       height: 800,
//       width: 1000
//     }
//   })

const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      height: 1000,
      width: 1000
    }
  })
}

const page = await browser.newPage()
await page.goto(
  'https://www.deviantart.com/steamprofiledesigns/gallery/68841450/workshop-showcases-avatars?set=68841450&offset=168'
)
await page.type('#VisualSearchInput', 'men')
await page.keyboard.press('Enter')
await page.waitForNavigation()
await page.screenshot({ path: 'testresult.png', fullPage: true })
