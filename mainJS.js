/* eslint-disable no-undef */


function amountOfSimpleNumbers(a) {
  let isSimpleNumber = false;
  let simpleNumbers = [];

  simpleNumbers.push(2);

  for (let i = 3; i <= a; i++) {
    isSimpleNumber = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSimpleNumber = false;
        break;
      }
    }
    if (isSimpleNumber) {
      simpleNumbers.push(i);
    }
  }
  return simpleNumbers;
}

function validAndAmount(numb) {
  if (numb === null) {
    alert('Ещё увидимся!');
  } else if (numb === '') {
    alert('Вы ничего не ввели!');
    location.reload();
  } else if (numb < 2) {
    alert('Это число меньше, либо равно 1!');
    location.reload();
  } else if (isNaN(numb)) {
    alert('Это точно не число...');
    location.reload();
  } else {
    let result = amountOfSimpleNumbers(numb);
    document.getElementById('amountOfSimpleNumbers').value = result.length;
    document.getElementById('simpleNumbers').value = result.join(', ');
  }
}

function onButtonClick() {
  let input = document.inputBox.value;
  validAndAmount(input);
}

document.querySelector('#submitButton').addEventListener('click', onButtonClick, false);

