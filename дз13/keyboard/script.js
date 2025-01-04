const specialKeys = ["Backspace", "CapsLock", "Enter", "Shift", "Tab"];
let isCapsLockOn = false;

function handleKey(event, action) {
  const key = event.key;
  const keyLower = key.toLowerCase();
  const keyElements = document.querySelectorAll(".btn");

  for (let i = 0; i < keyElements.length; i++) {
    const keyElement = keyElements[i];
    if (
      keyElement.textContent.toLowerCase() === keyLower ||
      (keyLower === " " && keyElement.classList.contains("space")) ||
      (specialKeys.includes(key) &&
        keyElement.classList.contains(key.toLowerCase()))
    ) {
      keyElement.classList[action]("highlight");
    }
  }

  const textDiv = document.querySelector(".text");

  if (action === "add") {
    if (!specialKeys.includes(key)) {
      textDiv.append(
        document.createTextNode(isCapsLockOn ? key.toUpperCase() : key)
      );
    } else if (key === "Backspace") {
      textDiv.textContent = textDiv.textContent.slice(0, -1);
    } else if (key === "Enter") {
      textDiv.append(document.createElement("br"));
    } else if (key === "CapsLock") {
      isCapsLockOn = !isCapsLockOn;
    }
  }
}

window.addEventListener("keydown", (event) => handleKey(event, "add"));
window.addEventListener("keyup", (event) => handleKey(event, "remove"));
