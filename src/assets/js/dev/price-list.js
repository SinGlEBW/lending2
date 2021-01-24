import axios from 'axios';
import { preloaderTable } from './preloader';

let priceBtn = document.querySelector('#js-btn-ajax');
let priceList = document.querySelector('#js-p-list');
let priceClose = document.querySelector('#js-p-close');
let priceTable = document.querySelector('#js-p-table');
let tableBody = document.querySelector('#js-p-tableBody');
let saveScrollToTheOpen;

priceBtn.addEventListener('click', openPrice);
priceList.addEventListener('click', closePrice);

function openPrice(ev) {
  priceList.style.display = "flex"; 
  saveScrollToTheOpen = window.scrollY;
  lockScroll();
  ajaxRequestTable();
}

function closePrice(ev) {
  if(ev.target == priceList || ev.target == priceClose){
    priceList.style.display = "none"; 
    unlockScroll()
  }
}
/*########---------<{ Main Function }>---------#########*/

function ajaxRequestTable(){
  if(!tableBody.children.length){
    tableBody.innerHTML = preloaderTable();
    axios.get('http://localhost:8080/table')
    .then(({data}) => {
      tableBody.innerHTML = '';
      renderTable(data);
    })
    .then(() =>{
      hangTheFunctionality();
    })
    .catch((err) => {
      tableBody.textContent = err;
    })
  }else console.dir('Данные уже загружены'); 
}

/*#######------<{ renderTable and hangTheFunctionality }>--------#######*/

function renderTable(data){
  for (const arrTables of data) {

    if(arrTables.id === 1) {  
      tableBody.innerHTML +=  
      `<tr class="price-list__row-head-title" >
        <th class="price-list__cell-head-title" colspan="4">${arrTables.services}</th>
      </tr>
        <tr class="price-list__row-info" >
          <td class="price-list__cell-info">Наименование</td>
          <td class="price-list__cell-info">Ед.изм.</td>
          <td class="price-list__cell-info">Цена(руб.)</td>
          <td class="price-list__cell-info">Кол-во</td>
          <td class="price-list__cell-info">Сумма</td>
        </tr>`;
    }else {
      tableBody.innerHTML +=  
    `<tr class="price-list__row">
        <td class="price-list__cell">${arrTables.services}</td>
        <td class="price-list__cell">${arrTables.unit}</td>
        <td class="price-list__cell js-p-rub">${arrTables.price}</td>
        <td class="price-list__cell">
          <input class="price-list__input js-p-input" type="text" name="dataCell">
        </td>
        <td class="price-list__cell js-p-sum">0</td>
      </tr>`;
    }
  }
}

function hangTheFunctionality(){
  let priceRublesCell = document.querySelectorAll('.js-p-rub');
  let priceInputCells = document.querySelectorAll('.js-p-input');
  let priceSumCell = document.querySelectorAll('.js-p-sum');
  let priceResult = document.querySelector('#js-p-result');
  let arrNumbers = [];
  
  priceInputCells.forEach((item, inx) => {
    item.addEventListener('input', changeInput.bind(item, inx));
  });
  
  function changeInput(inx, ev) {
    this.value = this.value.replace(/\D/g, '');//blocking character input
    //заперли inx в замыкании привязав input к индексам массива.
    priceSumCell[inx].textContent = arrNumbers[inx] = getSumInputs(this.value, inx);
    priceResult.textContent = getResult(arrNumbers);
  }
  
  function getSumInputs(val, inx){
    return +priceRublesCell[inx].textContent * +val
  }
  
  function getResult(arr){
    return arr.reduce((prev, num) => (prev += +num), 0);
  }
}

/*------------------------------------------------------------------------------------*/
/*#######---------<{ Control Scroll}>---------##########*/
function lockScroll() {
  console.dir('создание');
  window.addEventListener('wheel', evWheel, { passive: false })
  window.addEventListener('scroll', evScroll) 
}

function unlockScroll() {
  console.dir('удаление');
  window.removeEventListener('wheel', evWheel, { passive: false })
  window.removeEventListener('scroll', evScroll)
}

function evWheel(ev) {
  if(!priceTable.contains(ev.target)){
    console.dir('Wheel');
    ev.preventDefault(); return; 
  }

  this.scrollTo(0, saveScrollToTheOpen);
} 

function evScroll(ev) {
  console.dir('Scroll');
  this.scrollTo(0, saveScrollToTheOpen)
} 
/*------------------------------------------------------------------------------------------*/








