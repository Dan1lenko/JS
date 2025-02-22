let btn = document.getElementById("signUp");
let container = document.getElementsByClassName("container")[0];
let firstname = document.getElementById("firstname");
let secondname = document.getElementById("secondname");
let email = document.getElementById("email");
let container2 = document.getElementsByClassName("container2")[0];
let genderMan = document.getElementById("man");
let genderWoman = document.getElementById("woman");
let position = document.getElementById("position");
let agree = document.getElementById("agree");
let signOutBtn = document.getElementById("signOut");
let img = document.getElementById("img");
container2.style.display = "none";
btn.disabled = true;

agree.addEventListener("change", function () {
  btn.disabled = !agree.checked;
});

btn.addEventListener("click", function () {
  container.style.display = "none";
  container2.style.display = "block";
  document.getElementById("firstname2").innerText =
    "First Name: " + firstname.value;
  document.getElementById("secondname2").innerText =
    "Second Name: " + secondname.value;
  document.getElementById("email2").innerText = "Email: " + email.value;
  document.getElementById("position3").innerText = position.value;
  if (genderMan.checked) {
    img.src = "man.jpg";
  } else if (genderWoman.checked) {
    img.src = "woman.jpg";
  }
});

signOutBtn.addEventListener("click", function () {
  container.style.display = "flex";
  container2.style.display = "none";
  firstname.value = "";
  secondname.value = "";
  email.value = "";
  genderMan.checked = false;
  genderWoman.checked = false;
  position.value = "choose";
  agree.checked = false;
  btn.disabled = true;
});
