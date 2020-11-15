const express = require('express')
const app = express()
const cheerio = require('cheerio')
const superagent = require('superagent')

let commodityData = []

let getCommodityData = (res) => {
  let commodityData = []
  let $ = cheerio.load(res.text)
  commodityData = $('div.hd a img')
  // console.log($('div.hd a img'));
  // $('div.hd a img').each((idx, ele) => {
  //   commodityData.push($(ele))
  // })
  return commodityData
}

superagent.get('http://you.163.com/item/list?categoryId=1005000&subCategoryId=109274000').end((err, res) => {
  if(err) {
    console.log('抓取信息失败!');
  } else {
    commodityData = getCommodityData(res)
    
  }
})

app.get('/', async (req, res) => {
  res.send(commodityData)
})

let server = app.listen(3000, () => {
  let host = server.address().address
  let port = server.address().port
  console.log('Your serve is running at http://%s:%s', host, port);
})