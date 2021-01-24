let header = document.querySelector('.header');


if(header.clientWidth < 768){

  let btnMenu = 
  `
    <div class="header__btn-menu">
      <i class="header__icon"></i>
    </div>
  `;
  header.insertAdjacentHTML("beforeend", btnMenu);
  let headerBtnMenu = document.querySelector('.header__btn-menu');
  headerBtnMenu.addEventListener('click', toggleMenu);
 
}
function toggleMenu(ev){
  this.parentNode.children[0].classList.toggle('header__items--active');
  this.parentNode.classList.toggle('header--active');
}