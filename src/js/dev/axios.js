import axios from 'axios';

let reqPhoto = () => {
  let access_token = 'IGQVJWWWlLQ0p2TjVDeEQxdXFQSUVkMmpNZAHVuajRyZAm94ckZAPY1FHQVRycHI0N3BQZAEJGZAHpwUWVsXzAzbXlzelQ3YXN4a3JtTHJYbDEwSzR0UnpILVdFVDBtWC1DOVRtLUZAJNXNRcWdGQ2o0MjAyaAZDZD';
  let url = 'https://graph.instagram.com/me/media'
  // let d = 'https://singlebw.github.io/lending2/'


  axios.get(url, {
      params: {
        fields: 'id, media_type, media_url, children{fields=id, media_url}',
        limit: 1,
        access_token,
      },
    })
    .then(({ data }) => {
      // axios.get(data.paging.next).then((result) => { console.dir(result);})
      console.dir(data);
    })
    .catch((err) => {
      console.dir(err);
    })

}
// reqPhoto()
/*
*/




function d(){
  axios.get("https://graph.instagram.com/v1.0/17841412706382963/media?access_token=IGQVJWWWlLQ0p2TjVDeEQxdXFQSUVkMmpNZAHVuajRyZAm94ckZAPY1FHQVRycHI0N3BQZAEJGZAHpwUWVsXzAzbXlzelQ3YXN4a3JtTHJYbDEwSzR0UnpILVdFVDBtWC1DOVRtLUZAJNXNRcWdGQ2o0MjAyaAZDZD&pretty=1&fields=id%2C+media_type%2C+media_url%2Cchildren%2C+caption&limit=25&after=QVFIUkJRSkdrMU1yS2JZAdy1QMFpzODg5bmU2YlF4VFd0ZAGtqaXdhcEtRMTJTN0gxcmp1U1FsRjhxNkpvejRUN1lqLXk1dkQzTnRqVG9hbEZACeVN6Q2wtZAmRR")
  .then((data) => {
    console.dir(data);
  })
  .catch((err) => {
    console.dir(err);
  })
}

// d()
/*"17841412706382963" */



// axios.get('https://www.instagram.com/electric_live/').then((data) => {
//   console.dir(data);
// }).catch((err) => {
//   console.dir(err);
// })
