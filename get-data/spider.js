const https = require('http')
const hostname = 'you.163.com';
const getJsonData = /json_Data=(.+);?/
const getData = () => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname,
      path:'/item/list?categoryId=1005000&subCategoryId=109274000',
      headers:{
        "Connection": "keep-alive",
        "Cache-Control": "max-age=0",
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      }
    }

    https.get(options,(res) => {
      let html = '';
      res.on("data",d=> {
        html += d;
      })

      res.on('end', () => {
        // console.log(html);
        data = getJsonData.exec(html);
        console.log(data[1]);
        resolve()
      })
    }).on("error", (e) => {
      console.error(e);
      reject(e);
    });
  })
}

getData();