let cards = document.querySelector('#js-adv-cards');
let visibilityIndent = 100;
let difference = parseFloat(getComputedStyle(cards.children[0]).transform.split(',')[5]);

console.dir(difference);
console.dir(cards.children[0].style);
document.addEventListener('scroll', checkedCard);


function checkedCard(ev){
 
  [...cards.children].forEach((card, inx) =>{
    // console.dir((card.getBoundingClientRect().top + visibilityIndent + difference) - window.innerHeight);
    if(!card.classList.contains('card--active')){
      
      if((card.getBoundingClientRect().top + visibilityIndent - difference) - window.innerHeight <= 0){
        card.classList.add('card--active')
        let delay = parseFloat(getComputedStyle(card).transitionDuration);
        card.style.transitionDuration = (2 * inx) + 's';
        console.dir(1);
        console.dir((delay * inx) + 's');
      }  
    }
  
  })
}