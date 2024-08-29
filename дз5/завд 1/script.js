let country = prompt("write number of month");
switch (country) {
  case `1`:
  case `2`:
  case `12`:
    alert(`Зима`);
    break;

  case `3`:
  case `4`:
  case `5`:
    alert(`Весна`);
    break;

  case `6`:
  case `7`:
  case `8`:
    alert(`Літо`);
    break;

  case `9`:
  case `10`:
  case `11`:
    alert(`Осінь`);
    break;

  default:
    alert("Неможливо визначити");
    break;
}
