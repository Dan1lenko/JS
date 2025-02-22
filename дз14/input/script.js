let f1 = document.forms.f1;
f1.move.addEventListener("click", function () {
  let start = f1.start.value;
  if (start == "") {
    return;
  } else {
    f1.end.value = start;
    f1.start.value = "";
  }
});

let f2 = document.forms.f2;
f2.text.addEventListener("blur", function () {
  let text = f2.text.value;
  if ((text = "")) {
    return;
  } else {
    f2.text.placeholder = f2.text.value;
    f2.text.value = "";
  }
});
