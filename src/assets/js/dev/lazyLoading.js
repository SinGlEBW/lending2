let imageIst = document.querySelectorAll('.inst__slider-item');
let imgOption = { 
  root: document.querySelector('.inst__sliders'),/* должен быть предком. по умолчанию окно браузера */
  rootMargin: '0px 500px 0px 0px', /*Отступы вокруг root.  */
  threshold: .05/* число от 0-1. это насколько процентов должен быть видео объект при котором
  //                  должна отработать callback функция. Можно даж массив передать. [0, 0.25, 0.5, 0.75, 1] */
                    
};


const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(({ target, isIntersecting }) => {
    if(!isIntersecting){/*элементы не пересекают границу. false */
      return;
    }
    target.src = target.getAttribute("data-src");
    imgObserver.unobserve(target)
  })
}, imgOption);


imageIst.forEach(item => {
  imgObserver.observe(item);
});