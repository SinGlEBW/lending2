let header = document.querySelector('.header');


if(header.clientWidth < 768){

  let btnMenu = 
  `
    <div class="btn-burger">
      <i class="btn-burger__item"></i>
      <i class="btn-burger__item"></i>
      <i class="btn-burger__item"></i>
    </div>
  `;
  header.insertAdjacentHTML("beforeend", btnMenu);
  let headerBtnMenu = document.querySelector('.btn-burger');
  headerBtnMenu.addEventListener('click', toggleMenu);
 
}
function toggleMenu(ev){
  this.parentNode.children[0].classList.toggle('header__items--active');
  this.parentNode.classList.toggle('header--active');
  [...this.children].forEach(burgerItem => {
    burgerItem.classList.toggle('btn-burger__item--active')
  });
  
}