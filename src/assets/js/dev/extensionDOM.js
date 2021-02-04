Element.prototype.createCount = function (nameClass = '',  maxCount = 500, option = { tag: '', element: '' }){

  let tag = (option.tag) ? option.tag : 'span';
  this.countClassName = nameClass;
  this.maxCount = maxCount;

  this.constructor.prototype.updateCount = updateCount;

  let el = `<${tag} class=${nameClass} >${this.value.length}/${maxCount}</${tag}>`;
  if(typeof option.element === 'object'){
    option.element.insertAdjacentHTML('afterend', el);
    this.countTarget = option.element
    return;
  }
  this.insertAdjacentHTML('afterend', el);
  
}

function updateCount() {
  let countTarget = (this.countTarget) ? this.countTarget.nextElementSibling 
                                       : this.nextElementSibling;
                                       
  countTarget.textContent = `${this.value.length}/${this.maxCount}`;
  
}
