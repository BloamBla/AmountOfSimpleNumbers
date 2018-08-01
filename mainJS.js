/* eslint-disable no-undef */

function validAndAmount(form) {
  let input = form.inputBox.value;

  if (input === null) {
    alert('Ещё увидимся!');
  } else if (input === '') {
    alert('Вы ничего не ввели!');
    location.reload();
  } else if (input < 2) {
    alert('Это число меньше, либо равно 1!');
    location.reload();
  } else if (isNaN(input)) {
    alert('Это точно не число...');
    location.reload();
  } else {
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

    let result = amountOfSimpleNumbers(input);
    document.getElementById('amountOfSimpleNumbers').value = result.length;
    document.getElementById('simpleNumbers').value = result.join(', ');
  }
}
