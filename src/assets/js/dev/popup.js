
export function popup(popupEl, btnOpen, option = {noBlockEl: '', scrollOff: false, opened: '', closing: ''}){

  let close = popupEl.querySelector(`#${popupEl.id}-close`);
  let saveScrollToTheOpen;
  
  btnOpen.addEventListener('click', openPrice);
  popupEl.addEventListener('click', closePrice);

  function openPrice(ev) {
    popupEl.style.display = "flex"; 
  
    saveScrollToTheOpen = window.scrollY;
    lockScroll();
    if(typeof option.opened == 'function'){
      option.opened()
    }
  }

  function closePrice(ev) {

    if(ev.target == popupEl || ev.target == close){
   
      popupEl.style.display = "none"; 
      unlockScroll()
      if(typeof option.closing == 'function'){
        option.closing()
      }
    }
  }

/*#######---------<{ Control Scroll}>---------##########*/
  function lockScroll() {
    window.addEventListener('wheel', evWheel, { passive: false })
    window.addEventListener('scroll', evScroll) 
  }

  function unlockScroll() {
    window.removeEventListener('wheel', evWheel, { passive: false })
    window.removeEventListener('scroll', evScroll)
  }

  function evWheel(ev) {
    if(typeof option.noBlockEl == 'object'){
      if(!option.noBlockEl.contains(ev.target)){
        ev.preventDefault(); return; 
      }
    }else if(option.scrollOff){
      ev.preventDefault(); return; 
    }
    console.dir("evWheel");
    this.scrollTo(0, saveScrollToTheOpen);
  } 

  function evScroll(ev) {
    console.dir("evScroll");
    this.scrollTo(0, saveScrollToTheOpen)
  } 
}



