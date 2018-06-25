/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
/******/ })
/************************************************************************/
/******/ ({

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(335);

// Завдання 1
function randomInteger(min, max) {
  var random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(random);
  return random;
}

alert(randomInteger(0, 28));

// Завдання 2
var user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;

// Завдання 3
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var full = {};

alert(isEmpty(full));

full["значення"] = "значення";

alert(isEmpty(full));

// Завдання 4
var salaries = {
  John: 400,
  Jack: 20000,
  test: "asdsaasdd"
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multiplyNumeric(salaries) {
  for (var key in salaries) {
    if (isNumeric(salaries[key])) {
      salaries[key] /= 2;
    } else {
      salaries[key] = 0;
    }
  }
}

multiplyNumeric(salaries);

var sum = 0;

for (var name in salaries) {
  sum += salaries[name];
}

alert(sum);

// Завдання 5
var max = 0;
var maxName = "";
for (var _name in salaries) {
  if (max < salaries[_name]) {
    max = salaries[_name];
    maxName = _name;
  }
}

alert(maxName || "немає співробітників");

// Завдання 6
function multiplyNumeric(salaries) {
  for (var key2 in salaries) {
    if (isNumeric(salaries[key2])) {
      salaries[key2] *= 2;
    } else {
      salaries[key2] = 0;
    }
  }
}

multiplyNumeric(salaries);

// Завдання 7
var num = [1, 2, 3, 4, 5, 6, 7, 8];

var random = Math.floor(Math.random() * num.length);

alert(num[random]);

// Завдання 8
var numbers = [];

while (true) {

  var value = prompt("Введіть число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

var nubersSum = 0;
for (var i = 0; i < numbers.length; i++) {

  nubersSum += numbers[i];
}

alert(nubersSum);

// Завдання 9
var arr = [1, 2, true, 3];

function find(arr, value) {

  if (arr.indexOf) {
    return arr.indexOf(value);
  }

  for (var _i = 0; _i < arr.length; _i++) {
    if (arr[_i] === value) return _i;
  }

  return -1;
}

var index = find(arr, 3);

alert(index);

// Завдання 10
function filterRange(array, a, b) {

  var result = [];

  for (var _i2 = 0; _i2 < array.length; _i2++) {
    if (array[_i2] >= a && array[_i2] <= b) {
      result.push(array[_i2]);
    }
  }

  return result;
}

var array = [1, 2, 3, 4, 5];

var filtered = filterRange(arr, 2, 4);

alert(filtered);

// Завдання 11
function pow(x, n) {

  var result = x;

  for (var i = 1; i < n; i++) {

    result *= x;
  }

  return result;
}

var x = prompt("Введіть х", '');

var n = prompt("Введіть n", '');

if (n <= 1) {

  alert('Ступінь ' + n + ' не підтримується, введіть цілу степінь n більшу 1');
} else {
  alert(pow(x, n));
}

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });