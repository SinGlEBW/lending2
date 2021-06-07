import { popup } from '../popup';
import { state } from './check-in';
let { protocol, hostname } = location;

let popupMail = document.querySelector('#js-popup-mail');
let popupOpen = document.querySelector('#js-popup-mail-open');
let mailForm = document.querySelector('#js-m-form')

popup(popupMail, popupOpen, {scrollOff: true, closing: resetForm});

mailForm.addEventListener('submit', sendMail);

function sendMail(ev){
  ev.preventDefault();
  
  if(!Object.values(state).every((item) => item.status)){ return; }

  fetch(`${protocol}//${hostname}/mail`, {
    method: 'POST',
    body: new FormData(this)
  })
  .then((data) => data.json())
  .then((data) => {
    success(JSON.stringify(data))
  })
  .catch((err) => {
    console.dir(err);
  })

}

let msg = `<div class="mail-popup__form-success-msg">Письмо доставлено</div>`;

function success(data){
  console.info(data);
  mailForm.classList.add('mail-popup__form--success');
  let timing = parseFloat(getComputedStyle(mailForm).transitionDuration);

  setTimeout(()=>{
    mailForm.insertAdjacentHTML('afterend', msg)//JSON.stringify(data)
  }, timing * 1000);
}

function resetForm(){
  let elSuccessMsg = mailForm.nextElementSibling;
  if(elSuccessMsg && elSuccessMsg.matches('.mail-popup__form-success-msg')){
    mailForm.parentElement.removeChild(elSuccessMsg);
    mailForm.classList.remove('mail-popup__form--success');
    for(let i = 0; i < mailForm.length - 1; i++){
      mailForm[i].value = '';
      if(mailForm[i].updateCount){
        console.info('Счётчик Сброшен');
        mailForm[i].updateCount();
      }
     
    }
  }
}





