var number = prompt("Введите число больше 0.");
if (number === null) {
  alert("Ещё увидимся!");
}
else if (number === "") {
  alert("Вы ничего не ввели!");
  location.reload();
} else if (number < 1) {
  alert("Ну я же просил...!");
  location.reload();
}
else if (isNaN(number)) {
  alert("Это точно не число...");
  location.reload();
}
else {
  var counter = 0;
  var simleNumbers = "";
  function amountOfSimleNumbers(a) {
nextPrime:
    for(var i = 2; i <= a; i++) {
      for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      simleNumbers += " " + i;
      counter += 1;
    }
    return counter;
  }
  alert("Количество простых чисел в интервале от 1 до " + number + " равно - " + amountOfSimleNumbers(number) + ".\n" + "Простые числа в это интервале - " + simleNumbers);
}
