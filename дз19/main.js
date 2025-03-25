let nameRegExp = /^[a-zA-Z]{1,20}$/;
let getID = (id) => document.getElementById(id);

let validateName = () => {
  let testName = nameRegExp.test(getID("name").value);
  if (testName) {
    getID("imgComplete").src = "complete.png";
    getID("imgComplete").style.display = "block";
  } else {
    getID("imgComplete").src = "wrong.png";
    getID("imgComplete").style.display = "block";
  }

  return testName;
};

let validateLastName = () => {
  let testLastName = nameRegExp.test(getID("lastName").value);
  if (testLastName) {
    getID("imgComplete2").src = "complete.png";
    getID("imgComplete2").style.display = "block";
  } else {
    getID("imgComplete2").src = "wrong.png";
    getID("imgComplete2").style.display = "block";
  }

  return testLastName;
};

let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
let validateEmail = () => {
  let testEmail = emailRegExp.test(getID("email").value);
  if (testEmail) {
    getID("imgComplete3").src = "complete.png";
    getID("imgComplete3").style.display = "block";
  } else {
    getID("imgComplete3").src = "wrong.png";
    getID("imgComplete3").style.display = "block";
  }
  return testEmail;
};

let passRegExp = /^[a-zA-Z0-9]{8,15}$/;
let validatePass = () => {
  let testPass = passRegExp.test(getID("pass").value);
  if (testPass) {
    getID("imgComplete4").src = "complete.png";
    getID("imgComplete4").style.display = "block";
  } else {
    getID("imgComplete4").src = "wrong.png";
    getID("imgComplete4").style.display = "block";
  }
  return testPass;
};

getID("name").oninput = validateName;
getID("lastName").oninput = validateLastName;
getID("email").oninput = validateEmail;
getID("pass").oninput = validatePass;

getID("check").onclick = function () {
  if (
    validateName() &&
    validateLastName() &&
    validateEmail() &&
    validatePass()
  ) {
    getID("btn").disabled = !this.checked;
    getID("btn").style.backgroundColor = "rgb(0, 191, 255)";
  }
};

getID("btn").addEventListener("click", () => {
  getID("great").classList.add("active");
});

let buttons = document.getElementsByClassName("button");

for (let button of buttons) {
  button.onclick = function () {
    getID("great").classList.remove("active");
    getID("name").value = "";
    getID("lastName").value = "";
    getID("email").value = "";
    getID("pass").value = "";
    getID("check").checked = false;
    getID("btn").disabled = true;
    getID("btn").style.backgroundColor = "rgb(106, 218, 255)";
    getID("imgComplete").style.display = "none";
    getID("imgComplete2").style.display = "none";
    getID("imgComplete3").style.display = "none";
    getID("imgComplete4").style.display = "none";
  };
}
