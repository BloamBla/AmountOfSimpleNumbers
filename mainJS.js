var number = prompt("������� ����� ������ 0.");
if (number === null) {
  alert("��� ��������!");
}
else if (number === "") {
  alert("�� ������ �� �����!");
  location.reload();
}
else if (number == 0) {
  alert("�� � �� ������...!");
  location.reload();
}
else if (isNaN(number)) {
  alert("��� ����� �� �����...");
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
  alert("���������� ������� ����� � ��������� �� 1 �� " + number + " ����� - " + amountOfSimleNumbers(number) + ".\n" + "������� ����� � ��� ��������� - " + simleNumbers);
}