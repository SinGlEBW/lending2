(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var cards = document.querySelector('#js-adv-cards');

(function () {
  var state = {
    threshold: {
      bottom: 50,
      //на каком расстоянии от нижней кромки хотим увидеть
      top: 50,
      translateY: parseFloat(getComputedStyle(cards.children[0]).transform.split(',')[5]) //вернуть позицию сдвига

    },
    delay: parseFloat(getComputedStyle(cards.children[0]).transitionDuration),
    total: 0,
    visibilityReact: false
  };
  document.addEventListener('scroll', checkedCard);

  function checkedCard(ev) {
    _toConsumableArray(cards.children).forEach(function (card, inx) {
      state.visibilityReact = checkVisible(card, state.threshold);

      if (!card.classList.contains('card--active') && state.visibilityReact) {
        state.total += state.delay / (inx + 1);
        card.style.transitionDuration = state.total.toFixed(2) + 's';
        card.style.transitionDelay = (state.total / 3).toFixed(2) + 's';
        card.classList.add('card--active');
      }

      if (card.classList.contains('card--active') && !state.visibilityReact) {
        console.dir(22);
        state.total = 0;
        state.visibilityReact = false;
        card.classList.remove('card--active');
      }
    });
  }

  function checkVisible(el) {
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      bottom: 0,
      top: 0,
      translateY: 0
    };
    var top = el.getBoundingClientRect().top;
    var bottom = el.getBoundingClientRect().bottom;

    if (top - threshold.translateY + threshold.bottom - window.innerHeight <= 0 || bottom + threshold.bottom < 0) {
      return true;
    } else return false;
  }
})();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL2Rldi9hZHZhbnRhZ2VzLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvZXh0ZW5zaW9uRE9NLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvaGVhZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvaW5kZXguanMiLCJzcmMvYXNzZXRzL2pzL2Rldi9sYXp5TG9hZGluZy5qcyIsInNyYy9hc3NldHMvanMvZGV2L3BvcHVwLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvcHJlbG9hZGVyLmpzIiwic3JjL2Fzc2V0cy9qcy9kZXYvcHJpY2UtbGlzdC5qcyIsInNyYy9hc3NldHMvanMvZGV2L3NlY3Rpb24tbWFpbC9jaGVjay1pbi5qcyIsInNyYy9hc3NldHMvanMvZGV2L3NlY3Rpb24tbWFpbC9zZW5kRm9ybS5qcyIsInNyYy9hc3NldHMvanMvZGV2L3NsaWRlci5qcyIsInNyYy9jb25maWcvY29uZmlnLmpzb24iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGVBQXZCLENBQVo7O0FBQ0EsQ0FBQyxZQUFVO0FBQ1QsTUFBSSxLQUFLLEdBQUc7QUFDVixJQUFBLFNBQVMsRUFBRTtBQUNULE1BQUEsTUFBTSxFQUFFLEVBREM7QUFDRTtBQUNYLE1BQUEsR0FBRyxFQUFFLEVBRkk7QUFHVCxNQUFBLFVBQVUsRUFBRSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQU4sQ0FBZSxDQUFmLENBQUQsQ0FBaEIsQ0FBb0MsU0FBcEMsQ0FBOEMsS0FBOUMsQ0FBb0QsR0FBcEQsRUFBeUQsQ0FBekQsQ0FBRCxDQUhiLENBRzJFOztBQUgzRSxLQUREO0FBTVYsSUFBQSxLQUFLLEVBQUUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxRQUFOLENBQWUsQ0FBZixDQUFE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QXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBSUEsTUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBSUEsTUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBSUEsTUFBSSxXQUFXLEdBQUcsZUFBZSxDQUFDLGtCQUFELEVBQXFCO0FBQ3BELElBQUEsU0FBUyxFQUFFLElBRHlDO0FBRXBELElBQUEsUUFBUSxFQUFFO0FBRjBDLEdBQXJCLENBQWpDO0FBS0Q7OztBQ25WRDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWFkdi1jYXJkcycpO1xyXG4oZnVuY3Rpb24oKXtcclxuICBsZXQgc3RhdGUgPSB7XHJcbiAgICB0aHJlc2hvbGQ6IHtcclxuICAgICAgYm90dG9tOiA1MCwvL9C90LAg0LrQsNC60L7QvCDRgNCw0YHRgdGC0L7Rj9C90LjQuCDQvtGCINC90LjQttC90LXQuSDQutGA0L7QvNC60Lgg0YXQvtGC0LjQvCDRg9Cy0LjQtNC10YLRjFxyXG4gICAgICB0b3A6IDUwLFxyXG4gICAgICB0cmFuc2xhdGVZOiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoY2FyZHMuY2hpbGRyZW5bMF0pLnRyYW5zZm9ybS5zcGxpdCgnLCcpWzVdKSwvL9Cy0LXRgNC90YPRgtGMINC/0L7Qt9C40YbQuNGOINGB0LTQstC40LPQsFxyXG4gICAgfSxcclxuICAgIGRlbGF5OiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoY2FyZHMuY2hpbGRyZW5bMF0pLnRyYW5zaXRpb25EdXJhdGlvbiksXHJcbiAgICB0b3RhbDogMCxcclxuICAgIHZpc2liaWxpdHlSZWFjdDogZmFsc2VcclxuICB9O1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrZWRDYXJkKTtcclxuICBcclxuICBmdW5jdGlvbiBjaGVja2VkQ2FyZChldil7XHJcbiAgICBbLi4uY2FyZHMuY2hpbGRyZW5dLmZvckVhY2goKGNhcmQsIGlueCkgPT57XHJcbiAgICBcclxuICAgICAgc3RhdGUudmlzaWJpbGl0eVJlYWN0ID0gY2hlY2tWaXNpYmxlKGNhcmQsIHN0YXRlLnRocmVzaG9sZCk7XHJcbiAgXHJcbiAgICAgIGlmKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC0tYWN0aXZlJykgJiYgc3RhdGUudmlzaWJpbGl0eVJlYWN0KXtcclxuICAgICAgICBzdGF0ZS50b3RhbCArPSBzdGF0ZS5kZWxheSAvIChpbnggKyAxKTtcclxuICAgICAgICBcclxuICAgICAgICBjYXJkLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IHN0YXRlLnRvdGFsLnRvRml4ZWQoMikgKyAncyc7XHJcbiAgICAgICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAoc3RhdGUudG90YWwgLyAzKS50b0ZpeGVkKDIpICsgJ3MnO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC0tYWN0aXZlJylcclxuICAgICAgfSAgXHJcbiAgICAgIGlmKGNhcmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLS1hY3RpdmUnKSAmJiAhc3RhdGUudmlzaWJpbGl0eVJlYWN0KXtcclxuICAgICAgICBjb25zb2xlLmRpcigyMik7XHJcbiAgICAgICAgc3RhdGUudG90YWwgPSAwO1xyXG4gICAgICAgIHN0YXRlLnZpc2liaWxpdHlSZWFjdCA9IGZhbHNlO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZC0tYWN0aXZlJyk7IFxyXG4gICAgICB9ICAgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tWaXNpYmxlKGVsLCB0aHJlc2hvbGQgPSB7Ym90dG9tOiAwLCB0b3A6IDAsIHRyYW5zbGF0ZVk6IDB9KXtcclxuICAgIGxldCB0b3AgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBsZXQgYm90dG9tID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG4gICBcclxuICAgIGlmKCh0b3AgLSB0aHJlc2hvbGQudHJhbnNsYXRlWSArIHRocmVzaG9sZC5ib3R0b20pIC0gd2luZG93LmlubmVySGVpZ2h0IDw9IDAgXHJcbiAgICAgICAgfHwgYm90dG9tICsgdGhyZXNob2xkLmJvdHRvbSA8IDAgKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9ZWxzZSByZXR1cm4gZmFsc2U7XHJcbiAgICAgXHJcbiAgfVxyXG5cclxufSkoKVxyXG4iLCJFbGVtZW50LnByb3RvdHlwZS5jcmVhdGVDb3VudCA9IGZ1bmN0aW9uIChuYW1lQ2xhc3MgPSAnJywgIG1heENvdW50ID0gNTAwLCBvcHRpb24gPSB7IHRhZzogJycsIGVsZW1lbnQ6ICcnIH0pe1xyXG5cclxuICBsZXQgdGFnID0gKG9wdGlvbi50YWcpID8gb3B0aW9uLnRhZyA6ICdzcGFuJztcclxuICB0aGlzLmNvdW50Q2xhc3NOYW1lID0gbmFtZUNsYXNzO1xyXG4gIHRoaXMubWF4Q291bnQgPSBtYXhDb3VudDtcclxuXHJcbiAgdGhpcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGUudXBkYXRlQ291bnQgPSB1cGRhdGVDb3VudDtcclxuXHJcbiAgbGV0IGVsID0gYDwke3RhZ30gY2xhc3M9JHtuYW1lQ2xhc3N9ID4ke3RoaXMudmFsdWUubGVuZ3RofS8ke21heENvdW50fTwvJHt0YWd9PmA7XHJcbiAgaWYodHlwZW9mIG9wdGlvbi5lbGVtZW50ID09PSAnb2JqZWN0Jyl7XHJcbiAgICBvcHRpb24uZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgZWwpO1xyXG4gICAgdGhpcy5jb3VudFRhcmdldCA9IG9wdGlvbi5lbGVtZW50XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRoaXMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIGVsKTtcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ291bnQoKSB7XHJcbiAgbGV0IGNvdW50VGFyZ2V0ID0gKHRoaXMuY291bnRUYXJnZXQpID8gdGhpcy5jb3VudFRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIGNvdW50VGFyZ2V0LnRleHRDb250ZW50ID0gYCR7dGhpcy52YWx1ZS5sZW5ndGh9LyR7dGhpcy5tYXhDb3VudH1gO1xyXG4gIFxyXG59XHJcbiIsImxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblxyXG5cclxuaWYoaGVhZGVyLmNsaWVudFdpZHRoIDwgNzY4KXtcclxuXHJcbiAgbGV0IGJ0bk1lbnUgPSBcclxuICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWJ1cmdlclwiPlxyXG4gICAgICA8aSBjbGFzcz1cImJ0bi1idXJnZXJfX2l0ZW1cIj48L2k+XHJcbiAgICAgIDxpIGNsYXNzPVwiYnRuLWJ1cmdlcl9faXRlbVwiPjwvaT5cclxuICAgICAgPGkgY2xhc3M9XCJidG4tYnVyZ2VyX19pdGVtXCI+PC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgYDtcclxuICBoZWFkZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGJ0bk1lbnUpO1xyXG4gIGxldCBoZWFkZXJCdG5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1idXJnZXInKTtcclxuICBoZWFkZXJCdG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbiBcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVNZW51KGV2KXtcclxuICB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19pdGVtcy0tYWN0aXZlJyk7XHJcbiAgdGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci0tYWN0aXZlJyk7XHJcbiAgWy4uLnRoaXMuY2hpbGRyZW5dLmZvckVhY2goYnVyZ2VySXRlbSA9PiB7XHJcbiAgICBidXJnZXJJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2J0bi1idXJnZXJfX2l0ZW0tLWFjdGl2ZScpXHJcbiAgfSk7XHJcbiAgXHJcbn0iLCJpbXBvcnQgcnVuU2xpZGVycyBmcm9tICcuL3NsaWRlcic7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuICBydW5TbGlkZXJzKCk7XHJcbn1cclxuXHJcbiIsImxldCBpbWFnZUlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnN0X19zbGlkZXItaXRlbScpO1xyXG5sZXQgaW1nT3B0aW9uID0geyBcclxuICByb290OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdF9fc2xpZGVycycpLC8qINC00L7Qu9C20LXQvSDQsdGL0YLRjCDQv9GA0LXQtNC60L7QvC4g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L7QutC90L4g0LHRgNCw0YPQt9C10YDQsCAqL1xyXG4gIHJvb3RNYXJnaW46ICcwcHggNTAwcHggMHB4IDBweCcsIC8q0J7RgtGB0YLRg9C/0Ysg0LLQvtC60YDRg9CzIHJvb3QuICAqL1xyXG4gIHRocmVzaG9sZDogLjA1Lyog0YfQuNGB0LvQviDQvtGCIDAtMS4g0Y3RgtC+INC90LDRgdC60L7Qu9GM0LrQviDQv9GA0L7RhtC10L3RgtC+0LIg0LTQvtC70LbQtdC9INCx0YvRgtGMINCy0LjQtNC10L4g0L7QsdGK0LXQutGCINC/0YDQuCDQutC+0YLQvtGA0L7QvFxyXG4gIC8vICAgICAgICAgICAgICAgICAg0LTQvtC70LbQvdCwINC+0YLRgNCw0LHQvtGC0LDRgtGMIGNhbGxiYWNrINGE0YPQvdC60YbQuNGPLiDQnNC+0LbQvdC+INC00LDQtiDQvNCw0YHRgdC40LIg0L/QtdGA0LXQtNCw0YLRjC4gWzAsIDAuMjUsIDAuNSwgMC43NSwgMV0gKi9cclxuICAgICAgICAgICAgICAgICAgICBcclxufTtcclxuXHJcblxyXG5jb25zdCBpbWdPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgaW1nT2JzZXJ2ZXIpID0+IHtcclxuICBlbnRyaWVzLmZvckVhY2goKHsgdGFyZ2V0LCBpc0ludGVyc2VjdGluZyB9KSA9PiB7XHJcbiAgICBpZighaXNJbnRlcnNlY3Rpbmcpey8q0Y3Qu9C10LzQtdC90YLRiyDQvdC1INC/0LXRgNC10YHQtdC60LDRjtGCINCz0YDQsNC90LjRhtGDLiBmYWxzZSAqL1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0YXJnZXQuc3JjID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xyXG4gICAgaW1nT2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldClcclxuICB9KVxyXG59LCBpbWdPcHRpb24pO1xyXG5cclxuXHJcbmltYWdlSXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgaW1nT2JzZXJ2ZXIub2JzZXJ2ZShpdGVtKTtcclxufSk7IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1cChwb3B1cEVsLCBidG5PcGVuLCBvcHRpb24gPSB7bm9CbG9ja0VsOiAnJywgc2Nyb2xsT2ZmOiBmYWxzZSwgb3BlbmVkOiAnJywgY2xvc2luZzogJyd9KXtcclxuXHJcbiAgbGV0IGNsb3NlID0gcG9wdXBFbC5xdWVyeVNlbGVjdG9yKGAjJHtwb3B1cEVsLmlkfS1jbG9zZWApO1xyXG4gIGxldCBzYXZlU2Nyb2xsVG9UaGVPcGVuO1xyXG4gIFxyXG4gIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJpY2UpO1xyXG4gIHBvcHVwRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByaWNlKTtcclxuXHJcbiAgZnVuY3Rpb24gb3BlblByaWNlKGV2KSB7XHJcbiAgICBwb3B1cEVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXHJcbiAgXHJcbiAgICBzYXZlU2Nyb2xsVG9UaGVPcGVuID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBsb2NrU2Nyb2xsKCk7XHJcbiAgICBpZih0eXBlb2Ygb3B0aW9uLm9wZW5lZCA9PSAnZnVuY3Rpb24nKXtcclxuICAgICAgb3B0aW9uLm9wZW5lZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVByaWNlKGV2KSB7XHJcblxyXG4gICAgaWYoZXYudGFyZ2V0ID09IHBvcHVwRWwgfHwgZXYudGFyZ2V0ID09IGNsb3NlKXtcclxuICAgXHJcbiAgICAgIHBvcHVwRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuICAgICAgdW5sb2NrU2Nyb2xsKClcclxuICAgICAgaWYodHlwZW9mIG9wdGlvbi5jbG9zaW5nID09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIG9wdGlvbi5jbG9zaW5nKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi8qIyMjIyMjIy0tLS0tLS0tLTx7IENvbnRyb2wgU2Nyb2xsfT4tLS0tLS0tLS0jIyMjIyMjIyMjKi9cclxuICBmdW5jdGlvbiBsb2NrU2Nyb2xsKCkge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZXZXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2U2Nyb2xsKSBcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVubG9ja1Njcm9sbCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2V2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldlNjcm9sbClcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV2V2hlZWwoZXYpIHtcclxuICAgIGlmKHR5cGVvZiBvcHRpb24ubm9CbG9ja0VsID09ICdvYmplY3QnKXtcclxuICAgICAgaWYoIW9wdGlvbi5ub0Jsb2NrRWwuY29udGFpbnMoZXYudGFyZ2V0KSl7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTsgcmV0dXJuOyBcclxuICAgICAgfVxyXG4gICAgfWVsc2UgaWYob3B0aW9uLnNjcm9sbE9mZil7XHJcbiAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7IHJldHVybjsgXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmRpcihcImV2V2hlZWxcIik7XHJcbiAgICB0aGlzLnNjcm9sbFRvKDAsIHNhdmVTY3JvbGxUb1RoZU9wZW4pO1xyXG4gIH0gXHJcblxyXG4gIGZ1bmN0aW9uIGV2U2Nyb2xsKGV2KSB7XHJcbiAgICBjb25zb2xlLmRpcihcImV2U2Nyb2xsXCIpO1xyXG4gICAgdGhpcy5zY3JvbGxUbygwLCBzYXZlU2Nyb2xsVG9UaGVPcGVuKVxyXG4gIH0gXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBwb3B1cChwb3B1cEVsLCBidG5PcGVuLCBvcHRpb24gPSB7bm9CbG9ja0VsOiBudWxsLCBvcGVuZWQ6IG51bGx9KXtcclxuXHJcbi8vICAgbGV0IGNsb3NlID0gcG9wdXBFbC5xdWVyeVNlbGVjdG9yKGAuJHtwb3B1cEVsLmNsYXNzTmFtZX1fX2Nsb3NlYCk7XHJcbi8vICAgbGV0IHNhdmVTY3JvbGxUb1RoZU9wZW47XHJcblxyXG4vLyAgIGJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJpY2UpO1xyXG4vLyAgIHBvcHVwRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByaWNlKTtcclxuXHJcbi8vICAgZnVuY3Rpb24gb3BlblByaWNlKGV2KSB7XHJcbi8vICAgICBwb3B1cEVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXHJcbi8vICAgICBzYXZlU2Nyb2xsVG9UaGVPcGVuID0gd2luZG93LnNjcm9sbFk7XHJcbi8vICAgICBsb2NrU2Nyb2xsKCk7XHJcbi8vICAgICBpZih0eXBlb2Ygb3B0aW9uLm9wZW5lZCA9PSAnZnVuY3Rpb24nKXtcclxuLy8gICAgICAgb3B0aW9uLm9wZW5lZCgpXHJcbi8vICAgICB9XHJcbiAgIFxyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gY2xvc2VQcmljZShldikge1xyXG4vLyAgICAgaWYoZXYudGFyZ2V0ID09IHBvcHVwIHx8IGV2LnRhcmdldCA9PSBjbG9zZSl7XHJcbi8vICAgICAgIHBvcHVwRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyBcclxuLy8gICAgICAgdW5sb2NrU2Nyb2xsKClcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG5cclxuLy8gICBmdW5jdGlvbiBsb2NrU2Nyb2xsKCkge1xyXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZXZXaGVlbCwgeyBwYXNzaXZlOiBmYWxzZSB9KVxyXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGV2U2Nyb2xsKSBcclxuLy8gICB9XHJcblxyXG4vLyAgIGZ1bmN0aW9uIHVubG9ja1Njcm9sbCgpIHtcclxuLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGV2V2hlZWwsIHsgcGFzc2l2ZTogZmFsc2UgfSlcclxuLy8gICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBldlNjcm9sbClcclxuLy8gICB9XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGV2V2hlZWwoZXYpIHtcclxuLy8gICAgIGlmKHR5cGVvZiBvcHRpb24ubm9CbG9ja0VsID09ICdvYmplY3QnKXtcclxuLy8gICAgICAgaWYoIW9wdGlvbi5ub0Jsb2NrRWwuY29udGFpbnMoZXYudGFyZ2V0KSl7XHJcbi8vICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTsgcmV0dXJuOyBcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4gIFxyXG4vLyAgICAgdGhpcy5zY3JvbGxUbygwLCBzYXZlU2Nyb2xsVG9UaGVPcGVuKTtcclxuLy8gICB9IFxyXG5cclxuLy8gICBmdW5jdGlvbiBldlNjcm9sbChldikge1xyXG4vLyAgICAgdGhpcy5zY3JvbGxUbygwLCBzYXZlU2Nyb2xsVG9UaGVPcGVuKVxyXG4vLyAgIH0gXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qINCa0L3QvtC/0LrQsCDQsdGD0LTQtdGCINCy0YvQt9GL0LLQsNGC0Ywg0LTQsNC90L3Rg9GOINGE0YPQvdC60YbQuNGOICovIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRlclRhYmxlKCl7XHJcbiAgcmV0dXJuIGA8ZGl2IGlkPVwicHJlbG9hZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2FkZXJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IHByZWxvYWRlclRhYmxlIH0gZnJvbSAnLi9wcmVsb2FkZXInO1xyXG5pbXBvcnQgeyBwb3B1cCB9IGZyb20gJy4vcG9wdXAnO1xyXG5pbXBvcnQgeyBwcm90b2NvbCwgaG9zdCwgcG9ydCB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcuanNvbic7XHJcblxyXG5sZXQgcHJpY2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtcG9wdXAtcGwtb3BlbicpO1xyXG5sZXQgcHJpY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXBvcHVwLXBsJyk7XHJcbmxldCBwcmljZVRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLXAtdGFibGUnKTtcclxubGV0IHRhYmxlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1wLXRhYmxlQm9keScpO1xyXG5cclxucG9wdXAocHJpY2VMaXN0LCBwcmljZUJ0biwge25vQmxvY2tFbDogcHJpY2VUYWJsZSwgb3BlbmVkOiBhamF4UmVxdWVzdFRhYmxlfSlcclxuXHJcblxyXG4vKiMjIyMjIyMjLS0tLS0tLS0tPHsgTWFpbiBGdW5jdGlvbiB9Pi0tLS0tLS0tLSMjIyMjIyMjIyovXHJcblxyXG5mdW5jdGlvbiBhamF4UmVxdWVzdFRhYmxlKCl7XHJcbiAgaWYoIXRhYmxlQm9keS5jaGlsZHJlbi5sZW5ndGgpe1xyXG4gICAgdGFibGVCb2R5LmlubmVySFRNTCA9IHByZWxvYWRlclRhYmxlKCk7XHJcbiAgICBmZXRjaChgJHtwcm90b2NvbH06Ly8ke2hvc3R9OiR7cG9ydH0vdGFibGVgKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgIHRhYmxlQm9keS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgcmVuZGVyVGFibGUoZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT57XHJcbiAgICAgIGhhbmdUaGVGdW5jdGlvbmFsaXR5KCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgdGFibGVCb2R5LnRleHRDb250ZW50ID0gZXJyO1xyXG4gICAgfSlcclxuICB9ZWxzZSBjb25zb2xlLmRpcign0JTQsNC90L3Ri9C1INGD0LbQtSDQt9Cw0LPRgNGD0LbQtdC90YsnKTsgXHJcbn1cclxuXHJcbi8qIyMjIyMjIy0tLS0tLTx7IHJlbmRlclRhYmxlIGFuZCBoYW5nVGhlRnVuY3Rpb25hbGl0eSB9Pi0tLS0tLS0tIyMjIyMjIyovXHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYWJsZShkYXRhKXtcclxuICBmb3IgKGNvbnN0IGFyclRhYmxlcyBvZiBkYXRhKSB7XHJcblxyXG4gICAgaWYoYXJyVGFibGVzLmlkID09PSAxKSB7ICBcclxuICAgICAgdGFibGVCb2R5LmlubmVySFRNTCArPSAgXHJcbiAgICAgIGA8dHIgY2xhc3M9XCJwcmljZS1saXN0X19yb3ctaGVhZC10aXRsZVwiID5cclxuICAgICAgICA8dGggY2xhc3M9XCJwcmljZS1saXN0X19jZWxsLWhlYWQtdGl0bGVcIiBjb2xzcGFuPVwiNFwiPiR7YXJyVGFibGVzLnNlcnZpY2VzfTwvdGg+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIGNsYXNzPVwicHJpY2UtbGlzdF9fcm93LWluZm9cIiA+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsLWluZm9cIj7QndCw0LjQvNC10L3QvtCy0LDQvdC40LU8L3RkPlxyXG4gICAgICAgICAgPHRkIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbC1pbmZvXCI+0JXQtC7QuNC30LwuPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGwtaW5mb1wiPtCm0LXQvdCwKNGA0YPQsS4pPC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGwtaW5mb1wiPtCa0L7Quy3QstC+PC90ZD5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGwtaW5mb1wiPtCh0YPQvNC80LA8L3RkPlxyXG4gICAgICAgIDwvdHI+YDtcclxuICAgIH1lbHNlIHtcclxuICAgICAgdGFibGVCb2R5LmlubmVySFRNTCArPSAgXHJcbiAgICBgPHRyIGNsYXNzPVwicHJpY2UtbGlzdF9fcm93XCI+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbFwiPiR7YXJyVGFibGVzLnNlcnZpY2VzfTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwicHJpY2UtbGlzdF9fY2VsbFwiPiR7YXJyVGFibGVzLnVuaXR9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsIGpzLXAtcnViXCI+JHthcnJUYWJsZXMucHJpY2V9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJwcmljZS1saXN0X19jZWxsXCI+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJwcmljZS1saXN0X19pbnB1dCBqcy1wLWlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZGF0YUNlbGxcIj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBjbGFzcz1cInByaWNlLWxpc3RfX2NlbGwganMtcC1zdW1cIj4wPC90ZD5cclxuICAgICAgPC90cj5gO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZ1RoZUZ1bmN0aW9uYWxpdHkoKXtcclxuICBsZXQgcHJpY2VSdWJsZXNDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXAtcnViJyk7XHJcbiAgbGV0IHByaWNlSW5wdXRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wLWlucHV0Jyk7XHJcbiAgbGV0IHByaWNlU3VtQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1wLXN1bScpO1xyXG4gIGxldCBwcmljZVJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1wLXJlc3VsdCcpO1xyXG4gIGxldCBhcnJOdW1iZXJzID0gW107XHJcbiAgXHJcbiAgcHJpY2VJbnB1dENlbGxzLmZvckVhY2goKGl0ZW0sIGlueCkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoYW5nZUlucHV0LmJpbmQoaXRlbSwgaW54KSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2hhbmdlSW5wdXQoaW54LCBldikge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTsvL2Jsb2NraW5nIGNoYXJhY3RlciBpbnB1dFxyXG4gICAgLy/Qt9Cw0L/QtdGA0LvQuCBpbngg0LIg0LfQsNC80YvQutCw0L3QuNC4INC/0YDQuNCy0Y/Qt9Cw0LIgaW5wdXQg0Log0LjQvdC00LXQutGB0LDQvCDQvNCw0YHRgdC40LLQsC5cclxuICAgIHByaWNlU3VtQ2VsbFtpbnhdLnRleHRDb250ZW50ID0gYXJyTnVtYmVyc1tpbnhdID0gZ2V0U3VtSW5wdXRzKHRoaXMudmFsdWUsIGlueCk7XHJcbiAgICBwcmljZVJlc3VsdC50ZXh0Q29udGVudCA9IGdldFJlc3VsdChhcnJOdW1iZXJzKTtcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0U3VtSW5wdXRzKHZhbCwgaW54KXtcclxuICAgIHJldHVybiArcHJpY2VSdWJsZXNDZWxsW2lueF0udGV4dENvbnRlbnQgKiArdmFsXHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldFJlc3VsdChhcnIpe1xyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoKHByZXYsIG51bSkgPT4gKHByZXYgKz0gK251bSksIDApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsImxldCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtbS1uYW1lJyk7XHJcbmxldCBpbnB1dFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLW0tcGhvbmUnKTtcclxubGV0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLW0tdGV4dGFyZWEnKTtcclxuXHJcbmxldCBzdGF0ZSA9IHtcclxuICBbaW5wdXROYW1lLm5hbWVdOiB7IG1pbjogMiwgbWF4OiAxNSwgc3RhdHVzOiBmYWxzZSwgbGVuZ3RoOiAwLCB2YWx1ZTogJycgfSxcclxuICBbaW5wdXRQaG9uZS5uYW1lXTogeyBtaW46IDE4LCBtYXg6IDE4LCBzdGF0dXM6IGZhbHNlLCBsZW5ndGg6IDAsIHZhbHVlOiAnJyB9LFxyXG4gIFt0ZXh0QXJlYS5uYW1lXTogeyBtaW46IDEwLCBtYXg6IDQwMCwgc3RhdHVzOiBmYWxzZSwgbGVuZ3RoOiAwLCB2YWx1ZTogJycgfSxcclxufTtcclxuXHJcbltpbnB1dE5hbWUsIGlucHV0UGhvbmUsIHRleHRBcmVhXS5mb3JFYWNoKChpdGVtKSA9PiB7IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGVja0luQWxsKSB9KTtcclxuXHJcbnRleHRBcmVhLmNyZWF0ZUNvdW50KCdtYWlsLXBvcHVwX19mb3JtLWNvdW50Jywgc3RhdGVbdGV4dEFyZWEubmFtZV0ubWF4LCB7IGVsZW1lbnQ6IHRleHRBcmVhLnBhcmVudEVsZW1lbnQgfSlcclxuXHJcbmZ1bmN0aW9uIGNoZWNrSW5BbGwoZXYpe1xyXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiBcclxuICBpZih0aGlzID09PSBpbnB1dE5hbWUgfHwgdGhpcyA9PT0gdGV4dEFyZWEpe1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUucmVwbGFjZSgvWyU8PiZdfChzY3JpcHQpL2csICcnKTtcclxuXHJcbiAgICBpZih0aGlzID09PSB0ZXh0QXJlYSkgdGhpcy51cGRhdGVDb3VudCgpO1xyXG4gIH1cclxuXHJcbiAgaWYodGhpcyA9PSBpbnB1dFBob25lKSBtYXNrSW5wdXQodGhpcywgZXYpO1xyXG4gIG1heE1pbih0aGlzKTtcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gbWF4TWluKGVsKXtcclxuXHJcbiAgbGV0IHN0YXRlSXRlbSA9IHN0YXRlW2VsLm5hbWVdO1xyXG5cclxuICBpZihlbC52YWx1ZS5sZW5ndGggPj0gc3RhdGVJdGVtLm1pbiAmJiBzdGF0ZUl0ZW0ubGVuZ3RoIDw9IHN0YXRlSXRlbS5tYXgpe1xyXG4gICAgc3RhdGVJdGVtLnN0YXR1cyA9IHRydWU7XHJcbiAgICBlbC5zdHlsZS5hbmltYXRpb25OYW1lID0gJ2dsb3dJbnB1dFN1Y2Nlc3MnO1xyXG4gICAgXHJcbiAgfWVsc2V7XHJcbiAgICBzdGF0ZUl0ZW0uc3RhdHVzID0gZmFsc2U7XHJcbiAgICBlbC5zdHlsZS5hbmltYXRpb25OYW1lID0gJ2dsb3dJbnB1dEVycm9yJztcclxuICB9XHJcbiAgaWYoZWwudmFsdWUubGVuZ3RoID4gc3RhdGVJdGVtLm1heCl7XHJcbiAgICBlbC52YWx1ZSA9IGVsLnZhbHVlLnNsaWNlKDAsIHN0YXRlSXRlbS5tYXgpO1xyXG4gIH1lbHNle1xyXG4gICAgc3RhdGVJdGVtLmxlbmd0aCA9IGVsLnZhbHVlLmxlbmd0aDtcclxuICAgIHN0YXRlSXRlbS52YWx1ZSA9IGVsLnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWFza0lucHV0KGVsLCBldikge1xyXG4gIGxldCBpbnB1dCA9IGVsO1xyXG4gIGxldCBtYXNrID0gaW5wdXQuZGF0YXNldC5tYXNrO1xyXG4gIGxldCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gIGxldCBsaXRlcmFsUGF0dGVybiA9IC9bMFxcKl0vO1xyXG4gIGxldCBudW1iZXJQYXR0ZXJuID0gL1swLTldL2dpOy8vKzcgKDAwMCkgMDAwLTAwLTAwLy9cXCs3XFxzXFwoOVxcZHsyfVxcKVxcc1xcZHszfS1cXGR7Mn0tXFxkezJ9XHJcbiAgbGV0IG5ld1ZhbHVlID0gXCJcIjtcclxuICBpZigvXFxELy50ZXN0KGV2LmRhdGEpKXtcclxuICAgIFxyXG4gICAgZWwudmFsdWUgPSBlbC52YWx1ZS5yZXBsYWNlKGV2LmRhdGEsICcnKTsgXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIHRyeSB7XHJcbiAgICBsZXQgbWFza0xlbmd0aCA9IG1hc2subGVuZ3RoO1xyXG4gICAgbGV0IHZhbHVlSW5kZXggPSAwO1xyXG4gICAgbGV0IG1hc2tJbmRleCA9IDA7XHJcbiBcclxuICAgIGZvciAoOyBtYXNrSW5kZXggPCBtYXNrTGVuZ3RoOykge1xyXG4gICAgICBpZiAobWFza0luZGV4ID49IHZhbHVlLmxlbmd0aCkgYnJlYWs7XHJcbiAgICAgIFxyXG4gICAgICBpZiAobWFza1ttYXNrSW5kZXhdID09PSBcIjBcIiAmJiB2YWx1ZVt2YWx1ZUluZGV4XS5tYXRjaChudW1iZXJQYXR0ZXJuKSA9PT0gbnVsbCkgYnJlYWs7XHJcblxyXG4gICAgICAvLyBGb3VuZCBhIGxpdGVyYWxcclxuICAgICAgd2hpbGUgKG1hc2tbbWFza0luZGV4XS5tYXRjaChsaXRlcmFsUGF0dGVybikgPT09IG51bGwpIHtcclxuICAgICAgICBpZiAodmFsdWVbdmFsdWVJbmRleF0gPT09IG1hc2tbbWFza0luZGV4XSkgYnJlYWs7XHJcbiAgICAgICAgbmV3VmFsdWUgKz0gbWFza1ttYXNrSW5kZXgrK107XHJcbiAgICAgIH1cclxuICAgICAgbmV3VmFsdWUgKz0gdmFsdWVbdmFsdWVJbmRleCsrXTtcclxuICAgICAgbWFza0luZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBuZXdWYWx1ZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBzdGF0ZSB9O1xyXG5cclxuLy9eWytcXGRdKlsoXVxcZHszfVspXVxcZHszfS1cXGR7Mn0tXFxkezJ9L2ciLCJpbXBvcnQgeyBwb3B1cCB9IGZyb20gJy4uL3BvcHVwJztcclxuaW1wb3J0IHsgc3RhdGUgfSBmcm9tICcuL2NoZWNrLWluJztcclxuaW1wb3J0IHsgcHJvdG9jb2wsIGhvc3QsIHBvcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25maWcvY29uZmlnLmpzb24nO1xyXG5cclxubGV0IHBvcHVwTWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1wb3B1cC1tYWlsJyk7XHJcbmxldCBwb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanMtcG9wdXAtbWFpbC1vcGVuJyk7XHJcbmxldCBtYWlsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1tLWZvcm0nKVxyXG5cclxucG9wdXAocG9wdXBNYWlsLCBwb3B1cE9wZW4sIHtzY3JvbGxPZmY6IHRydWUsIGNsb3Npbmc6IHJlc2V0Rm9ybX0pO1xyXG5cclxubWFpbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2VuZE1haWwpO1xyXG5cclxuZnVuY3Rpb24gc2VuZE1haWwoZXYpe1xyXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc29sZS5kaXIoc3RhdGUpO1xyXG4gIGlmKCFPYmplY3QudmFsdWVzKHN0YXRlKS5ldmVyeSgoaXRlbSkgPT4gaXRlbS5zdGF0dXMpKXsgcmV0dXJuOyB9XHJcbiAgIFxyXG4gIGNvbnNvbGUuZGlyKCfRg9GB0L/QtdGFJyk7XHJcblxyXG4gIGZldGNoKGAke3Byb3RvY29sfTovLyR7aG9zdH06JHtwb3J0fS9tYWlsYCwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBuZXcgRm9ybURhdGEodGhpcylcclxuICB9KVxyXG4gIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgc3VjY2VzcyhKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmRpcihlcnIpO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5sZXQgbXNnID0gYDxkaXYgY2xhc3M9XCJtYWlsLXBvcHVwX19mb3JtLXN1Y2Nlc3MtbXNnXCI+0J/QuNGB0YzQvNC+INC00L7RgdGC0LDQstC70LXQvdC+PC9kaXY+YDtcclxuXHJcbmZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSl7XHJcbiAgbWFpbEZvcm0uY2xhc3NMaXN0LmFkZCgnbWFpbC1wb3B1cF9fZm9ybS0tc3VjY2VzcycpO1xyXG4gIGxldCB0aW1pbmcgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUobWFpbEZvcm0pLnRyYW5zaXRpb25EdXJhdGlvbik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCk9PntcclxuICAgIG1haWxGb3JtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBtc2cpLy9KU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gIH0sIHRpbWluZyAqIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldEZvcm0oKXtcclxuICBsZXQgZWxTdWNjZXNzTXNnID0gbWFpbEZvcm0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gIGlmKGVsU3VjY2Vzc01zZyAmJiBlbFN1Y2Nlc3NNc2cubWF0Y2hlcygnLm1haWwtcG9wdXBfX2Zvcm0tc3VjY2Vzcy1tc2cnKSl7XHJcbiAgICBtYWlsRm9ybS5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsU3VjY2Vzc01zZyk7XHJcbiAgICBtYWlsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtYWlsLXBvcHVwX19mb3JtLS1zdWNjZXNzJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFpbEZvcm0ubGVuZ3RoIC0gMTsgaSsrKXtcclxuICAgICAgbWFpbEZvcm1baV0udmFsdWUgPSAnJztcclxuICAgICAgaWYobWFpbEZvcm1baV0udXBkYXRlQ291bnQpe1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn0KHRh9GR0YLRh9C40Log0KHQsdGA0L7RiNC10L0nKTtcclxuICAgICAgICBtYWlsRm9ybVtpXS51cGRhdGVDb3VudCgpO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGVycihkYXRhKXtcclxuICBtYWlsRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdtYWlsLXBvcHVwX19mb3JtLS1lcnJvcicpO1xyXG4gIGxldCB0aW1pbmcgPSBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUobWFpbEZvcm0pLnRyYW5zaXRpb25EdXJhdGlvbik7XHJcbiAgY29uc29sZS5kaXIodGltaW5nKTtcclxuICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICBtYWlsRm9ybS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgbXNnKS8vSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICB9LCB0aW1pbmcgKiAxMDAwKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIndXNlIHN0cmljdCc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XHJcblxyXG52YXIgbXVsdGlJdGVtU2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBFbGVtZW50LnByb3RvdHlwZS5jX3F1ZXJ5U2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0T3JSZWdFeHAsIGZsYWcgPSBmYWxzZSl7XHJcbiAgICBcclxuICAgICAgaWYoc2VsZWN0T3JSZWdFeHAuY29uc3RydWN0b3IgPT09IFJlZ0V4cC5wcm90b3R5cGUuY29uc3RydWN0b3IgJiYgZmxhZyl7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmNoaWxkcmVuXS5maW5kKChpdGVtKSA9PiBzZWxlY3RPclJlZ0V4cC50ZXN0KGl0ZW0uY2xhc3NOYW1lKSk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0T3JSZWdFeHApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEVsZW1lbnQucHJvdG90eXBlLmNfcXVlcnlTZWxlY3RvckFsbCA9IGZ1bmN0aW9uIChzZWxlY3RPclJlZ0V4cCwgZmxhZyA9IGZhbHNlKXtcclxuICBcclxuICAgICAgaWYoc2VsZWN0T3JSZWdFeHAuY29uc3RydWN0b3IgPT09IFJlZ0V4cC5wcm90b3R5cGUuY29uc3RydWN0b3IgJiYgZmxhZyl7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLmNoaWxkcmVuXS5maWx0ZXIoKGl0ZW0pID0+IHNlbGVjdE9yUmVnRXhwLnRlc3QoaXRlbS5jbGFzc05hbWUpKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3RPclJlZ0V4cCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBfaXNFbGVtZW50VmlzaWJsZShlbGVtZW50KSB7XHJcbiAgICAgIC8vINCy0L7Qt9C80L7QttC90L4g0L/QvtGC0YDQtdCx0YPQtdGC0YHRjyDRg9GB0YLQsNC90L7QstC40YLRjCDRjdC70LXQvNC10L3RgtGDIHotaW5kZXg6MFxyXG4gICAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgdldpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuICAgICAgICB2SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGVsZW1Gcm9tUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkgeyByZXR1cm4gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KSB9O1xyXG4gICAgICBpZiAocmVjdC5yaWdodCA8IDAgfHwgcmVjdC5ib3R0b20gPCAwXHJcbiAgICAgICAgfHwgcmVjdC5sZWZ0ID4gdldpZHRoIHx8IHJlY3QudG9wID4gdkhlaWdodClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgZWxlbWVudC5jb250YWlucyhlbGVtRnJvbVBvaW50KHJlY3QubGVmdCwgcmVjdC50b3ApKVxyXG4gICAgICAgIHx8IGVsZW1lbnQuY29udGFpbnMoZWxlbUZyb21Qb2ludChyZWN0LnJpZ2h0LCByZWN0LnRvcCkpXHJcbiAgICAgICAgfHwgZWxlbWVudC5jb250YWlucyhlbGVtRnJvbVBvaW50KHJlY3QucmlnaHQsIHJlY3QuYm90dG9tKSlcclxuICAgICAgICB8fCBlbGVtZW50LmNvbnRhaW5zKGVsZW1Gcm9tUG9pbnQocmVjdC5sZWZ0LCByZWN0LmJvdHRvbSkpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzZWxlY3RvciwgY29uZmlnKSB7IFxyXG4gICAgICB2YXJcclxuICAgICAgICBfbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSxcclxuICAgICAgICBfc2xpZGVyV3JhcHBlciA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3IoLy4raXRlbXMvLCB0cnVlKSxcclxuICAgICAgICBfc2xpZGVySXRlbXMgPSBfc2xpZGVyV3JhcHBlci5jX3F1ZXJ5U2VsZWN0b3JBbGwoLy4raXRlbS8sIHRydWUpLFxyXG4gICAgICAgIF9zbGlkZXJDb250cm9scyA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3JBbGwoLy4rY29udHJvbC8sIHRydWUpLFxyXG4gICAgICAgIF9zbGlkZXJDb250cm9sTGVmdCA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3IoLy4rY29udHJvbF9sZWZ0LywgdHJ1ZSksXHJcbiAgICAgICAgX3NsaWRlckNvbnRyb2xSaWdodCA9IF9tYWluRWxlbWVudC5jX3F1ZXJ5U2VsZWN0b3IoLy4rY29udHJvbF9yaWdodC8sIHRydWUpLFxyXG5cclxuICAgICAgICBfd3JhcHBlcldpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKF9zbGlkZXJXcmFwcGVyKS53aWR0aCksXHJcbiAgICAgICAgX2l0ZW1XaWR0aCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShfc2xpZGVySXRlbXNbMF0pLndpZHRoKSxcclxuICAgICAgICBfaHRtbCA9IF9tYWluRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgIFxyXG4gICAgICBsZXRcclxuICAgICAgICBfaW5kZXhJbmRpY2F0b3IgPSAwLFxyXG4gICAgICAgIF9tYXhJbmRleEluZGljYXRvciA9IF9zbGlkZXJJdGVtcy5sZW5ndGggLSAxLFxyXG4gICAgICAgIF9pbmRpY2F0b3JJdGVtcyxcclxuICAgICAgICBcclxuICAgICAgICBfcG9zaXRpb25MZWZ0SXRlbSA9IDAsXHJcbiAgICAgICAgX3RyYW5zZm9ybSA9IDAsXHJcbiAgICAgICAgX3N0ZXAgPSBfaXRlbVdpZHRoIC8gX3dyYXBwZXJXaWR0aCAqIDEwMCxcclxuICAgICAgICBfaXRlbXMgPSBbXSxcclxuICAgICAgICBfaW50ZXJ2YWwgPSAwLFxyXG4gICAgICAgIF9zdGF0ZXMgPSBbXHJcbiAgICAgICAgICB7IGFjdGl2ZTogZmFsc2UsIG1pbldpZHRoOiAwLCBjb3VudDogMSB9LFxyXG4gICAgICAgICAgeyBhY3RpdmU6IGZhbHNlLCBtaW5XaWR0aDogNTc2LCBjb3VudDogMiB9LFxyXG4gICAgICAgICAgeyBhY3RpdmU6IGZhbHNlLCBtaW5XaWR0aDogOTkyLCBjb3VudDogMyB9LFxyXG4gICAgICAgICAgeyBhY3RpdmU6IGZhbHNlLCBtaW5XaWR0aDogMTIwMCwgY291bnQ6IDQgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIF9jb25maWcgPSB7XHJcbiAgICAgICAgICBpc0N5Y2xpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxyXG4gICAgICAgICAgaW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgICBwYXVzZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKGtleSBpbiBfY29uZmlnKSB7XHJcbiAgICAgICAgICBfY29uZmlnW2tleV0gPSBjb25maWdba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9zbGlkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIF9pdGVtcy5wdXNoKHsgaXRlbTogaXRlbSwgcG9zaXRpb246IGluZGV4LCB0cmFuc2Zvcm06IDAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIF9zZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9pbmRleCA9IDA7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gcGFyc2VGbG9hdChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcclxuICAgICAgICBfc3RhdGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnIpIHtcclxuICAgICAgICAgIF9zdGF0ZXNbaW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHdpZHRoID49IF9zdGF0ZXNbaW5kZXhdLm1pbldpZHRoKVxyXG4gICAgICAgICAgICBfaW5kZXggPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfc3RhdGVzW19pbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9nZXRBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9pbmRleDtcclxuICAgICAgICBfc3RhdGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBhcnIpIHtcclxuICAgICAgICAgIGlmIChfc3RhdGVzW2luZGV4XS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgX2luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9pbmRleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHBvc2l0aW9uID0ge1xyXG4gICAgICAgIGdldEl0ZW1NaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBpbmRleEl0ZW0gPSAwO1xyXG4gICAgICAgICAgX2l0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnBvc2l0aW9uIDwgX2l0ZW1zW2luZGV4SXRlbV0ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICBpbmRleEl0ZW0gPSBpbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gaW5kZXhJdGVtO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0SXRlbU1heDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGluZGV4SXRlbSA9IDA7XHJcbiAgICAgICAgICBfaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ucG9zaXRpb24gPiBfaXRlbXNbaW5kZXhJdGVtXS5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIGluZGV4SXRlbSA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBpbmRleEl0ZW07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNaW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiBfaXRlbXNbcG9zaXRpb24uZ2V0SXRlbU1pbigpXS5wb3NpdGlvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldE1heDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmV0dXJuIF9pdGVtc1twb3NpdGlvbi5nZXRJdGVtTWF4KCldLnBvc2l0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF90cmFuc2Zvcm1JdGVtID0gZnVuY3Rpb24gKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHZhciBuZXh0SXRlbSwgY3VycmVudEluZGljYXRvciA9IF9pbmRleEluZGljYXRvcjtcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihfaXNFbGVtZW50VmlzaWJsZShfbWFpbkVsZW1lbnQpKTsgXHJcbiAgICAgICAgLy8gaWYgKCFfaXNFbGVtZW50VmlzaWJsZShfbWFpbkVsZW1lbnQpKSB7XHJcbiAgICAgICAgLy8gICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgIF9wb3NpdGlvbkxlZnRJdGVtKys7XHJcbiAgICAgICAgICBpZiAoKF9wb3NpdGlvbkxlZnRJdGVtICsgX3dyYXBwZXJXaWR0aCAvIF9pdGVtV2lkdGggLSAxKSA+IHBvc2l0aW9uLmdldE1heCgpKSB7XHJcbiAgICAgICAgICAgIG5leHRJdGVtID0gcG9zaXRpb24uZ2V0SXRlbU1pbigpO1xyXG4gICAgICAgICAgICBfaXRlbXNbbmV4dEl0ZW1dLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0TWF4KCkgKyAxO1xyXG4gICAgICAgICAgICBfaXRlbXNbbmV4dEl0ZW1dLnRyYW5zZm9ybSArPSBfaXRlbXMubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICBfaXRlbXNbbmV4dEl0ZW1dLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIF9pdGVtc1tuZXh0SXRlbV0udHJhbnNmb3JtICsgJyUpJztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIF90cmFuc2Zvcm0gLT0gX3N0ZXA7XHJcbiAgICAgICAgICBfaW5kZXhJbmRpY2F0b3IgPSBfaW5kZXhJbmRpY2F0b3IgKyAxO1xyXG4gICAgICAgICAgaWYgKF9pbmRleEluZGljYXRvciA+IF9tYXhJbmRleEluZGljYXRvcikge1xyXG4gICAgICAgICAgICBfaW5kZXhJbmRpY2F0b3IgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgICAgIF9wb3NpdGlvbkxlZnRJdGVtLS07XHJcbiAgICAgICAgICBpZiAoX3Bvc2l0aW9uTGVmdEl0ZW0gPCBwb3NpdGlvbi5nZXRNaW4oKSkge1xyXG4gICAgICAgICAgICBuZXh0SXRlbSA9IHBvc2l0aW9uLmdldEl0ZW1NYXgoKTtcclxuICAgICAgICAgICAgX2l0ZW1zW25leHRJdGVtXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldE1pbigpIC0gMTtcclxuICAgICAgICAgICAgX2l0ZW1zW25leHRJdGVtXS50cmFuc2Zvcm0gLT0gX2l0ZW1zLmxlbmd0aCAqIDEwMDtcclxuICAgICAgICAgICAgX2l0ZW1zW25leHRJdGVtXS5pdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBfaXRlbXNbbmV4dEl0ZW1dLnRyYW5zZm9ybSArICclKSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBfdHJhbnNmb3JtICs9IF9zdGVwO1xyXG4gICAgICAgICAgX2luZGV4SW5kaWNhdG9yID0gX2luZGV4SW5kaWNhdG9yIC0gMTtcclxuICAgICAgICAgIGlmIChfaW5kZXhJbmRpY2F0b3IgPCAwKSB7XHJcbiAgICAgICAgICAgIF9pbmRleEluZGljYXRvciA9IF9tYXhJbmRleEluZGljYXRvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgX3NsaWRlcldyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIF90cmFuc2Zvcm0gKyAnJSknO1xyXG4gICAgICAgIF9pbmRpY2F0b3JJdGVtc1tjdXJyZW50SW5kaWNhdG9yXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBfaW5kaWNhdG9ySXRlbXNbX2luZGV4SW5kaWNhdG9yXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIF9zbGlkZVRvID0gZnVuY3Rpb24gKHRvKSB7XHJcbiAgICAgICAgdmFyIGkgPSAwLCBkaXJlY3Rpb24gPSAodG8gPiBfaW5kZXhJbmRpY2F0b3IpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgICAgICB3aGlsZSAodG8gIT09IF9pbmRleEluZGljYXRvciAmJiBpIDw9IF9tYXhJbmRleEluZGljYXRvcikge1xyXG4gICAgICAgICAgX3RyYW5zZm9ybUl0ZW0oZGlyZWN0aW9uKTtcclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBfY3ljbGUgPSBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCFfY29uZmlnLmlzQ3ljbGluZykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBfdHJhbnNmb3JtSXRlbShkaXJlY3Rpb24pO1xyXG4gICAgICAgIH0sIF9jb25maWcuaW50ZXJ2YWwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX2NvbnRyb2xDbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVyX19jb250cm9sJykpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlcl9fY29udHJvbF9yaWdodCcpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcclxuICAgICAgICAgIF90cmFuc2Zvcm1JdGVtKGRpcmVjdGlvbik7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgICBfY3ljbGUoX2NvbmZpZy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNsaWRlLXRvJykpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIF9zbGlkZVRvKHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zbGlkZS10bycpKSk7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgICBfY3ljbGUoX2NvbmZpZy5kaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBfaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcImhpZGRlblwiKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcclxuICAgICAgICAgIF9jeWNsZShfY29uZmlnLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX3JlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xyXG4gICAgICAgIF9tYWluRWxlbWVudC5pbm5lckhUTUwgPSBfaHRtbDtcclxuXHJcbiAgICAgICAgX3NsaWRlcldyYXBwZXIgPSBfbWFpbkVsZW1lbnQuY19xdWVyeVNlbGVjdG9yKC8uK2l0ZW1zLywgdHJ1ZSk7XHJcbiAgICAgICAgX3NsaWRlckl0ZW1zID0gX3NsaWRlcldyYXBwZXIuY19xdWVyeVNlbGVjdG9yQWxsKC8uK2l0ZW0vLCB0cnVlKTtcclxuICAgICAgICBfc2xpZGVyQ29udHJvbHMgPSBfbWFpbkVsZW1lbnQuY19xdWVyeVNlbGVjdG9yQWxsKC8uK2NvbnRyb2wvLCB0cnVlKTtcclxuICAgICAgICBfc2xpZGVyQ29udHJvbExlZnQgPSBfbWFpbkVsZW1lbnQuY19xdWVyeVNlbGVjdG9yKC8uK2NvbnRyb2xfbGVmdC8sIHRydWUpO1xyXG4gICAgICAgIF9zbGlkZXJDb250cm9sUmlnaHQgPSBfbWFpbkVsZW1lbnQuY19xdWVyeVNlbGVjdG9yKC8uK2NvbnRyb2xfcmlnaHQvLCB0cnVlKTtcclxuICAgICAgICBfd3JhcHBlcldpZHRoID0gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKF9zbGlkZXJXcmFwcGVyKS53aWR0aCk7XHJcbiAgICAgICAgX2l0ZW1XaWR0aCA9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShfc2xpZGVySXRlbXNbMF0pLndpZHRoKTtcclxuICAgICAgICBfcG9zaXRpb25MZWZ0SXRlbSA9IDA7XHJcbiAgICAgICAgX3RyYW5zZm9ybSA9IDA7XHJcbiAgICAgICAgX2luZGV4SW5kaWNhdG9yID0gMDtcclxuICAgICAgICBfbWF4SW5kZXhJbmRpY2F0b3IgPSBfc2xpZGVySXRlbXMubGVuZ3RoIC0gMTtcclxuICAgICAgICBfc3RlcCA9IF9pdGVtV2lkdGggLyBfd3JhcHBlcldpZHRoICogMTAwO1xyXG4gICAgICAgIF9pdGVtcyA9IFtdO1xyXG4gICAgICAgIF9zbGlkZXJJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgX2l0ZW1zLnB1c2goeyBpdGVtOiBpdGVtLCBwb3NpdGlvbjogaW5kZXgsIHRyYW5zZm9ybTogMCB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBfYWRkSW5kaWNhdG9ycygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgX3NldFVwTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9tYWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jb250cm9sQ2xpY2spO1xyXG4gICAgICAgIGlmIChfY29uZmlnLnBhdXNlICYmIF9jb25maWcuaXNDeWNsaW5nKSB7XHJcbiAgICAgICAgICBfbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBfbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBfY3ljbGUoX2NvbmZpZy5kaXJlY3Rpb24pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgX2hhbmRsZVZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyXHJcbiAgICAgICAgICAgIF9pbmRleCA9IDAsXHJcbiAgICAgICAgICAgIHdpZHRoID0gcGFyc2VGbG9hdChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcclxuICAgICAgICAgIF9zdGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgsIGFycikge1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPj0gX3N0YXRlc1tpbmRleF0ubWluV2lkdGgpXHJcbiAgICAgICAgICAgICAgX2luZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChfaW5kZXggIT09IF9nZXRBY3RpdmUoKSkge1xyXG4gICAgICAgICAgICBfc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIF9yZWZyZXNoKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgdmFyIF9hZGRJbmRpY2F0b3JzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzbGlkZXJJbmRpY2F0b3JzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcclxuICAgICAgICBzbGlkZXJJbmRpY2F0b3JzLmNsYXNzTGlzdC5hZGQoc2VsZWN0b3Iuc3BsaXQoJ19fJylbMF0uc2xpY2UoMSkrJ19faW5kaWNhdG9ycycpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF9zbGlkZXJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIHNsaWRlckluZGljYXRvcnNJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNsaWRlckluZGljYXRvcnNJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2xpZGVySW5kaWNhdG9yc0l0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1zbGlkZS10b1wiLCBpKTtcclxuICAgICAgXHJcbiAgICAgICAgICBzbGlkZXJJbmRpY2F0b3JzLmFwcGVuZENoaWxkKHNsaWRlckluZGljYXRvcnNJdGVtKTtcclxuICAgICAgICAgIF9zbGlkZXJXcmFwcGVyLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyZW5kXCIsICBzbGlkZXJJbmRpY2F0b3JzKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmRpcihzbGlkZXJJbmRpY2F0b3JzKTtcclxuXHJcbiAgICAgICAgLy8gX21haW5FbGVtZW50LmFwcGVuZENoaWxkKHNsaWRlckluZGljYXRvcnMpO1xyXG5cclxuICAgICAgICBfaW5kaWNhdG9ySXRlbXMgPSBfbWFpbkVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvci5zcGxpdCgnX18nKVswXSsnX19pbmRpY2F0b3JzID4gbGknKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LjQvdC00LjQutCw0YLQvtGA0YtcclxuICAgICAgX2FkZEluZGljYXRvcnMoKTtcclxuICAgICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y9cclxuICAgICAgX3NldFVwTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICBpZiAoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIikge1xyXG4gICAgICAgIF9jeWNsZShfY29uZmlnLmRpcmVjdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgX3NldEFjdGl2ZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICByaWdodDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX3RyYW5zZm9ybUl0ZW0oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsZWZ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBfdHJhbnNmb3JtSXRlbSgnbGVmdCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX2NvbmZpZy5pc0N5Y2xpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoX2ludGVydmFsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN5Y2xlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBfY29uZmlnLmlzQ3ljbGluZyA9IHRydWU7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKF9pbnRlcnZhbCk7XHJcbiAgICAgICAgICBfY3ljbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfSgpKTtcclxuXHJcbiAgdmFyIHNsaWRlciA9IG11bHRpSXRlbVNsaWRlcignLnNsaWRlcicsIHtcclxuICAgIGlzQ3ljbGluZzogdHJ1ZSxcclxuICAgIGludGVydmFsOiA4MDAwXHJcbiAgfSk7XHJcbiAgdmFyIGluc3RTbGlkZXIxID0gbXVsdGlJdGVtU2xpZGVyKCcuaW5zdF9fc2xpZGVyLS0xJywge1xyXG4gICAgaXNDeWNsaW5nOiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDBcclxuICB9KTtcclxuICB2YXIgaW5zdFNsaWRlcjIgPSBtdWx0aUl0ZW1TbGlkZXIoJy5pbnN0X19zbGlkZXItLTInLCB7XHJcbiAgICBpc0N5Y2xpbmc6IHRydWUsXHJcbiAgICBpbnRlcnZhbDogNTAwMFxyXG4gIH0pO1xyXG4gIHZhciBpbnN0U2xpZGVyMyA9IG11bHRpSXRlbVNsaWRlcignLmluc3RfX3NsaWRlci0tMycsIHtcclxuICAgIGlzQ3ljbGluZzogdHJ1ZSxcclxuICAgIGludGVydmFsOiA1MDAwXHJcbiAgfSk7XHJcbiAgdmFyIGluc3RTbGlkZXI0ID0gbXVsdGlJdGVtU2xpZGVyKCcuaW5zdF9fc2xpZGVyLS00Jywge1xyXG4gICAgaXNDeWNsaW5nOiB0cnVlLFxyXG4gICAgaW50ZXJ2YWw6IDUwMDBcclxuICB9KTtcclxuXHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzPXtcclxuICBcInByb3RvY29sXCI6IFwiaHR0cFwiLFxyXG4gIFwiaG9zdFwiOiBcImxvY2FsaG9zdFwiLFxyXG4gIFwicG9ydFwiOiA4MDgwXHJcbn0iXX0=
