import axios from 'axios';
let url =  'https://graph.instagram.com/me?access_token=IGQVJWWWlLQ0p2TjVDeEQxdXFQSUVkMmpNZAHVuajRyZAm94ckZAPY1FHQVRycHI0N3BQZAEJGZAHpwUWVsXzAzbXlzelQ3YXN4a3JtTHJYbDEwSzR0UnpILVdFVDBtWC1DOVRtLUZAJNXNRcWdGQ2o0MjAyaAZDZD'
let d = 'https://singlebw.github.io/lending2/'
let dd = 'https://scontent-arn2-2.cdninstagram.com/v/t51.2885-15/'
axios.get(url)
.then((data)=>{
  console.dir(data);
})
.catch((err)=>{
  console.dir(err);
})