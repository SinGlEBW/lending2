document.onreadystatechange = function(ev){
  
  if(document.readyState === "interactive"){
    let sectionMail = document.querySelector('#js-check-device');
    let img = `<picture class="section-mail__picture">
                  <source class="section-mail__bg-img" src="../../assets/img/section-mail/bg.webp" type="image/webp">
                  <img class="section-mail__bg-img" src="../../assets/img/section-mail/bg.jpg" >
                </picture>`;
    let video = `<video class="section-mail__bg-video" id="js-video" src="../../assets/img/section-mail/bg.mp4" type="video/mp4" autoplay loop muted></video>`;          
    if(document.body.offsetWidth < 992){
      sectionMail.insertAdjacentHTML('afterbegin', img);
    }else{
      sectionMail.insertAdjacentHTML('afterbegin', video);
    }
  }
 
  /*document.readyState состояние загрузки документа: "loading"-ещё грузит, "interactive" - DOM построен ресурсы грузит, "complete" - всё загружено*/

}