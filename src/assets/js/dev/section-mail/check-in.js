let inputName = document.querySelector('#js-m-name');
let inputPhone = document.querySelector('#js-m-phone');
let textArea = document.querySelector('#js-m-textarea');

let state = {
  [inputName.name]: { min: 2, max: 15, status: false, length: 0, value: '' },
  [inputPhone.name]: { min: 18, max: 18, status: false, length: 0, value: '' },
  [textArea.name]: { min: 10, max: 400, status: false, length: 0, value: '' },
};

[inputName, inputPhone, textArea].forEach((item) => { item.addEventListener('input', checkInAll) });

textArea.createCount('mail-popup__form-count', state[textArea.name].max, { element: textArea.parentElement })

function checkInAll(ev){
  ev.preventDefault();
 
  if(this === inputName || this === textArea){
    this.value = this.value.replace(/[%<>&]|(script)/g, '');

    if(this === textArea) this.updateCount();
  }

  if(this == inputPhone) maskInput(this, ev);
  maxMin(this);
  
}

function maxMin(el){

  let stateItem = state[el.name];

  if(el.value.length >= stateItem.min && stateItem.length <= stateItem.max){
    stateItem.status = true;
    el.style.animationName = 'glowInputSuccess';
    
  }else{
    stateItem.status = false;
    el.style.animationName = 'glowInputError';
  }
  if(el.value.length > stateItem.max){
    el.value = el.value.slice(0, stateItem.max);
  }else{
    stateItem.length = el.value.length;
    stateItem.value = el.value;
  }
}

function maskInput(el, ev) {
  let input = el;
  let mask = input.dataset.mask;
  let value = input.value;
  let literalPattern = /[0\*]/;
  let numberPattern = /[0-9]/gi;//+7 (000) 000-00-00//\+7\s\(9\d{2}\)\s\d{3}-\d{2}-\d{2}
  let newValue = "";
  if(/\D/.test(ev.data)){
    el.value = el.value.replace(ev.data, ''); 
    return;
  }
  
  try {
    let maskLength = mask.length;
    let valueIndex = 0;
    let maskIndex = 0;
 
    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) break;
      
      if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break;

      // Found a literal
      while (mask[maskIndex].match(literalPattern) === null) {
        if (value[valueIndex] === mask[maskIndex]) break;
        newValue += mask[maskIndex++];
      }
      newValue += value[valueIndex++];
      maskIndex++;
    }

    input.value = newValue;
  } catch (e) {
    console.log(e);
  }
}


export { state };

//^[+\d]*[(]\d{3}[)]\d{3}-\d{2}-\d{2}/g