let cards = document.querySelector('#js-adv-cards');
(function(){
  let state = {
    threshold: {
      bottom: 50,//на каком расстоянии от нижней кромки хотим увидеть
      top: 50,
      translateY: parseFloat(getComputedStyle(cards.children[0]).transform.split(',')[5]),//вернуть позицию сдвига
    },
    delay: parseFloat(getComputedStyle(cards.children[0]).transitionDuration),
    total: 0,
    visibilityReact: false
  };
  document.addEventListener('scroll', checkedCard);
  
  function checkedCard(ev){
    [...cards.children].forEach((card, inx) =>{
    
      state.visibilityReact = checkVisible(card, state.threshold);
  
      if(!card.classList.contains('card--active') && state.visibilityReact){
        state.total += state.delay / (inx + 1);
        
        card.style.transitionDuration = state.total.toFixed(2) + 's';
        card.style.transitionDelay = (state.total / 3).toFixed(2) + 's';
        card.classList.add('card--active')
      }  
      if(card.classList.contains('card--active') && !state.visibilityReact){
        console.dir(22);
        state.total = 0;
        state.visibilityReact = false;
        card.classList.remove('card--active'); 
      }   
    })
  }

  function checkVisible(el, threshold = {bottom: 0, top: 0, translateY: 0}){
    let top = el.getBoundingClientRect().top;
    let bottom = el.getBoundingClientRect().bottom;
   
    if((top - threshold.translateY + threshold.bottom) - window.innerHeight <= 0 
        || bottom + threshold.bottom < 0 ){
      return true;
    }else return false;
     
  }

})()
