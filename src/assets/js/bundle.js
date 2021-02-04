(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cards = document.querySelector('#js-adv-cards');
var visibilityIndent = 100;
var difference = parseFloat(getComputedStyle(cards.children[0]).transform.split(',')[5]);
console.dir(difference);
console.dir(cards.children[0].style);
document.addEventListener('scroll', checkedCard);

function checkedCard(ev) {
  _toConsumableArray(cards.children).forEach(function (card, inx) {
    // console.dir((card.getBoundingClientRect().top + visibilityIndent + difference) - window.innerHeight);
    if (!card.classList.contains('card--active')) {
      if (card.getBoundingClientRect().top + visibilityIndent - difference - window.innerHeight <= 0) {
        card.classList.add('card--active');
        var delay = parseFloat(getComputedStyle(card).transitionDuration);
        card.style.transitionDuration = 2 * inx + 's';
        console.dir(1);
        console.dir(delay * inx + 's');
      }
    }
  });
}

},{}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Element.prototype.createCount = function () {
  var nameClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var maxCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    tag: '',
    element: ''
  };
  var tag = option.tag ? option.tag : 'span';
  this.countClassName = nameClass;
  this.maxCount = maxCount;
  this.constructor.prototype.updateCount = updateCount;
  var el = "<".concat(tag, " class=").concat(nameClass, " >").concat(this.value.length, "/").concat(maxCount, "</").concat(tag, ">");

  if (_typeof(option.element) === 'object') {
    option.element.insertAdjacentHTML('afterend', el);
    this.countTarget = option.element;
    return;
  }

  this.insertAdjacentHTML('afterend', el);
};

function updateCount() {
  var countTarget = this.countTarget ? this.countTarget.nextElementSibling : this.nextElementSibling;
  countTarget.textContent = "".concat(this.value.length, "/").concat(this.maxCount);
}

},{}],3:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var header = document.querySelector('.header');

if (header.clientWidth < 768) {
  var btnMenu = "\n    <div class=\"btn-burger\">\n      <i class=\"btn-burger__item\"></i>\n      <i class=\"btn-burger__item\"></i>\n      <i class=\"btn-burger__item\"></i>\n    </div>\n  ";
  header.insertAdjacentHTML("beforeend", btnMenu);
  var headerBtnMenu = document.querySelector('.btn-burger');
  headerBtnMenu.addEventListener('click', toggleMenu);
}

