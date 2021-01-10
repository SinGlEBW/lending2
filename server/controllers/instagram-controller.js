const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { token } = require('../configOld/config1');

/*----------------------------------------------------------------------------*/
let access_token = 'IGQVJWWWlLQ0p2TjVDeEQxdXFQSUVkMmpNZAHVuajRyZAm94ckZAPY1FHQVRycHI0N3BQZAEJGZAHpwUWVsXzAzbXlzelQ3YXN4a3JtTHJYbDEwSzR0UnpILVdFVDBtWC1DOVRtLUZAJNXNRcWdGQ2o0MjAyaAZDZD';
let url = 'https://graph.instagram.com/me/media'
let urlRefresh = 'https://graph.instagram.com/refresh_access_token'


/*----------------------------------------------------------------------------*/
function showImagesInstagram (req, res, next) {
  
  axios.get(url, { params: {
                      fields: 'id, media_type, media_url, timestamp, children',
                      access_token,
                   }})
  .then(( data ) => {
    console.dir(data);
    res.status(200).json(data.data)
  })
  .catch(next)

}
/*----------------------------------------------------------------------------*/
function refreshInstagram (req, res, next) {

  axios.get(url, { params: {
                    grant_type: 'ig_refresh_token',
                    access_token,
                   }})
  .then(( data ) => {
    console.dir(data);
    res.status(200).json(data.data)
  })
  .catch(next)

}


function testRefresh(req, res) { 

  let pa = path.join(__dirname, '../config/config1.js');

  fs.createReadStream(pa, "utf8").once('data', (chunk)=>{
    let modifiedObject = chunk.replace(/(?<=token:\s*['"])(.*\b)/g, 'ddd');
  
    if(chunk.includes('token') || modifiedObject.includes('token')){
      fs.createWriteStream(pa).write(modifiedObject);
      res.status(200).json(token)
    }
    
  })
  
  
}



// let accto = fs.readFileSync(pa)
// fs.writeFile(pa, '222',{}, (err)=>{
//   console.dir(err);
// })

// let t = accto.toString().replace(/(?<=token:\s*['"])(.*\b)/g, '');
// console.dir(t);
/*----------------------------------------------------------------------------*/
module.exports = {
  showImagesInstagram,
  testRefresh
}


/*
  Если на клиенте переходить по get запросам мы видим что на некоторых путях мы имеем лишь данные, но не страницу.
  В интернет магазине например мы же не данные видим изменяя 
  ajax запрос от обычного get запроса отличается тем что запросы 
  - в ajax улетают запросы без обновления страницы, поэтому мы не видим обновления в строке для ввода пути.
    Можно перейти по пути запроса и получим например только данные. Обычный пользователь об этом может и не знать.
    Это решение хорошо если нам и не нужно чтоб он об этом парился.

  - Чем же хорош обычный запрос через форму? При запросе страница перезагружается, в строке запроса видны изменения, и нас
    перекидывает на этот путь. Что должны мы там увидеть? А что с сервера пришлём, то и увидим. Обычно эта страница с новыми данными.
    Допустим фотографиями.
    Пользователь может руками например изменять путь что бы получить изображение определённого размера
    .../picture/300*300/
    а мы на сервере обработаем например это так .get('../picture/:size', ()=>{}), и нам надо вернуть изменённую страницу.
    Можно кучу страниц с картинками на все случаи жизни(ни кто так не делает), а можно на сервере через шаблонизатор перестроить страницу
    встроить картинки и вернуть и всё это для того что бы пользователь мог поделиться ссылкой с новыми картинками.


  Ajax же может получить картинки не меняя строку запроса и встроить их посредством событий js. Без перезагрузки страницы
  я пробовал воспроизвести обычный запрос, пытался менять URL через window.location, но что-то особо не выходило, изменения
  вступали только после ручной перезагрузки страницы. На React это действительно работает без перезагрузки 
 

   
*/