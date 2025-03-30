let users = [];
let userIndex = null;

const loginInput = document.querySelector('input[placeholder="Login"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const addUserButton = document.querySelector(".left button");
const usersContainer = document.querySelector(".users");

addUserButton.addEventListener("click", addUser);

function addUser() {
  const login = loginInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;
  const loginRegexp = /^[a-zA-Z]{4,16}$/;
  const passwordRegexp = /^[a-zA-Z0-9_.-]{4,16}$/;
  const emailRegexp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!loginRegexp.test(login)) {
    alert(
      "Login must be 4-16 characters long and contain only English letters."
    );
    return;
  }

  if (!passwordRegexp.test(password)) {
    alert(
      "Password must be 4-16 characters long and can include letters, numbers, '_', '-', or '.'."
    );
    return;
  }

  if (!emailRegexp.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const user = { login, password, email };
  users.push(user);
  clearInputs();
  render();
}

function clearInputs() {
  loginInput.value = "";
  passwordInput.value = "";
  emailInput.value = "";
}

function render() {
  usersContainer.innerHTML = "";
  users.forEach((user, index) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
      <p>${index + 1}</p>
      <p>${user.login}</p>
      <p>${user.password}</p>
      <p>${user.email}</p>
      <button id="btnEdit">Edit</button>
      <button id="btnDelete">Delete</button>
    `;
    userDiv
      .querySelector("#btnEdit")
      .addEventListener("click", () => editUser(index));
    userDiv
      .querySelector("#btnDelete")
      .addEventListener("click", () => deleteUser(index));

    usersContainer.appendChild(userDiv);
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  render();
}

function editUser(index) {
  const user = users[index];
  loginInput.value = user.login;
  passwordInput.value = user.password;
  emailInput.value = user.email;

  userIndex = index;
  addUserButton.textContent = "Edit user";
  addUserButton.removeEventListener("click", addUser);
  addUserButton.addEventListener("click", saveEditUser);
}

function saveEditUser() {
  const login = loginInput.value.trim();
  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();

  const loginRegexp = /^[a-zA-Z]{4,16}$/;
  const passwordRegexp = /^[a-zA-Z0-9_.-]{4,16}$/;
  const emailRegexp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!loginRegexp.test(login)) {
    alert(
      "Login must be 4-16 characters long and contain only English letters."
    );
    return;
  }

  if (!passwordRegexp.test(password)) {
    alert(
      "Password must be 4-16 characters long and can include letters, numbers, '_', '-', or '.'."
    );
    return;
  }

  if (!emailRegexp.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  users[userIndex] = { login, password, email };
  clearInputs();
  render();

  addUserButton.textContent = "Add user";
  addUserButton.removeEventListener("click", saveEditUser);
  addUserButton.addEventListener("click", addUser);
}