function toggleMenu(ev) {
  this.parentNode.children[0].classList.toggle('header__items--active');
  this.parentNode.classList.toggle('header--active');

  _toConsumableArray(this.children).forEach(function (burgerItem) {
    burgerItem.classList.toggle('btn-burger__item--active');
  });
}

},{}],4:[function(require,module,exports){
"use strict";

var _slider = _interopRequireDefault(require("./slider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  (0, _slider.default)();
};

},{"./slider":11}],5:[function(require,module,exports){
"use strict";

var imageIst = document.querySelectorAll('.inst__slider-item');
var imgOption = {
  root: document.querySelector('.inst__sliders'),

  /* должен быть предком. по умолчанию окно браузера */
  rootMargin: '0px 500px 0px 0px',

  /*Отступы вокруг root.  */
  threshold: .05
  /* число от 0-1. это насколько процентов должен быть видео объект при котором
  //                  должна отработать callback функция. Можно даж массив передать. [0, 0.25, 0.5, 0.75, 1] */

};
var imgObserver = new IntersectionObserver(function (entries, imgObserver) {
  entries.forEach(function (_ref) {
    var target = _ref.target,
        isIntersecting = _ref.isIntersecting;

    if (!isIntersecting) {
      /*элементы не пересекают границу. false */
      return;
    }

    target.src = target.getAttribute("data-src");
    imgObserver.unobserve(target);
  });
}, imgOption);
imageIst.forEach(function (item) {
  imgObserver.observe(item);
});

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popup = popup;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function popup(popupEl, btnOpen) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    noBlockEl: '',
    scrollOff: false,
    opened: '',
    closing: ''
  };
  var close = popupEl.querySelector("#".concat(popupEl.id, "-close"));
  var saveScrollToTheOpen;
  btnOpen.addEventListener('click', openPrice);
  popupEl.addEventListener('click', closePrice);

  function openPrice(ev) {
    popupEl.style.display = "flex";
    saveScrollToTheOpen = window.scrollY;
    lockScroll();

    if (typeof option.opened == 'function') {
      option.opened();
    }
  }

  function closePrice(ev) {
    if (ev.target == popupEl || ev.target == close) {
      popupEl.style.display = "none";
      unlockScroll();

      if (typeof option.closing == 'function') {
        option.closing();
      }
    }
  }
  /*#######---------<{ Control Scroll}>---------##########*/


  function lockScroll() {
    window.addEventListener('wheel', evWheel, {
      passive: false
    });
    window.addEventListener('scroll', evScroll);
  }

  function unlockScroll() {
    window.removeEventListener('wheel', evWheel, {
      passive: false
    });
    window.removeEventListener('scroll', evScroll);
  }

  function evWheel(ev) {
    if (_typeof(option.noBlockEl) == 'object') {
      if (!option.noBlockEl.contains(ev.target)) {
        ev.preventDefault();
        return;
      }
    } else if (option.scrollOff) {
      ev.preventDefault();
      return;
    }

    console.dir("evWheel");
    this.scrollTo(0, saveScrollToTheOpen);
  }

  function evScroll(ev) {
    console.dir("evScroll");
    this.scrollTo(0, saveScrollToTheOpen);
  }
} // function popup(popupEl, btnOpen, option = {noBlockEl: null, opened: null}){
//   let close = popupEl.querySelector(`.${popupEl.className}__close`);
//   let saveScrollToTheOpen;
//   btnOpen.addEventListener('click', openPrice);
//   popupEl.addEventListener('click', closePrice);
//   function openPrice(ev) {
//     popupEl.style.display = "flex"; 
//     saveScrollToTheOpen = window.scrollY;
//     lockScroll();
//     if(typeof option.opened == 'function'){
//       option.opened()
//     }
//   }
//   function closePrice(ev) {
//     if(ev.target == popup || ev.target == close){
//       popupEl.style.display = "none"; 
//       unlockScroll()
//     }
//   }
//   function lockScroll() {
//     window.addEventListener('wheel', evWheel, { passive: false })
//     window.addEventListener('scroll', evScroll) 
//   }
//   function unlockScroll() {
//     window.removeEventListener('wheel', evWheel, { passive: false })
//     window.removeEventListener('scroll', evScroll)
//   }
//   function evWheel(ev) {
//     if(typeof option.noBlockEl == 'object'){
//       if(!option.noBlockEl.contains(ev.target)){
//         ev.preventDefault(); return; 
//       }
//     }
//     this.scrollTo(0, saveScrollToTheOpen);
//   } 
//   function evScroll(ev) {
//     this.scrollTo(0, saveScrollToTheOpen)
//   } 
// }

/* Кнопка будет вызывать данную функцию */

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preloaderTable = preloaderTable;

function preloaderTable() {
  return "<div id=\"preloader\">\n            <div id=\"loader\"></div>\n          </div>";
}

},{}],8:[function(require,module,exports){
"use strict";

var _preloader = require("./preloader");

var _popup = require("./popup");

var _config = require("../../../config/config.json");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var priceBtn = document.querySelector('#js-popup-pl-open');
var priceList = document.querySelector('#js-popup-pl');
var priceTable = document.querySelector('#js-p-table');
var tableBody = document.querySelector('#js-p-tableBody');
(0, _popup.popup)(priceList, priceBtn, {
  noBlockEl: priceTable,
  opened: ajaxRequestTable
});
/*########---------<{ Main Function }>---------#########*/

function ajaxRequestTable() {
  if (!tableBody.children.length) {
    tableBody.innerHTML = (0, _preloader.preloaderTable)();
    fetch("".concat(_config.protocol, "://").concat(_config.host, ":").concat(_config.port, "/table")).then(function (data) {
      return data.json();
    }).then(function (data) {
      tableBody.innerHTML = '';
      renderTable(data);
    }).then(function () {
      hangTheFunctionality();
    }).catch(function (err) {
      tableBody.textContent = err;
    });
  } else console.dir('Данные уже загружены');
}
/*#######------<{ renderTable and hangTheFunctionality }>--------#######*/


function renderTable(data) {
  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var arrTables = _step.value;

      if (arrTables.id === 1) {
        tableBody.innerHTML += "<tr class=\"price-list__row-head-title\" >\n        <th class=\"price-list__cell-head-title\" colspan=\"4\">".concat(arrTables.services, "</th>\n      </tr>\n        <tr class=\"price-list__row-info\" >\n          <td class=\"price-list__cell-info\">\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435</td>\n          <td class=\"price-list__cell-info\">\u0415\u0434.\u0438\u0437\u043C.</td>\n          <td class=\"price-list__cell-info\">\u0426\u0435\u043D\u0430(\u0440\u0443\u0431.)</td>\n          <td class=\"price-list__cell-info\">\u041A\u043E\u043B-\u0432\u043E</td>\n          <td class=\"price-list__cell-info\">\u0421\u0443\u043C\u043C\u0430</td>\n        </tr>");
      } else {
        tableBody.innerHTML += "<tr class=\"price-list__row\">\n        <td class=\"price-list__cell\">".concat(arrTables.services, "</td>\n        <td class=\"price-list__cell\">").concat(arrTables.unit, "</td>\n        <td class=\"price-list__cell js-p-rub\">").concat(arrTables.price, "</td>\n        <td class=\"price-list__cell\">\n          <input class=\"price-list__input js-p-input\" type=\"text\" name=\"dataCell\">\n        </td>\n        <td class=\"price-list__cell js-p-sum\">0</td>\n      </tr>");
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function hangTheFunctionality() {
  var priceRublesCell = document.querySelectorAll('.js-p-rub');
  var priceInputCells = document.querySelectorAll('.js-p-input');
  var priceSumCell = document.querySelectorAll('.js-p-sum');
  var priceResult = document.querySelector('#js-p-result');
  var arrNumbers = [];
  priceInputCells.forEach(function (item, inx) {
    item.addEventListener('input', changeInput.bind(item, inx));
  });

  function changeInput(inx, ev) {
    this.value = this.value.replace(/\D/g, ''); //blocking character input
    //заперли inx в замыкании привязав input к индексам массива.

    priceSumCell[inx].textContent = arrNumbers[inx] = getSumInputs(this.value, inx);
    priceResult.textContent = getResult(arrNumbers);
  }

  function getSumInputs(val, inx) {
    return +priceRublesCell[inx].textContent * +val;
  }

  function getResult(arr) {
    return arr.reduce(function (prev, num) {
      return prev += +num;
    }, 0);
  }
}

},{"../../../config/config.json":12,"./popup":6,"./preloader":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = void 0;

var _state;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var inputName = document.querySelector('#js-m-name');
var inputPhone = document.querySelector('#js-m-phone');
var textArea = document.querySelector('#js-m-textarea');
var state = (_state = {}, _defineProperty(_state, inputName.name, {
  min: 2,
  max: 15,
  status: false,
  length: 0,
  value: ''
}), _defineProperty(_state, inputPhone.name, {
  min: 18,
  max: 18,
  status: false,
  length: 0,
  value: ''
}), _defineProperty(_state, textArea.name, {
  min: 10,
  max: 400,
  status: false,
  length: 0,
  value: ''
}), _state);
exports.state = state;
[inputName, inputPhone, textArea].forEach(function (item) {
  item.addEventListener('input', checkInAll);
});
textArea.createCount('mail-popup__form-count', state[textArea.name].max, {
  element: textArea.parentElement
});

function checkInAll(ev) {
  ev.preventDefault();

  if (this === inputName || this === textArea) {
    this.value = this.value.replace(/[%<>&]|(script)/g, '');
    if (this === textArea) this.updateCount();
  }

  if (this == inputPhone) maskInput(this, ev);
  maxMin(this);
}

function maxMin(el) {
  var stateItem = state[el.name];

  if (el.value.length >= stateItem.min && stateItem.length <= stateItem.max) {
    stateItem.status = true;
    el.style.animationName = 'glowInputSuccess';
  } else {
    stateItem.status = false;
    el.style.animationName = 'glowInputError';
  }

  if (el.value.length > stateItem.max) {
    el.value = el.value.slice(0, stateItem.max);
  } else {
    stateItem.length = el.value.length;
    stateItem.value = el.value;
  }
}

function maskInput(el, ev) {
  var input = el;
  var mask = input.dataset.mask;
  var value = input.value;
  var literalPattern = /[0\*]/;
  var numberPattern = /[0-9]/gi; //+7 (000) 000-00-00//\+7\s\(9\d{2}\)\s\d{3}-\d{2}-\d{2}

  var newValue = "";

  if (/\D/.test(ev.data)) {
    el.value = el.value.replace(ev.data, '');
    return;
  }

  try {
    var maskLength = mask.length;
    var valueIndex = 0;
    var maskIndex = 0;

    for (; maskIndex < maskLength;) {
      if (maskIndex >= value.length) break;
      if (mask[maskIndex] === "0" && value[valueIndex].match(numberPattern) === null) break; // Found a literal

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
} //^[+\d]*[(]\d{3}[)]\d{3}-\d{2}-\d{2}/g

},{}],10:[function(require,module,exports){
"use strict";

var _popup = require("../popup");

var _checkIn = require("./check-in");

var _config = require("../../../../config/config.json");

var popupMail = document.querySelector('#js-popup-mail');
var popupOpen = document.querySelector('#js-popup-mail-open');
var mailForm = document.querySelector('#js-m-form');
(0, _popup.popup)(popupMail, popupOpen, {
  scrollOff: true,
  closing: resetForm
});
mailForm.addEventListener('submit', sendMail);

function sendMail(ev) {
  ev.preventDefault();
  console.dir(_checkIn.state);

  if (!Object.values(_checkIn.state).every(function (item) {
    return item.status;
  })) {
    return;
  }

  console.dir('успех');
  fetch("".concat(_config.protocol, "://").concat(_config.host, ":").concat(_config.port, "/mail"), {
    method: 'POST',
    body: new FormData(this)
  }).then(function (data) {
    return data.json();
  }).then(function (data) {
    success(JSON.stringify(data));
  }).catch(function (err) {
    console.dir(err);
  });
}

var msg = "<div class=\"mail-popup__form-success-msg\">\u041F\u0438\u0441\u044C\u043C\u043E \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043E</div>";

function success(data) {
  mailForm.classList.add('mail-popup__form--success');
  var timing = parseFloat(getComputedStyle(mailForm).transitionDuration);
  setTimeout(function () {
    mailForm.insertAdjacentHTML('afterend', msg); //JSON.stringify(data)
  }, timing * 1000);
}

function resetForm() {
  var elSuccessMsg = mailForm.nextElementSibling;

  if (elSuccessMsg && elSuccessMsg.matches('.mail-popup__form-success-msg')) {
    mailForm.parentElement.removeChild(elSuccessMsg);
    mailForm.classList.remove('mail-popup__form--success');

    for (var i = 0; i < mailForm.length - 1; i++) {
      mailForm[i].value = '';

      if (mailForm[i].updateCount) {
        console.info('Счётчик Сброшен');
        mailForm[i].updateCount();
      }
    }
  }
}

function err(data) {
  mailForm.classList.toggle('mail-popup__form--error');
  var timing = parseFloat(getComputedStyle(mailForm).transitionDuration);
  console.dir(timing);
  setTimeout(function () {
    mailForm.insertAdjacentHTML('afterend', msg); //JSON.stringify(data)
  }, timing * 1000);
}

},{"../../../../config/config.json":12,"../popup":6,"./check-in":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _default() {
  var multiItemSlider = function () {
    Element.prototype.c_querySelector = function (selectOrRegExp) {
      var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (selectOrRegExp.constructor === RegExp.prototype.constructor && flag) {
        return _toConsumableArray(this.children).find(function (item) {
          return selectOrRegExp.test(item.className);
        });
      } else {
        return this.querySelector(selectOrRegExp);
      }
    };

    Element.prototype.c_querySelectorAll = function (selectOrRegExp) {
      var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (selectOrRegExp.constructor === RegExp.prototype.constructor && flag) {
        return _toConsumableArray(this.children).filter(function (item) {
          return selectOrRegExp.test(item.className);
        });
      } else {
        return this.querySelectorAll(selectOrRegExp);
      }
    };

    function _isElementVisible(element) {
      // возможно потребуется установить элементу z-index:0
      var rect = element.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          elemFromPoint = function elemFromPoint(x, y) {
        return document.elementFromPoint(x, y);
      };

      if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) return false;
      return element.contains(elemFromPoint(rect.left, rect.top)) || element.contains(elemFromPoint(rect.right, rect.top)) || element.contains(elemFromPoint(rect.right, rect.bottom)) || element.contains(elemFromPoint(rect.left, rect.bottom));
    }

    return function (selector, config) {
      var _mainElement = document.querySelector(selector),
          _sliderWrapper = _mainElement.c_querySelector(/.+items/, true),
          _sliderItems = _sliderWrapper.c_querySelectorAll(/.+item/, true),
          _sliderControls = _mainElement.c_querySelectorAll(/.+control/, true),
          _sliderControlLeft = _mainElement.c_querySelector(/.+control_left/, true),
          _sliderControlRight = _mainElement.c_querySelector(/.+control_right/, true),
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width),
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width),
          _html = _mainElement.innerHTML;

      var _indexIndicator = 0,
          _maxIndexIndicator = _sliderItems.length - 1,
          _indicatorItems,
          _positionLeftItem = 0,
          _transform = 0,
          _step = _itemWidth / _wrapperWidth * 100,
          _items = [],
          _interval = 0,
          _states = [{
        active: false,
        minWidth: 0,
        count: 1
      }, {
        active: false,
        minWidth: 576,
        count: 2
      }, {
        active: false,
        minWidth: 992,
        count: 3
      }, {
        active: false,
        minWidth: 1200,
        count: 4
      }],
          _config = {
        isCycling: false,
        direction: 'right',
        interval: 5000,
        pause: true
      };

      for (var key in config) {
        if (key in _config) {
          _config[key] = config[key];
        }
      }

      _sliderItems.forEach(function (item, index) {
        _items.push({
          item: item,
          position: index,
          transform: 0
        });
      });

      var _setActive = function _setActive() {
        var _index = 0;
        var width = parseFloat(document.body.clientWidth);

        _states.forEach(function (item, index, arr) {
          _states[index].active = false;
          if (width >= _states[index].minWidth) _index = index;
        });

        _states[_index].active = true;
      };

      var _getActive = function _getActive() {
        var _index;

        _states.forEach(function (item, index, arr) {
          if (_states[index].active) {
            _index = index;
          }
        });

        return _index;
      };

      var position = {
        getItemMin: function getItemMin() {
          var indexItem = 0;

          _items.forEach(function (item, index) {
            if (item.position < _items[indexItem].position) {
              indexItem = index;
            }
          });

          return indexItem;
        },
        getItemMax: function getItemMax() {
          var indexItem = 0;

          _items.forEach(function (item, index) {
            if (item.position > _items[indexItem].position) {
              indexItem = index;
            }
          });

          return indexItem;
        },
        getMin: function getMin() {
          return _items[position.getItemMin()].position;
        },
        getMax: function getMax() {
          return _items[position.getItemMax()].position;
        }
      };

      var _transformItem = function _transformItem(direction) {
        var nextItem,
            currentIndicator = _indexIndicator; // console.dir(_isElementVisible(_mainElement)); 
        // if (!_isElementVisible(_mainElement)) {
        //   return;
        // }

        if (direction === 'right') {
          _positionLeftItem++;

          if (_positionLeftItem + _wrapperWidth / _itemWidth - 1 > position.getMax()) {
            nextItem = position.getItemMin();
            _items[nextItem].position = position.getMax() + 1;
            _items[nextItem].transform += _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
          }

          _transform -= _step;
          _indexIndicator = _indexIndicator + 1;

          if (_indexIndicator > _maxIndexIndicator) {
            _indexIndicator = 0;
          }
        }

        if (direction === 'left') {
          _positionLeftItem--;

          if (_positionLeftItem < position.getMin()) {
            nextItem = position.getItemMax();
            _items[nextItem].position = position.getMin() - 1;
            _items[nextItem].transform -= _items.length * 100;
            _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
          }

          _transform += _step;
          _indexIndicator = _indexIndicator - 1;

          if (_indexIndicator < 0) {
            _indexIndicator = _maxIndexIndicator;
          }
        }

        _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';

        _indicatorItems[currentIndicator].classList.remove('active');

        _indicatorItems[_indexIndicator].classList.add('active');
      };

      var _slideTo = function _slideTo(to) {
        var i = 0,
            direction = to > _indexIndicator ? 'right' : 'left';

        while (to !== _indexIndicator && i <= _maxIndexIndicator) {
          _transformItem(direction);

          i++;
        }
      };

      var _cycle = function _cycle(direction) {
        if (!_config.isCycling) {
          return;
        }

        _interval = setInterval(function () {
          _transformItem(direction);
        }, _config.interval);
      };

      var _controlClick = function _controlClick(e) {
        if (e.target.classList.contains('slider__control')) {
          e.preventDefault();
          var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';

          _transformItem(direction);

          clearInterval(_interval);

          _cycle(_config.direction);
        }

        if (e.target.getAttribute('data-slide-to')) {
          e.preventDefault();

          _slideTo(parseInt(e.target.getAttribute('data-slide-to')));

          clearInterval(_interval);

          _cycle(_config.direction);
        }
      };

      var _handleVisibilityChange = function _handleVisibilityChange() {
        if (document.visibilityState === "hidden") {
          clearInterval(_interval);
        } else {
          clearInterval(_interval);

          _cycle(_config.direction);
        }
      };

      var _refresh = function _refresh() {
        clearInterval(_interval);
        _mainElement.innerHTML = _html;
        _sliderWrapper = _mainElement.c_querySelector(/.+items/, true);
        _sliderItems = _sliderWrapper.c_querySelectorAll(/.+item/, true);
        _sliderControls = _mainElement.c_querySelectorAll(/.+control/, true);
        _sliderControlLeft = _mainElement.c_querySelector(/.+control_left/, true);
        _sliderControlRight = _mainElement.c_querySelector(/.+control_right/, true);
        _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
        _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
        _positionLeftItem = 0;
        _transform = 0;
        _indexIndicator = 0;
        _maxIndexIndicator = _sliderItems.length - 1;
        _step = _itemWidth / _wrapperWidth * 100;
        _items = [];

        _sliderItems.forEach(function (item, index) {
          _items.push({
            item: item,
            position: index,
            transform: 0
          });
        });

        _addIndicators();
      };

      var _setUpListeners = function _setUpListeners() {
        _mainElement.addEventListener('click', _controlClick);

        if (_config.pause && _config.isCycling) {
          _mainElement.addEventListener('mouseenter', function () {
            clearInterval(_interval);
          });

          _mainElement.addEventListener('mouseleave', function () {
            clearInterval(_interval);

            _cycle(_config.direction);
          });
        }

        document.addEventListener('visibilitychange', _handleVisibilityChange, false);
        window.addEventListener('resize', function () {
          var _index = 0,
              width = parseFloat(document.body.clientWidth);

          _states.forEach(function (item, index, arr) {
            if (width >= _states[index].minWidth) _index = index;
          });

          if (_index !== _getActive()) {
            _setActive();

            _refresh();
          }
        });
      };

      var _addIndicators = function _addIndicators() {
        var sliderIndicators = document.createElement('ol');
        sliderIndicators.classList.add(selector.split('__')[0].slice(1) + '__indicators');

        for (var i = 0; i < _sliderItems.length; i++) {
          var sliderIndicatorsItem = document.createElement('li');

          if (i === 0) {
            sliderIndicatorsItem.classList.add('active');
          }

          sliderIndicatorsItem.setAttribute("data-slide-to", i);
          sliderIndicators.appendChild(sliderIndicatorsItem);

          _sliderWrapper.insertAdjacentElement("afterend", sliderIndicators);
        } // console.dir(sliderIndicators);
        // _mainElement.appendChild(sliderIndicators);


        _indicatorItems = _mainElement.querySelectorAll(selector.split('__')[0] + '__indicators > li');
      }; // добавляем индикаторы


      _addIndicators(); // инициализация


      _setUpListeners();

      if (document.visibilityState === "visible") {
        _cycle(_config.direction);
      }

      _setActive();

      return {
        right: function right() {
          _transformItem('right');
        },
        left: function left() {
          _transformItem('left');
        },
        stop: function stop() {
          _config.isCycling = false;
          clearInterval(_interval);
        },
        cycle: function cycle() {
          _config.isCycling = true;
          clearInterval(_interval);

          _cycle();
        }
      };
    };
  }();

  var slider = multiItemSlider('.slider', {
    isCycling: true,
    interval: 8000
  });
  var instSlider1 = multiItemSlider('.inst__slider--1', {
    isCycling: true,
    interval: 5000
  });
  var instSlider2 = multiItemSlider('.inst__slider--2', {
    isCycling: true,
    interval: 5000
  });
  var instSlider3 = multiItemSlider('.inst__slider--3', {
    isCycling: true,
    interval: 5000
  });
  var instSlider4 = multiItemSlider('.inst__slider--4', {
    isCycling: true,
    interval: 5000
  });
}

},{}],12:[function(require,module,exports){
module.exports={
  "protocol": "http",
  "host": "localhost",
  "port": 8080
}
},{}]},{},[1,2,3,4,5,6,7,8,9,10,11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL2Rldi9hZHZhbnRhZ2VzLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvZXh0ZW5zaW9uRE9NLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvaGVhZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvaW5kZXguanMiLCJzcmMvYXNzZXRzL2pzL2Rldi9sYXp5TG9hZGluZy5qcyIsInNyYy9hc3NldHMvanMvZGV2L3BvcHVwLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvcHJlbG9hZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvcHJpY2UtbGlzdC5qcyIsInNyYy9hc3NldHMvanMvZGV2L3NlY3Rpb24tbWFpbC9jaGVjay1pbi5qcyIsInNyYy9hc3NldHMvanMvZGV2L3NlY3Rpb24tbWFpbC9zZW5kRm9ybS5qcyIsInNyYy9hc3NldHMvanMvZGV2L3NsaWRlci5qcyIsInNyYy9jb25maWcvY29uZmlnLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQVo7QUFDQSxJQUFJLGdCQUFnQixHQUFHLEdBQXZCO0FBQ0EsSUFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxRQUFOLENBQWUsQ0FBZixDQUFELENBQWhCLENBQW9DLFNBQXBDLENBQThDLEtBQTlDLENBQW9ELEdBQXBELEVBQXlELENBQXpELENBQUQsQ0FBM0I7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVo7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQUssQ0FBQyxRQUFOLENBQWUsQ0FBZixFQUFrQixLQUE5QjtBQUNBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxXQUFwQzs7QUFHQSxTQUFTLFdBQVQsQ0FBcUIsRUFBckIsRUFBd0I7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TUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBSUEsTUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBSUEsTUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBSUEsTUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBS0Q7OztBQ25WRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWFkdi1jYXJkcycpO1xyXG5sZXQgdmlzaWJpbGl0eUluZGVudCA9IDEwMDtcclxubGV0IGRpZmZlcmVuY2UgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoY2FyZHMuY2hpbGRyZW5bMF0pLnRyYW5zZm9ybS5zcGxpdCgnLCcpWzVdKTtcclxuXHJcbmNvbnNvbGUuZGlyKGRpZmZlcmVuY2UpO1xyXG5jb25zb2xlLmRpcihjYXJkcy5jaGlsZHJlblswXS5zdHlsZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrZWRDYXJkKTtcclxuXHJcblxyXG5mdW5jdGlvbiBjaGVja2VkQ2FyZChldil7XHJcbiBcclxuICBbLi4uY2FyZHMuY2hpbGRyZW5dLmZvckVhY2goKGNhcmQsIGlueCkgPT57XHJcbiAgICAvLyBjb25zb2xlLmRpcigoY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB2aXNpYmlsaXR5SW5kZW50ICsgZGlmZmVyZW5jZSkgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgaWYoIWNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLS1hY3RpdmUnKSl7XHJcbiAgICAgIFxyXG4gICAgICBpZigoY2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB2aXNpYmlsaXR5SW5kZW50IC0gZGlmZmVyZW5jZSkgLSB3aW5kb3cuaW5uZXJIZWlnaHQgPD0gMCl7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkLS1hY3RpdmUnKVxyXG4gICAgICAgIGxldCBkZWxheSA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShjYXJkKS50cmFuc2l0aW9uRHVyYXRpb24pO1xyXG4gICAgICAgIGNhcmQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gKDIgKiBpbngpICsgJ3MnO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKDEpO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKChkZWxheSAqIGlueCkgKyAncycpO1xyXG4gICAgICB9ICBcclxuICAgIH1cclxuICBcclxuICB9KVxyXG59IiwiRWxlbWVudC5wcm90b3R5cGUuY3JlYXRlQ291bnQgPSBmdW5jdGlvbiAobmFtZUNsYXNzID0gJycsICBtYXhDb3VudCA9IDUwMCwgb3B0aW9uID0geyB0YWc6ICcnLCBlbGVtZW50OiAnJyB9KXtcclxuXHJcbiAgbGV0IHRhZyA9IChvcHRpb24udGFnKSA/IG9wdGlvbi50YWcgOiAnc3Bhbic7XHJcbiAgdGhpcy5jb3VudENsYXNzTmFtZSA9IG5hbWVDbGFzcztcclxuICB0aGlzLm1heENvdW50ID0gbWF4Q291bnQ7XHJcblxyXG4gIHRoaXMuY29uc3RydWN0b3IucHJvdG90eXBlLnVwZGF0ZUNvdW50ID0gdXBkYXRlQ291bnQ7XHJcblxyXG4gIGxldCBlbCA9IGA8JHt0YWd9IGNsYXNzPSR7bmFtZUNsYXNzfSA+JHt0aGlzLnZhbHVlLmxlbmd0aH0vJHttYXhDb3VudH08LyR7dGFnfT5gO1xyXG4gIGlmKHR5cGVvZiBvcHRpb24uZWxlbWVudCA9PT0gJ29iamVjdCcpe1xyXG4gICAgb3B0aW9uLmVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVsKTtcclxuICAgIHRoaXMuY291bnRUYXJnZXQgPSBvcHRpb24uZWxlbWVudFxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0aGlzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBlbCk7XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvdW50KCkge1xyXG4gIGxldCBjb3VudFRhcmdldCA9ICh0aGlzLmNvdW50VGFyZ2V0KSA/IHRoaXMuY291bnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICBjb3VudFRhcmdldC50ZXh0Q29udGVudCA9IGAke3RoaXMudmFsdWUubGVuZ3RofS8ke3RoaXMubWF4Q291bnR9YDtcclxuICBcclxufVxyXG4iLCJsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cclxuXHJcbmlmKGhlYWRlci5jbGllbnRXaWR0aCA8IDc2OCl7XHJcblxyXG4gIGxldCBidG5NZW51ID0gXHJcbiAgYFxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1idXJnZXJcIj5cclxuICAgICAgPGkgY2xhc3M9XCJidG4tYnVyZ2VyX19pdGVtXCI+PC9pPlxyXG4gICAgICA8aSBjbGFzcz1cImJ0bi1idXJnZXJfX2l0ZW1cIj48L2k+XHJcbiAgICAgIDxpIGNsYXNzPVwiYnRuLWJ1cmdlcl9faXRlbVwiPjwvaT5cclxuICAgIDwvZGl2PlxyXG4gIGA7XHJcbiAgaGVhZGVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBidG5NZW51KTtcclxuICBsZXQgaGVhZGVyQnRuTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYnVyZ2VyJyk7XHJcbiAgaGVhZGVyQnRuTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xyXG4gXHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlTWVudShldil7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9faXRlbXMtLWFjdGl2ZScpO1xyXG4gIHRoaXMucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItLWFjdGl2ZScpO1xyXG4gIFsuLi50aGlzLmNoaWxkcmVuXS5mb3JFYWNoKGJ1cmdlckl0ZW0gPT4ge1xyXG4gICAgYnVyZ2VySXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdidG4tYnVyZ2VyX19pdGVtLS1hY3RpdmUnKVxyXG4gIH0pO1xyXG4gIFxyXG59IiwiaW1wb3J0IHJ1blNsaWRlcnMgZnJvbSAnLi9zbGlkZXInO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XHJcbiAgcnVuU2xpZGVycygpO1xyXG59XHJcblxyXG4iLCJsZXQgaW1hZ2VJc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zdF9fc2xpZGVyLWl0ZW0nKTtcclxubGV0IGltZ09wdGlvbiA9IHsgXHJcbiAgcm9vdDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RfX3NsaWRlcnMnKSwvKiDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0L/RgNC10LTQutC+0LwuINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC+0LrQvdC+INCx0YDQsNGD0LfQtdGA0LAgKi9cclxuICByb290TWFyZ2luOiAnMHB4IDUwMHB4IDBweCAwcHgnLCAvKtCe0YLRgdGC0YPQv9GLINCy0L7QutGA0YPQsyByb290LiAgKi9cclxuICB0aHJlc2hvbGQ6IC4wNS8qINGH0LjRgdC70L4g0L7RgiAwLTEuINGN0YLQviDQvdCw0YHQutC+0LvRjNC60L4g0L/RgNC+0YbQtdC90YLQvtCyINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstC40LTQtdC+INC+0LHRitC10LrRgiDQv9GA0Lgg0LrQvtGC0L7RgNC+0LxcclxuICAvLyAgICAgICAgICAgICAgICAgINC00L7Qu9C20L3QsCDQvtGC0YDQsNCx0L7RgtCw0YLRjCBjYWxsYmFjayDRhNGD0L3QutGG0LjRjy4g0JzQvtC20L3QviDQtNCw0LYg0LzQsNGB0YHQuNCyINC/0LXRgNC10LTQsNGC0YwuIFswLCAwLjI1LCAwLjUsIDAuNzUsIDFdICovXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbn07XHJcblxyXG5cclxuY29uc3QgaW1nT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIGltZ09ic2VydmVyKSA9PiB7XHJcbiAgZW50cmllcy5mb3JFYWNoKCh7IHRhcmdldCwgaXNJbnRlcnNlY3RpbmcgfSkgPT4ge1xyXG4gICAgaWYoIWlzSW50ZXJzZWN0aW5nKXsvKtGN0LvQtdC80LXQvdGC0Ysg0L3QtSDQv9C10YDQtdGB0LXQutCw0Y7RgiDQs9GA0LDQvdC40YbRgy4gZmFsc2UgKi9cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGFyZ2V0LnNyYyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcclxuICAgIGltZ09ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXQpXHJcbiAgfSlcclxufSwgaW1nT3B0aW9uKTtcclxuXHJcblxyXG5pbWFnZUlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gIGltZ09ic2VydmVyLm9ic2VydmUoaXRlbSk7XHJcbn0pOyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gcG9wdXAocG9wdXBFbCwgYnRuT3Blbiwgb3B0aW9uID0ge25vQmxvY2tFbDogJycsIHNjcm9sbE9mZjogZmFsc2UsIG9wZW5lZDogJycsIGNsb3Npbmc6ICcnfSl7XHJcblxyXG4gIGxldCBjbG9zZSA9IHBvcHVwRWwucXVlcnlTZWxlY3RvcihgIyR7cG9wdXBFbC5pZH0tY2xvc2VgKTtcclxuICBsZXQgc2F2ZVNjcm9sbFRvVGhlT3BlbjtcclxuICBcclxuICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByaWNlKTtcclxuICBwb3B1cEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcmljZSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5QcmljZShldikge1xyXG4gICAgcG9wdXBFbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxyXG4gIFxyXG4gICAgc2F2ZVNjcm9sbFRvVGhlT3BlbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgbG9ja1Njcm9sbCgpO1xyXG4gICAgaWYodHlwZW9mIG9wdGlvbi5vcGVuZWQgPT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgIG9wdGlvbi5vcGVuZWQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VQcmljZShldikge1xyXG5cclxuICAgIGlmKGV2LnRhcmdldCA9PSBwb3B1cEVsIHx8IGV2LnRhcmdldCA9PSBjbG9zZSl7XHJcbiAgIFxyXG4gICAgICBwb3B1cEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXHJcbiAgICAgIHVubG9ja1Njcm9sbCgpXHJcbiAgICAgIGlmKHR5cGVvZiBvcHRpb24uY2xvc2luZyA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICBvcHRpb24uY2xvc2luZygpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4vKiMjIyMjIyMtLS0tLS0tLS08eyBDb250cm9sIFNjcm9sbH0+LS0tLS0tLS0tIyMjIyMjIyMjIyovXHJcbiAgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2V2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldlNjcm9sbCkgXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1bmxvY2tTY3JvbGwoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pXHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZTY3JvbGwpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBldldoZWVsKGV2KSB7XHJcbiAgICBpZih0eXBlb2Ygb3B0aW9uLm5vQmxvY2tFbCA9PSAnb2JqZWN0Jyl7XHJcbiAgICAgIGlmKCFvcHRpb24ubm9CbG9ja0VsLmNvbnRhaW5zKGV2LnRhcmdldCkpe1xyXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7IHJldHVybjsgXHJcbiAgICAgIH1cclxuICAgIH1lbHNlIGlmKG9wdGlvbi5zY3JvbGxPZmYpe1xyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpOyByZXR1cm47IFxyXG4gICAgfVxyXG4gICAgY29uc29sZS5kaXIoXCJldldoZWVsXCIpO1xyXG4gICAgdGhpcy5zY3JvbGxUbygwLCBzYXZlU2Nyb2xsVG9UaGVPcGVuKTtcclxuICB9IFxyXG5cclxuICBmdW5jdGlvbiBldlNjcm9sbChldikge1xyXG4gICAgY29uc29sZS5kaXIoXCJldlNjcm9sbFwiKTtcclxuICAgIHRoaXMuc2Nyb2xsVG8oMCwgc2F2ZVNjcm9sbFRvVGhlT3BlbilcclxuICB9IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gcG9wdXAocG9wdXBFbCwgYnRuT3Blbiwgb3B0aW9uID0ge25vQmxvY2tFbDogbnVsbCwgb3BlbmVkOiBudWxsfSl7XHJcblxyXG4vLyAgIGxldCBjbG9zZSA9IHBvcHVwRWwucXVlcnlTZWxlY3RvcihgLiR7cG9wdXBFbC5jbGFzc05hbWV9X19jbG9zZWApO1xyXG4vLyAgIGxldCBzYXZlU2Nyb2xsVG9UaGVPcGVuO1xyXG5cclxuLy8gICBidG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblByaWNlKTtcclxuLy8gICBwb3B1cEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcmljZSk7XHJcblxyXG4vLyAgIGZ1bmN0aW9uIG9wZW5QcmljZShldikge1xyXG4vLyAgICAgcG9wdXBFbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IFxyXG4vLyAgICAgc2F2ZVNjcm9sbFRvVGhlT3BlbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG4vLyAgICAgbG9ja1Njcm9sbCgpO1xyXG4vLyAgICAgaWYodHlwZW9mIG9wdGlvbi5vcGVuZWQgPT0gJ2Z1bmN0aW9uJyl7XHJcbi8vICAgICAgIG9wdGlvbi5vcGVuZWQoKVxyXG4vLyAgICAgfVxyXG4gICBcclxuLy8gICB9XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGNsb3NlUHJpY2UoZXYpIHtcclxuLy8gICAgIGlmKGV2LnRhcmdldCA9PSBwb3B1cCB8fCBldi50YXJnZXQgPT0gY2xvc2Upe1xyXG4vLyAgICAgICBwb3B1cEVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgXHJcbi8vICAgICAgIHVubG9ja1Njcm9sbCgpXHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG5cclxuXHJcbi8vICAgZnVuY3Rpb24gbG9ja1Njcm9sbCgpIHtcclxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2V2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldlNjcm9sbCkgXHJcbi8vICAgfVxyXG5cclxuLy8gICBmdW5jdGlvbiB1bmxvY2tTY3JvbGwoKSB7XHJcbi8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBldldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pXHJcbi8vICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZXZTY3JvbGwpXHJcbi8vICAgfVxyXG5cclxuLy8gICBmdW5jdGlvbiBldldoZWVsKGV2KSB7XHJcbi8vICAgICBpZih0eXBlb2Ygb3B0aW9uLm5vQmxvY2tFbCA9PSAnb2JqZWN0Jyl7XHJcbi8vICAgICAgIGlmKCFvcHRpb24ubm9CbG9ja0VsLmNvbnRhaW5zKGV2LnRhcmdldCkpe1xyXG4vLyAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7IHJldHVybjsgXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuICBcclxuLy8gICAgIHRoaXMuc2Nyb2xsVG8oMCwgc2F2ZVNjcm9sbFRvVGhlT3Blbik7XHJcbi8vICAgfSBcclxuXHJcbi8vICAgZnVuY3Rpb24gZXZTY3JvbGwoZXYpIHtcclxuLy8gICAgIHRoaXMuc2Nyb2xsVG8oMCwgc2F2ZVNjcm9sbFRvVGhlT3BlbilcclxuLy8gICB9IFxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiDQmtC90L7Qv9C60LAg0LHRg9C00LXRgiDQstGL0LfRi9Cy0LDRgtGMINC00LDQvdC90YPRjiDRhNGD0L3QutGG0LjRjiAqLyIsImV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkZXJUYWJsZSgpe1xyXG4gIHJldHVybiBgPGRpdiBpZD1cInByZWxvYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBwcmVsb2FkZXJUYWJsZSB9IGZyb20gJy4vcHJlbG9hZGVyJztcclxuaW1wb3J0IHsgcG9wdXAgfSBmcm9tICcuL3BvcHVwJztcclxuaW1wb3J0IHsgcHJvdG9jb2wsIGhvc3QsIHBvcnQgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLmpzb24nO1xyXG5cclxubGV0IHByaWNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXBvcHVwLXBsLW9wZW4nKTtcclxubGV0IHByaWNlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1wb3B1cC1wbCcpO1xyXG5sZXQgcHJpY2VUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1wLXRhYmxlJyk7XHJcbmxldCB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtcC10YWJsZUJvZHknKTtcclxuXHJcbnBvcHVwKHByaWNlTGlzdCwgcHJpY2VCdG4sIHtub0Jsb2NrRWw6IHByaWNlVGFibGUsIG9wZW5lZDogYWpheFJlcXVlc3RUYWJsZX0pXHJcblxyXG5cclxuLyojIyMjIyMjIy0tLS0tLS0tLTx7IE1haW4gRnVuY3Rpb24gfT4tLS0tLS0tLS0jIyMjIyMjIyMqL1xyXG5cclxuZnVuY3Rpb24gYWpheFJlcXVlc3RUYWJsZSgpe1xyXG4gIGlmKCF0YWJsZUJvZHkuY2hpbGRyZW4ubGVuZ3RoKXtcclxuICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSBwcmVsb2FkZXJUYWJsZSgpO1xyXG4gICAgZmV0Y2goYCR7cHJvdG9jb2x9Oi8vJHtob3N0fToke3BvcnR9L3RhYmxlYClcclxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKT0+e1xyXG4gICAgICB0YWJsZUJvZHkuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHJlbmRlclRhYmxlKGRhdGEpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+e1xyXG4gICAgICBoYW5nVGhlRnVuY3Rpb25hbGl0eSgpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHRhYmxlQm9keS50ZXh0Q29udGVudCA9IGVycjtcclxuICAgIH0pXHJcbiAgfWVsc2UgY29uc29sZS5kaXIoJ9CU0LDQvdC90YvQtSDRg9C20LUg0LfQsNCz0YDRg9C20LXQvdGLJyk7IFxyXG59XHJcblxyXG4vKiMjIyMjIyMtLS0tLS08eyByZW5kZXJUYWJsZSBhbmQgaGFuZ1RoZUZ1bmN0aW9uYWxpdHkgfT4tLS0tLS0tLSMjIyMjIyMqL1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFibGUoZGF0YSl7XHJcbiAgZm9yIChjb25zdCBhcnJUYWJsZXMgb2YgZGF0YSkge1xyXG5cclxuICAgIGlmKGFyclRhYmxlcy5pZCA9PT0gMSkgeyAgXHJcbiAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgKz0gIFxyXG4gICAgICBgPHRyIGNsYXNzPVwicHJpY2UtbGlzdF9fcm93LWhlYWQtdGl0bGVcIiA+XHJcbiAgICAgICAgPHRoIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbC1oZWFkLXRpdGxlXCIgY29sc3Bhbj1cIjRcIj4ke2FyclRhYmxlcy5zZXJ2aWNlc308L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICAgIDx0ciBjbGFzcz1cInByaWNlLWxpc3RfX3Jvdy1pbmZvXCIgPlxyXG4gICAgICAgICAgPHRkIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbC1pbmZvXCI+0J3QsNC40LzQtdC90L7QstCw0L3QuNC1PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGwtaW5mb1wiPtCV0LQu0LjQt9C8LjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsLWluZm9cIj7QptC10L3QsCjRgNGD0LEuKTwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsLWluZm9cIj7QmtC+0Lst0LLQvjwvdGQ+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsLWluZm9cIj7QodGD0LzQvNCwPC90ZD5cclxuICAgICAgICA8L3RyPmA7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgKz0gIFxyXG4gICAgYDx0ciBjbGFzcz1cInByaWNlLWxpc3RfX3Jvd1wiPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGxcIj4ke2FyclRhYmxlcy5zZXJ2aWNlc308L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGxcIj4ke2FyclRhYmxlcy51bml0fTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbCBqcy1wLXJ1YlwiPiR7YXJyVGFibGVzLnByaWNlfTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbFwiPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwicHJpY2UtbGlzdF9faW5wdXQganMtcC1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRhdGFDZWxsXCI+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsIGpzLXAtc3VtXCI+MDwvdGQ+XHJcbiAgICAgIDwvdHI+YDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmdUaGVGdW5jdGlvbmFsaXR5KCl7XHJcbiAgbGV0IHByaWNlUnVibGVzQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wLXJ1YicpO1xyXG4gIGxldCBwcmljZUlucHV0Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcC1pbnB1dCcpO1xyXG4gIGxldCBwcmljZVN1bUNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcC1zdW0nKTtcclxuICBsZXQgcHJpY2VSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtcC1yZXN1bHQnKTtcclxuICBsZXQgYXJyTnVtYmVycyA9IFtdO1xyXG4gIFxyXG4gIHByaWNlSW5wdXRDZWxscy5mb3JFYWNoKChpdGVtLCBpbngpID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGFuZ2VJbnB1dC5iaW5kKGl0ZW0sIGlueCkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNoYW5nZUlucHV0KGlueCwgZXYpIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7Ly9ibG9ja2luZyBjaGFyYWN0ZXIgaW5wdXRcclxuICAgIC8v0LfQsNC/0LXRgNC70LggaW54INCyINC30LDQvNGL0LrQsNC90LjQuCDQv9GA0LjQstGP0LfQsNCyIGlucHV0INC6INC40L3QtNC10LrRgdCw0Lwg0LzQsNGB0YHQuNCy0LAuXHJcbiAgICBwcmljZVN1bUNlbGxbaW54XS50ZXh0Q29udGVudCA9IGFyck51bWJlcnNbaW54XSA9IGdldFN1bUlucHV0cyh0aGlzLnZhbHVlLCBpbngpO1xyXG4gICAgcHJpY2VSZXN1bHQudGV4dENvbnRlbnQgPSBnZXRSZXN1bHQoYXJyTnVtYmVycyk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldFN1bUlucHV0cyh2YWwsIGlueCl7XHJcbiAgICByZXR1cm4gK3ByaWNlUnVibGVzQ2VsbFtpbnhdLnRleHRDb250ZW50ICogK3ZhbFxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBnZXRSZXN1bHQoYXJyKXtcclxuICAgIHJldHVybiBhcnIucmVkdWNlKChwcmV2LCBudW0pID0+IChwcmV2ICs9ICtudW0pLCAwKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCJsZXQgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLW0tbmFtZScpO1xyXG5sZXQgaW5wdXRQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tLXBob25lJyk7XHJcbmxldCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tLXRleHRhcmVhJyk7XHJcblxyXG5sZXQgc3RhdGUgPSB7XHJcbiAgW2lucHV0TmFtZS5uYW1lXTogeyBtaW46IDIsIG1heDogMTUsIHN0YXR1czogZmFsc2UsIGxlbmd0aDogMCwgdmFsdWU6ICcnIH0sXHJcbiAgW2lucHV0UGhvbmUubmFtZV06IHsgbWluOiAxOCwgbWF4OiAxOCwgc3RhdHVzOiBmYWxzZSwgbGVuZ3RoOiAwLCB2YWx1ZTogJycgfSxcclxuICBbdGV4dEFyZWEubmFtZV06IHsgbWluOiAxMCwgbWF4OiA0MDAsIHN0YXR1czogZmFsc2UsIGxlbmd0aDogMCwgdmFsdWU6ICcnIH0sXHJcbn07XHJcblxyXG5baW5wdXROYW1lLCBpbnB1dFBob25lLCB0ZXh0QXJlYV0uZm9yRWFjaCgoaXRlbSkgPT4geyBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hlY2tJbkFsbCkgfSk7XHJcblxyXG50ZXh0QXJlYS5jcmVhdGVDb3VudCgnbWFpbC1wb3B1cF9fZm9ybS1jb3VudCcsIHN0YXRlW3RleHRBcmVhLm5hbWVdLm1heCwgeyBlbGVtZW50OiB0ZXh0QXJlYS5wYXJlbnRFbGVtZW50IH0pXHJcblxyXG5mdW5jdGlvbiBjaGVja0luQWxsKGV2KXtcclxuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gXHJcbiAgaWYodGhpcyA9PT0gaW5wdXROYW1lIHx8IHRoaXMgPT09IHRleHRBcmVhKXtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnJlcGxhY2UoL1slPD4mXXwoc2NyaXB0KS9nLCAnJyk7XHJcblxyXG4gICAgaWYodGhpcyA9PT0gdGV4dEFyZWEpIHRoaXMudXBkYXRlQ291bnQoKTtcclxuICB9XHJcblxyXG4gIGlmKHRoaXMgPT0gaW5wdXRQaG9uZSkgbWFza0lucHV0KHRoaXMsIGV2KTtcclxuICBtYXhNaW4odGhpcyk7XHJcbiAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1heE1pbihlbCl7XHJcblxyXG4gIGxldCBzdGF0ZUl0ZW0gPSBzdGF0ZVtlbC5uYW1lXTtcclxuXHJcbiAgaWYoZWwudmFsdWUubGVuZ3RoID49IHN0YXRlSXRlbS5taW4gJiYgc3RhdGVJdGVtLmxlbmd0aCA8PSBzdGF0ZUl0ZW0ubWF4KXtcclxuICAgIHN0YXRlSXRlbS5zdGF0dXMgPSB0cnVlO1xyXG4gICAgZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICdnbG93SW5wdXRTdWNjZXNzJztcclxuICAgIFxyXG4gIH1lbHNle1xyXG4gICAgc3RhdGVJdGVtLnN0YXR1cyA9IGZhbHNlO1xyXG4gICAgZWwuc3R5bGUuYW5pbWF0aW9uTmFtZSA9ICdnbG93SW5wdXRFcnJvcic7XHJcbiAgfVxyXG4gIGlmKGVsLnZhbHVlLmxlbmd0aCA+IHN0YXRlSXRlbS5tYXgpe1xyXG4gICAgZWwudmFsdWUgPSBlbC52YWx1ZS5zbGljZSgwLCBzdGF0ZUl0ZW0ubWF4KTtcclxuICB9ZWxzZXtcclxuICAgIHN0YXRlSXRlbS5sZW5ndGggPSBlbC52YWx1ZS5sZW5ndGg7XHJcbiAgICBzdGF0ZUl0ZW0udmFsdWUgPSBlbC52YWx1ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hc2tJbnB1dChlbCwgZXYpIHtcclxuICBsZXQgaW5wdXQgPSBlbDtcclxuICBsZXQgbWFzayA9IGlucHV0LmRhdGFzZXQubWFzaztcclxuICBsZXQgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICBsZXQgbGl0ZXJhbFBhdHRlcm4gPSAvWzBcXCpdLztcclxuICBsZXQgbnVtYmVyUGF0dGVybiA9IC9bMC05XS9naTsvLys3ICgwMDApIDAwMC0wMC0wMC8vXFwrN1xcc1xcKDlcXGR7Mn1cXClcXHNcXGR7M30tXFxkezJ9LVxcZHsyfVxyXG4gIGxldCBuZXdWYWx1ZSA9IFwiXCI7XHJcbiAgaWYoL1xcRC8udGVzdChldi5kYXRhKSl7XHJcbiAgICBlbC52YWx1ZSA9IGVsLnZhbHVlLnJlcGxhY2UoZXYuZGF0YSwgJycpOyBcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgdHJ5IHtcclxuICAgIGxldCBtYXNrTGVuZ3RoID0gbWFzay5sZW5ndGg7XHJcbiAgICBsZXQgdmFsdWVJbmRleCA9IDA7XHJcbiAgICBsZXQgbWFza0luZGV4ID0gMDtcclxuIFxyXG4gICAgZm9yICg7IG1hc2tJbmRleCA8IG1hc2tMZW5ndGg7KSB7XHJcbiAgICAgIGlmIChtYXNrSW5kZXggPj0gdmFsdWUubGVuZ3RoKSBicmVhaztcclxuICAgICAgXHJcbiAgICAgIGlmIChtYXNrW21hc2tJbmRleF0gPT09IFwiMFwiICYmIHZhbHVlW3ZhbHVlSW5kZXhdLm1hdGNoKG51bWJlclBhdHRlcm4pID09PSBudWxsKSBicmVhaztcclxuXHJcbiAgICAgIC8vIEZvdW5kIGEgbGl0ZXJhbFxyXG4gICAgICB3aGlsZSAobWFza1ttYXNrSW5kZXhdLm1hdGNoKGxpdGVyYWxQYXR0ZXJuKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh2YWx1ZVt2YWx1ZUluZGV4XSA9PT0gbWFza1ttYXNrSW5kZXhdKSBicmVhaztcclxuICAgICAgICBuZXdWYWx1ZSArPSBtYXNrW21hc2tJbmRleCsrXTtcclxuICAgICAgfVxyXG4gICAgICBuZXdWYWx1ZSArPSB2YWx1ZVt2YWx1ZUluZGV4KytdO1xyXG4gICAgICBtYXNrSW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHN0YXRlIH07XHJcblxyXG4vL15bK1xcZF0qWyhdXFxkezN9WyldXFxkezN9LVxcZHsyfS1cXGR7Mn0vZyIsImltcG9ydCB7IHBvcHVwIH0gZnJvbSAnLi4vcG9wdXAnO1xyXG5pbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vY2hlY2staW4nO1xyXG5pbXBvcnQgeyBwcm90b2NvbCwgaG9zdCwgcG9ydCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZy9jb25maWcuanNvbic7XHJcblxyXG5sZXQgcG9wdXBNYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXBvcHVwLW1haWwnKTtcclxubGV0IHBvcHVwT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1wb3B1cC1tYWlsLW9wZW4nKTtcclxubGV0IG1haWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLW0tZm9ybScpXHJcblxyXG5wb3B1cChwb3B1cE1haWwsIHBvcHVwT3Blbiwge3Njcm9sbE9mZjogdHJ1ZSwgY2xvc2luZzogcmVzZXRGb3JtfSk7XHJcblxyXG5tYWlsRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzZW5kTWFpbCk7XHJcblxyXG5mdW5jdGlvbiBzZW5kTWFpbChldil7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zb2xlLmRpcihzdGF0ZSk7XHJcbiAgaWYoIU9iamVjdC52YWx1ZXMoc3RhdGUpLmV2ZXJ5KChpdGVtKSA9PiBpdGVtLnN0YXR1cykpeyByZXR1cm47IH1cclxuICAgXHJcbiAgY29uc29sZS5kaXIoJ9GD0YHQv9C10YUnKTtcclxuXHJcbiAgZmV0Y2goYCR7cHJvdG9jb2x9Oi8vJHtob3N0fToke3BvcnR9L21haWxgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IG5ldyBGb3JtRGF0YSh0aGlzKVxyXG4gIH0pXHJcbiAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBzdWNjZXNzKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gIH0pXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUuZGlyKGVycik7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmxldCBtc2cgPSBgPGRpdiBjbGFzcz1cIm1haWwtcG9wdXBfX2Zvcm0tc3VjY2Vzcy1tc2dcIj7Qn9C40YHRjNC80L4g0LTQvtGB0YLQsNCy0LvQtdC90L48L2Rpdj5gO1xyXG5cclxuZnVuY3Rpb24gc3VjY2VzcyhkYXRhKXtcclxuICBtYWlsRm9ybS5jbGFzc0xpc3QuYWRkKCdtYWlsLXBvcHVwX19mb3JtLS1zdWNjZXNzJyk7XHJcbiAgbGV0IHRpbWluZyA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShtYWlsRm9ybSkudHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgbWFpbEZvcm0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIG1zZykvL0pTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgfSwgdGltaW5nICogMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpe1xyXG4gIGxldCBlbFN1Y2Nlc3NNc2cgPSBtYWlsRm9ybS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgaWYoZWxTdWNjZXNzTXNnICYmIGVsU3VjY2Vzc01zZy5tYXRjaGVzKCcubWFpbC1wb3B1cF9fZm9ybS1zdWNjZXNzLW1zZycpKXtcclxuICAgIG1haWxGb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxTdWNjZXNzTXNnKTtcclxuICAgIG1haWxGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ21haWwtcG9wdXBfX2Zvcm0tLXN1Y2Nlc3MnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYWlsRm9ybS5sZW5ndGggLSAxOyBpKyspe1xyXG4gICAgICBtYWlsRm9ybVtpXS52YWx1ZSA9ICcnO1xyXG4gICAgICBpZihtYWlsRm9ybVtpXS51cGRhdGVDb3VudCl7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCfQodGH0ZHRgtGH0LjQuiDQodCx0YDQvtGI0LXQvScpO1xyXG4gICAgICAgIG1haWxGb3JtW2ldLnVwZGF0ZUNvdW50KCk7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZXJyKGRhdGEpe1xyXG4gIG1haWxGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ21haWwtcG9wdXBfX2Zvcm0tLWVycm9yJyk7XHJcbiAgbGV0IHRpbWluZyA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShtYWlsRm9ybSkudHJhbnNpdGlvbkR1cmF0aW9uKTtcclxuICBjb25zb2xlLmRpcih0aW1pbmcpO1xyXG4gIHNldFRpbWVvdXQoKCk9PntcclxuICAgIG1haWxGb3JtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBtc2cpLy9KU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gIH0sIHRpbWluZyAqIDEwMDApO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcclxuXHJcbnZhciBtdWx0aUl0ZW1TbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIEVsZW1lbnQucHJvdG90eXBlLmNfcXVlcnlTZWxlY3RvciA9IGZ1bmN0aW9uIChzZWxlY3RPclJlZ0V4cCwgZmxhZyA9IGZhbHNlKXtcclxuICAgIFxyXG4gICAgICBpZihzZWxlY3RPclJlZ0V4cC5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAmJiBmbGFnKXtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuY2hpbGRyZW5dLmZpbmQoKGl0ZW0pID0+IHNlbGVjdE9yUmVnRXhwLnRlc3QoaXRlbS5jbGFzc05hbWUpKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvcihzZWxlY3RPclJlZ0V4cCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgRWxlbWVudC5wcm90b3R5cGUuY19xdWVyeVNlbGVjdG9yQWxsID0gZnVuY3Rpb24gKHNlbGVjdE9yUmVnRXhwLCBmbGFnID0gZmFsc2Upe1xyXG4gIFxyXG4gICAgICBpZihzZWxlY3RPclJlZ0V4cC5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwLnByb3RvdHlwZS5jb25zdHJ1Y3RvciAmJiBmbGFnKXtcclxuICAgICAgICByZXR1cm4gWy4uLnRoaXMuY2hpbGRyZW5dLmZpbHRlcigoaXRlbSkgPT4gc2VsZWN0T3JSZWdFeHAudGVzdChpdGVtLmNsYXNzTmFtZSkpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdE9yUmVnRXhwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIF9pc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpIHtcclxuICAgICAgLy8g0LLQvtC30LzQvtC20L3QviDQv9C+0YLRgNC10LHRg9C10YLRgdGPINGD0YHRgtCw0L3QvtCy0LjRgtGMINGN0LvQtdC80LXQvdGC0YMgei1pbmRleDowXHJcbiAgICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgICB2V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxyXG4gICAgICAgIHZIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXHJcbiAgICAgICAgZWxlbUZyb21Qb2ludCA9IGZ1bmN0aW9uICh4LCB5KSB7IHJldHVybiBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpIH07XHJcbiAgICAgIGlmIChyZWN0LnJpZ2h0IDwgMCB8fCByZWN0LmJvdHRvbSA8IDBcclxuICAgICAgICB8fCByZWN0LmxlZnQgPiB2V2lkdGggfHwgcmVjdC50b3AgPiB2SGVpZ2h0KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBlbGVtZW50LmNvbnRhaW5zKGVsZW1Gcm9tUG9pbnQocmVjdC5sZWZ0LCByZWN0LnRvcCkpXHJcbiAgICAgICAgfHwgZWxlbWVudC5jb250YWlucyhlbGVtRnJvbVBvaW50KHJlY3QucmlnaHQsIHJlY3QudG9wKSlcclxuICAgICAgICB8fCBlbGVtZW50LmNvbnRhaW5zKGVsZW1Gcm9tUG9pbnQocmVjdC5yaWdodCwgcmVjdC5ib3R0b20pKVxyXG4gICAgICAgIHx8IGVsZW1lbnQuY29udGFpbnMoZWxlbUZyb21Qb2ludChyZWN0LmxlZnQsIHJlY3QuYm90dG9tKSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcpIHsgXHJcbiAgICAgIHZhclxyXG4gICAgICAgIF9tYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLFxyXG4gICAgICAgIF9zbGlkZXJXcmFwcGVyID0gX21haW5FbGVtZW50LmNfcXVlcnlTZWxlY3RvcigvLitpdGVtcy8sIHRydWUpLFxyXG4gICAgICAgIF9zbGlkZXJJdGVtcyA9IF9zbGlkZXJXcmFwcGVyLmNfcXVlcnlTZWxlY3RvckFsbCgvLitpdGVtLywgdHJ1ZSksXHJcbiAgICAgICAgX3NsaWRlckNvbnRyb2xzID0gX21haW5FbGVtZW50LmNfcXVlcnlTZWxlY3RvckFsbCgvLitjb250cm9sLywgdHJ1ZSksXHJcbiAgICAgICAgX3NsaWRlckNvbnRyb2xMZWZ0ID0gX21haW5FbGVtZW50LmNfcXVlcnlTZWxlY3RvcigvLitjb250cm9sX2xlZnQvLCB0cnVlKSxcclxuICAgICAgICBfc2xpZGVyQ29udHJvbFJpZ2h0ID0gX21haW5FbGVtZW50LmNfcXVlcnlTZWxlY3RvcigvLitjb250cm9sX3JpZ2h0LywgdHJ1ZSksXHJcblxyXG4gICAgICAgIF93cmFwcGVyV2lkdGggPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoX3NsaWRlcldyYXBwZXIpLndpZHRoKSxcclxuICAgICAgICBfaXRlbVdpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKF9zbGlkZXJJdGVtc1swXSkud2lkdGgpLFxyXG4gICAgICAgIF9odG1sID0gX21haW5FbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgXHJcbiAgICAgIGxldFxyXG4gICAgICAgIF9pbmRleEluZGljYXRvciA9IDAsXHJcbiAgICAgICAgX21heEluZGV4SW5kaWNhdG9yID0gX3NsaWRlckl0ZW1zLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgX2luZGljYXRvckl0ZW1zLFxyXG4gICAgICAgIFxyXG4gICAgICAgIF9wb3NpdGlvbkxlZnRJdGVtID0gMCxcclxuICAgICAgICBfdHJhbnNmb3JtID0gMCxcclxuICAgICAgICBfc3RlcCA9IF9pdGVtV2lkdGggLyBfd3JhcHBlcldpZHRoICogMTAwLFxyXG4gICAgICAgIF9pdGVtcyA9IFtdLFxyXG4gICAgICAgIF9pbnRlcnZhbCA9IDAsXHJcbiAgICAgICAgX3N0YXRlcyA9IFtcclxuICAgICAgICAgIHsgYWN0aXZlOiBmYWxzZSwgbWluV2lkdGg6IDAsIGNvdW50OiAxIH0sXHJcbiAgICAgICAgICB7IGFjdGl2ZTogZmFsc2UsIG1pbldpZHRoOiA1NzYsIGNvdW50OiAyIH0sXHJcbiAgICAgICAgICB7IGFjdGl2ZTogZmFsc2UsIG1pbldpZHRoOiA5OTIsIGNvdW50OiAzIH0sXHJcbiAgICAgICAgICB7IGFjdGl2ZTogZmFsc2UsIG1pbldpZHRoOiAxMjAwLCBjb3VudDogNCB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgX2NvbmZpZyA9IHtcclxuICAgICAgICAgIGlzQ3ljbGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXHJcbiAgICAgICAgICBpbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgIHBhdXNlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcclxuICAgICAgICBpZiAoa2V5IGluIF9jb25maWcpIHtcclxuICAgICAgICAgIF9jb25maWdba2V5XSA9IGNvbmZpZ1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgX3NsaWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgX2l0ZW1zLnB1c2goeyBpdGVtOiBpdGVtLCBwb3NpdGlvbjogaW5kZXgsIHRyYW5zZm9ybTogMCB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgX3NldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2luZGV4ID0gMDtcclxuICAgICAgICB2YXIgd2lkdGggPSBwYXJzZUZsb2F0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xyXG4gICAgICAgIF9zdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycikge1xyXG4gICAgICAgICAgX3N0YXRlc1tpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAod2lkdGggPj0gX3N0YXRlc1tpbmRleF0ubWluV2lkdGgpXHJcbiAgICAgICAgICAgIF9pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9zdGF0ZXNbX2luZGV4XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX2dldEFjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2luZGV4O1xyXG4gICAgICAgIF9zdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycikge1xyXG4gICAgICAgICAgaWYgKF9zdGF0ZXNbaW5kZXhdLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBfaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX2luZGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgZ2V0SXRlbU1pbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGluZGV4SXRlbSA9IDA7XHJcbiAgICAgICAgICBfaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucG9zaXRpb24gPCBfaXRlbXNbaW5kZXhJdGVtXS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIGluZGV4SXRlbSA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBpbmRleEl0ZW07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJdGVtTWF4OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXhJdGVtID0gMDtcclxuICAgICAgICAgIF9pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5wb3NpdGlvbiA+IF9pdGVtc1tpbmRleEl0ZW1dLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgaW5kZXhJdGVtID0gaW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGluZGV4SXRlbTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldE1pbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIF9pdGVtc1twb3NpdGlvbi5nZXRJdGVtTWluKCldLnBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TWF4OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gX2l0ZW1zW3Bvc2l0aW9uLmdldEl0ZW1NYXgoKV0ucG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX3RyYW5zZm9ybUl0ZW0gPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIG5leHRJdGVtLCBjdXJyZW50SW5kaWNhdG9yID0gX2luZGV4SW5kaWNhdG9yO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKF9pc0VsZW1lbnRWaXNpYmxlKF9tYWluRWxlbWVudCkpOyBcclxuICAgICAgICAvLyBpZiAoIV9pc0VsZW1lbnRWaXNpYmxlKF9tYWluRWxlbWVudCkpIHtcclxuICAgICAgICAvLyAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgX3Bvc2l0aW9uTGVmdEl0ZW0rKztcclxuICAgICAgICAgIGlmICgoX3Bvc2l0aW9uTGVmdEl0ZW0gKyBfd3JhcHBlcldpZHRoIC8gX2l0ZW1XaWR0aCAtIDEpID4gcG9zaXRpb24uZ2V0TWF4KCkpIHtcclxuICAgICAgICAgICAgbmV4dEl0ZW0gPSBwb3NpdGlvbi5nZXRJdGVtTWluKCk7XHJcbiAgICAgICAgICAgIF9pdGVtc1tuZXh0SXRlbV0ucG9zaXRpb24gPSBwb3NpdGlvbi5nZXRNYXgoKSArIDE7XHJcbiAgICAgICAgICAgIF9pdGVtc1tuZXh0SXRlbV0udHJhbnNmb3JtICs9IF9pdGVtcy5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgIF9pdGVtc1tuZXh0SXRlbV0uaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgX2l0ZW1zW25leHRJdGVtXS50cmFuc2Zvcm0gKyAnJSknO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgX3RyYW5zZm9ybSAtPSBfc3RlcDtcclxuICAgICAgICAgIF9pbmRleEluZGljYXRvciA9IF9pbmRleEluZGljYXRvciArIDE7XHJcbiAgICAgICAgICBpZiAoX2luZGV4SW5kaWNhdG9yID4gX21heEluZGV4SW5kaWNhdG9yKSB7XHJcbiAgICAgICAgICAgIF9pbmRleEluZGljYXRvciA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgX3Bvc2l0aW9uTGVmdEl0ZW0tLTtcclxuICAgICAgICAgIGlmIChfcG9zaXRpb25MZWZ0SXRlbSA8IHBvc2l0aW9uLmdldE1pbigpKSB7XHJcbiAgICAgICAgICAgIG5leHRJdGVtID0gcG9zaXRpb24uZ2V0SXRlbU1heCgpO1xyXG4gICAgICAgICAgICBfaXRlbXNbbmV4dEl0ZW1dLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0TWluKCkgLSAxO1xyXG4gICAgICAgICAgICBfaXRlbXNbbmV4dEl0ZW1dLnRyYW5zZm9ybSAtPSBfaXRlbXMubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICBfaXRlbXNbbmV4dEl0ZW1dLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIF9pdGVtc1tuZXh0SXRlbV0udHJhbnNmb3JtICsgJyUpJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF90cmFuc2Zvcm0gKz0gX3N0ZXA7XHJcbiAgICAgICAgICBfaW5kZXhJbmRpY2F0b3IgPSBfaW5kZXhJbmRpY2F0b3IgLSAxO1xyXG4gICAgICAgICAgaWYgKF9pbmRleEluZGljYXRvciA8IDApIHtcclxuICAgICAgICAgICAgX2luZGV4SW5kaWNhdG9yID0gX21heEluZGV4SW5kaWNhdG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBfc2xpZGVyV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgX3RyYW5zZm9ybSArICclKSc7XHJcbiAgICAgICAgX2luZGljYXRvckl0ZW1zW2N1cnJlbnRJbmRpY2F0b3JdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIF9pbmRpY2F0b3JJdGVtc1tfaW5kZXhJbmRpY2F0b3JdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX3NsaWRlVG8gPSBmdW5jdGlvbiAodG8pIHtcclxuICAgICAgICB2YXIgaSA9IDAsIGRpcmVjdGlvbiA9ICh0byA+IF9pbmRleEluZGljYXRvcikgPyAncmlnaHQnIDogJ2xlZnQnO1xyXG4gICAgICAgIHdoaWxlICh0byAhPT0gX2luZGV4SW5kaWNhdG9yICYmIGkgPD0gX21heEluZGV4SW5kaWNhdG9yKSB7XHJcbiAgICAgICAgICBfdHJhbnNmb3JtSXRlbShkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9jeWNsZSA9IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBpZiAoIV9jb25maWcuaXNDeWNsaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIF90cmFuc2Zvcm1JdGVtKGRpcmVjdGlvbik7XHJcbiAgICAgICAgfSwgX2NvbmZpZy5pbnRlcnZhbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfY29udHJvbENsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZXJfX2NvbnRyb2wnKSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sX3JpZ2h0JykgPyAncmlnaHQnIDogJ2xlZnQnO1xyXG4gICAgICAgICAgX3RyYW5zZm9ybUl0ZW0oZGlyZWN0aW9uKTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcclxuICAgICAgICAgIF9jeWNsZShfY29uZmlnLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtdG8nKSkge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgX3NsaWRlVG8ocGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJykpKTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcclxuICAgICAgICAgIF9jeWNsZShfY29uZmlnLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIF9oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwiaGlkZGVuXCIpIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgX2N5Y2xlKF9jb25maWcuZGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfcmVmcmVzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgX21haW5FbGVtZW50LmlubmVySFRNTCA9IF9odG1sO1xyXG5cclxuICAgICAgICBfc2xpZGVyV3JhcHBlciA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3IoLy4raXRlbXMvLCB0cnVlKTtcclxuICAgICAgICBfc2xpZGVySXRlbXMgPSBfc2xpZGVyV3JhcHBlci5jX3F1ZXJ5U2VsZWN0b3JBbGwoLy4raXRlbS8sIHRydWUpO1xyXG4gICAgICAgIF9zbGlkZXJDb250cm9scyA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3JBbGwoLy4rY29udHJvbC8sIHRydWUpO1xyXG4gICAgICAgIF9zbGlkZXJDb250cm9sTGVmdCA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3IoLy4rY29udHJvbF9sZWZ0LywgdHJ1ZSk7XHJcbiAgICAgICAgX3NsaWRlckNvbnRyb2xSaWdodCA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3IoLy4rY29udHJvbF9yaWdodC8sIHRydWUpO1xyXG4gICAgICAgIF93cmFwcGVyV2lkdGggPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoX3NsaWRlcldyYXBwZXIpLndpZHRoKTtcclxuICAgICAgICBfaXRlbVdpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKF9zbGlkZXJJdGVtc1swXSkud2lkdGgpO1xyXG4gICAgICAgIF9wb3NpdGlvbkxlZnRJdGVtID0gMDtcclxuICAgICAgICBfdHJhbnNmb3JtID0gMDtcclxuICAgICAgICBfaW5kZXhJbmRpY2F0b3IgPSAwO1xyXG4gICAgICAgIF9tYXhJbmRleEluZGljYXRvciA9IF9zbGlkZXJJdGVtcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIF9zdGVwID0gX2l0ZW1XaWR0aCAvIF93cmFwcGVyV2lkdGggKiAxMDA7XHJcbiAgICAgICAgX2l0ZW1zID0gW107XHJcbiAgICAgICAgX3NsaWRlckl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICBfaXRlbXMucHVzaCh7IGl0ZW06IGl0ZW0sIHBvc2l0aW9uOiBpbmRleCwgdHJhbnNmb3JtOiAwIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIF9hZGRJbmRpY2F0b3JzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfc2V0VXBMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX21haW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NvbnRyb2xDbGljayk7XHJcbiAgICAgICAgaWYgKF9jb25maWcucGF1c2UgJiYgX2NvbmZpZy5pc0N5Y2xpbmcpIHtcclxuICAgICAgICAgIF9tYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIF9tYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIF9jeWNsZShfY29uZmlnLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBfaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXJcclxuICAgICAgICAgICAgX2luZGV4ID0gMCxcclxuICAgICAgICAgICAgd2lkdGggPSBwYXJzZUZsb2F0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xyXG4gICAgICAgICAgX3N0YXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgYXJyKSB7XHJcbiAgICAgICAgICAgIGlmICh3aWR0aCA+PSBfc3RhdGVzW2luZGV4XS5taW5XaWR0aClcclxuICAgICAgICAgICAgICBfaW5kZXggPSBpbmRleDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKF9pbmRleCAhPT0gX2dldEFjdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIF9zZXRBY3RpdmUoKTtcclxuICAgICAgICAgICAgX3JlZnJlc2goKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICB2YXIgX2FkZEluZGljYXRvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNsaWRlckluZGljYXRvcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xyXG4gICAgICAgIHNsaWRlckluZGljYXRvcnMuY2xhc3NMaXN0LmFkZChzZWxlY3Rvci5zcGxpdCgnX18nKVswXS5zbGljZSgxKSsnX19pbmRpY2F0b3JzJyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3NsaWRlckl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgc2xpZGVySW5kaWNhdG9yc0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgc2xpZGVySW5kaWNhdG9yc0l0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzbGlkZXJJbmRpY2F0b3JzSXRlbS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNsaWRlLXRvXCIsIGkpO1xyXG4gICAgICBcclxuICAgICAgICAgIHNsaWRlckluZGljYXRvcnMuYXBwZW5kQ2hpbGQoc2xpZGVySW5kaWNhdG9yc0l0ZW0pO1xyXG4gICAgICAgICAgX3NsaWRlcldyYXBwZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KFwiYWZ0ZXJlbmRcIiwgIHNsaWRlckluZGljYXRvcnMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKHNsaWRlckluZGljYXRvcnMpO1xyXG5cclxuICAgICAgICAvLyBfbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoc2xpZGVySW5kaWNhdG9ycyk7XHJcblxyXG4gICAgICAgIF9pbmRpY2F0b3JJdGVtcyA9IF9tYWluRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yLnNwbGl0KCdfXycpWzBdKydfX2luZGljYXRvcnMgPiBsaScpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQuNC90LTQuNC60LDRgtC+0YDRi1xyXG4gICAgICBfYWRkSW5kaWNhdG9ycygpO1xyXG4gICAgICAvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRj1xyXG4gICAgICBfc2V0VXBMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgIGlmIChkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiKSB7XHJcbiAgICAgICAgX2N5Y2xlKF9jb25maWcuZGlyZWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBfc2V0QWN0aXZlKCk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJpZ2h0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBfdHJhbnNmb3JtSXRlbSgncmlnaHQnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxlZnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIF90cmFuc2Zvcm1JdGVtKCdsZWZ0Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBfY29uZmlnLmlzQ3ljbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3ljbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIF9jb25maWcuaXNDeWNsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcclxuICAgICAgICAgIF9jeWNsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9KCkpO1xyXG5cclxuICB2YXIgc2xpZGVyID0gbXVsdGlJdGVtU2xpZGVyKCcuc2xpZGVyJywge1xyXG4gICAgaXNDeWNsaW5nOiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDgwMDBcclxuICB9KTtcclxuICB2YXIgaW5zdFNsaWRlcjEgPSBtdWx0aUl0ZW1TbGlkZXIoJy5pbnN0X19zbGlkZXItLTEnLCB7XHJcbiAgICBpc0N5Y2xpbmc6IHRydWUsXHJcbiAgICBpbnRlcnZhbDogNTAwMFxyXG4gIH0pO1xyXG4gIHZhciBpbnN0U2xpZGVyMiA9IG11bHRpSXRlbVNsaWRlcignLmluc3RfX3NsaWRlci0tMicsIHtcclxuICAgIGlzQ3ljbGluZzogdHJ1ZSxcclxuICAgIGludGVydmFsOiA1MDAwXHJcbiAgfSk7XHJcbiAgdmFyIGluc3RTbGlkZXIzID0gbXVsdGlJdGVtU2xpZGVyKCcuaW5zdF9fc2xpZGVyLS0zJywge1xyXG4gICAgaXNDeWNsaW5nOiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDBcclxuICB9KTtcclxuICB2YXIgaW5zdFNsaWRlcjQgPSBtdWx0aUl0ZW1TbGlkZXIoJy5pbnN0X19zbGlkZXItLTQnLCB7XHJcbiAgICBpc0N5Y2xpbmc6IHRydWUsXHJcbiAgICBpbnRlcnZhbDogNTAwMFxyXG4gIH0pO1xyXG5cclxufVxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gIFwicHJvdG9jb2xcIjogXCJodHRwXCIsXHJcbiAgXCJob3N0XCI6IFwibG9jYWxob3N0XCIsXHJcbiAgXCJwb3J0XCI6IDgwODBcclxufSJdfQ==
