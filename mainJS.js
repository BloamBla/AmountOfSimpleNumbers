/* eslint-disable no-undef,no-unused-vars,max-len,no-inner-declarations */
let number = prompt('Введите число больше 0.');

if (number === null) {
  alert('Ещё увидимся!');
} else if (number === '') {
  alert('Вы ничего не ввели!');
  location.reload();
} else if (number < 1) {
  alert('Ну я же просил...!');
  location.reload();
} else if (isNaN(number)) {
  alert('Это точно не число...');
  location.reload();
} else {
  function amountOfSimpleNumbers(a) {
    let simpleNumbers = '';
    let counter = 0;
    nextPrime:
    for (let i = 2; i <= a; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) continue nextPrime;
      }
      simpleNumbers += ' ' + i;
      counter += 1;
    }
    return [simpleNumbers, counter];
  }
  let result = amountOfSimpleNumbers(number);
  alert('Количество простых чисел в интервале от 1 до ' + number + ' равно - ' +
      result[1] + '.\n' + 'Простые числа в это интервале - ' + result[0]);
}
