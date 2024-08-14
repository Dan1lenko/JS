let name = prompt("Введіть ім’я щоб встановити пароль");
if (name == "Petro") {
  let pass = prompt("Введіть пароль який хочете встановити");
  if (pass == "ЛОГОС") {
    alert("Ласкаво просимо!");
  } else if (pass == null) {
    alert("Вхід скасований");
  } else {
    alert("Пароль невірний");
  }
} else if (name == null) {
  alert("Вхід скасований");
} else {
  alert("Я вас не знаю");
}
