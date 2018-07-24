/* eslint-disable no-undef */

function amountOfSimpleNumbers(a) {
  let isSimpleNumber = false;
  // let simpleNumbers = '';  can be array
  let simpleNumbers = [];

  /* if (i === 2) {
    simpleNumbers += ' ' + i;
    counter += 1;
  }*/

  simpleNumbers.push(2);

  for (let i = 3; i <= a; i++) {
    isSimpleNumber = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSimpleNumber = false;
        break;
      }
    }
    // if (isSimpleNumber === true) { can be simplifided to
    if (isSimpleNumber) {
      simpleNumbers.push(i);
    }
  }
  return simpleNumbers; // return array. from array we can get count and numbers
}


let number = prompt('Введите число больше 1.');

if (number === null) {
  alert('Ещё увидимся!');
} else if (number === '') {
  alert('Вы ничего не ввели!');
  location.reload();
} else if (number < 2) {
  alert('Ну я же просил...!');
  location.reload();
} else if (isNaN(number)) {
  alert('Это точно не число...');
  location.reload();
} else {
  let result = amountOfSimpleNumbers(number);
  alert('Количество простых чисел в интервале от 1 до ' + number + ' равно - ' +
    result.length + '.\n' + 'Простые числа в это интервале - ' + result.join(','));
}
