let attempts = 5;

while (attempts > 0) {
  let pas = prompt("Введіть пароль");

  if (pas === `12345`) {
    alert("Запрошуємо на сайт!");
    attempts = 0; 
  } else {
    attempts--;
    if (attempts > 0) {
      alert(`Пароль невірний. Залишилось ${attempts} спроби!`);
    } else {
      alert("Будь ласка, спробуйте пізніше!");
    }
  }
}
