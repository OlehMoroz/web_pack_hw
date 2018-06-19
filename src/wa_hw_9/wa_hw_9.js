import './wa_hw_9.scss';


// Завдання 1
function randomInteger(min, max) {
    let random = min - 0.5 + Math.random() * (max - min + 1);
    random = Math.round(random);
    return random;
}

alert( randomInteger(0, 28) );


// Завдання 2
let user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
delete user.name;


// Завдання 3
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
  
    let full = {};
  
    alert( isEmpty(full) );
  
    full["значення"] = "значення";
  
    alert( isEmpty(full) );  


// Завдання 4
let salaries = {
    John: 400,
    Jack: 20000,
    test: "asdsaasdd",
  };
  
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  function multiplyNumeric(salaries) {
    for (let key in salaries) {
      if (isNumeric(salaries[key])) {
        salaries[key] /= 2;
      }
      else {
        salaries[key] = 0;
      }
    }
  }
  
  multiplyNumeric(salaries);
  
  let sum = 0;

for (let name in salaries) {
  sum += salaries[name];
}

alert( sum );


// Завдання 5
let max = 0;
let maxName = "";
for (let name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "немає співробітників" );


// Завдання 6
function multiplyNumeric(salaries) {
    for (let key2 in salaries) {
      if (isNumeric(salaries[key2])) {
        salaries[key2] *= 2;
      }
      else {
        salaries[key2] = 0;
      }
    }
  }
  
  multiplyNumeric(salaries);


// Завдання 7
let num = [1, 2, 3, 4, 5, 6, 7, 8];

let random = Math.floor(Math.random() * num.length);

alert( num[random] );


// Завдання 8
let numbers = [];

while (true) {
  
  let value = prompt("Введіть число", 0);

  if (value === "" || value === null || isNaN(value)) break;

  numbers.push(+value);
}

let nubersSum = 0;
for (let i = 0; i < numbers.length; i++) {

  nubersSum += numbers[i];
}

alert( nubersSum );


// Завдання 9
let arr = [1, 2, true, 3];

function find(arr, value) {
  
  if (arr.indexOf) {
    return arr.indexOf(value);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }

  return -1;
}

let index = find(arr, 3);

alert( index );


// Завдання 10
function filterRange(array, a, b) {
  
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= a && array[i] <= b) {
      result.push(array[i]);
    }
  }

  return result;
}

let array = [1, 2, 3, 4, 5];

let filtered = filterRange(arr, 2, 4);

alert( filtered );


// Завдання 11
function pow(x, n) {

  let result = x;

  for (var i = 1; i < n; i++) {
    
    result *= x;
  }

  return result;
}

let x = prompt("Введіть х", '');

let n = prompt("Введіть n", '');

  if (n <= 1) {

    alert('Ступінь ' + n +
      ' не підтримується, введіть цілу степінь n більшу 1');
  } 
  
  else {
    alert( pow(x, n) );
}