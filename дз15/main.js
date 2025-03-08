const getS = (selector) => document.querySelector(selector);

getS(".btn-edit").onclick = function () {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  // const content = getS('.top-block').innerHTML;
  // getS('.edit-area').value = content;
  getS(".edit-area").value = getS(".top-block").innerHTML;
};

getS(".btn-save").onclick = function () {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
};

getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});

function fontSize() {
  // console.log(event.target.value);
  getS(".top-block").style.fontSize = event.target.value;
}

let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
  // console.log(e.target.value);
  // console.log(this.value);
  getS(".top-block").style.fontFamily = this.value;
};

let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "gray",
  "black",
  "white",
  "deeppink",
];
getS(".btn-text-color").onclick = function () {
  const colorElements = getS(".colors").children;
  for (let i = 0; i < colorElements.length; i++) {
    colorElements[i].style.backgroundColor = colors[i];
    colorElements[i].onclick = function () {
      getS(".top-block").style.color = this.style.backgroundColor;
      getS(".colors").classList.add("hide");
    };
  }
  getS(".colors").classList.remove("hide");
};

getS(".btn-bg-color").onclick = function () {
  const colorElements = getS(".colors").children;
  for (let i = 0; i < colorElements.length; i++) {
    colorElements[i].style.backgroundColor = colors[i];
    colorElements[i].onclick = function () {
      getS(".top-block").style.backgroundColor = this.style.backgroundColor;
      getS(".colors").classList.add("hide");
    };
  }
  getS(".colors").classList.remove("hide");
};

/* start function bold and cursive style */

getS("#bold").onclick = function () {
  if (getS("#bold").checked) {
    getS(".top-block").style.fontWeight = "bold";
  } else {
    getS(".top-block").style.fontWeight = "normal";
  }
};
getS("#cursive").onclick = function () {
  if (getS("#cursive").checked) {
    getS(".top-block").style.fontStyle = "oblique";
  } else {
    getS(".top-block").style.fontStyle = "normal";
  }
};

/* end function bold style */

getS(".btn-add").onclick = function () {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
};

const list = document.forms["form-list"];

getS(".btn-create-list").onclick = function () {
  // console.log(list)
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";
  // console.log(countLi,typeLi)

  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
};

getS("#list").onclick = function () {
  getS(".create-list").classList.add("show");
  getS(".create-table").classList.remove("show");
};
getS("#table").onclick = function () {
  getS(".create-list").classList.remove("show");
  getS(".create-table").classList.add("show");
};

const tableForm = document.forms["form-table"];

getS(".btn-create-table").onclick = function () {
  const countTR = tableForm.countTR.value;
  const countTD = tableForm.countTD.value;
  const widthTD = tableForm.widthTD.value;
  const heightTD = tableForm.heightTD.value;
  const borderWidth = tableForm.borderWidth.value;
  const borderType = tableForm.type.value;
  const borderColor = tableForm.color.value;

  let tableHTML = `<table style="border-collapse: collapse;">`;
  for (let i = 0; i < countTR; i++) {
    tableHTML += `<tr>`;
    for (let j = 0; j < countTD; j++) {
      tableHTML += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${borderWidth}px ${borderType} ${borderColor};">TD</td>`;
    }
    tableHTML += `</tr>`;
  }
  tableHTML += `</table>`;

  getS(".edit-area").value += tableHTML;
  getS(".top-block").style.height.value += "100px";

  getS(".second").classList.remove("show");
  getS(".first").classList.add("show");
};
