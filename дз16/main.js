const getS = (selector) => document.querySelector(selector);

/* start function btn-edit click  */
getS(".btn-edit").onclick = function () {
  getS(".edit-block").classList.add("show");
  getS(".style-block").classList.remove("show");
  getS(".edit-area").value = getS(".top-block").innerHTML;
};
/* end function btn-edit click  */

/* start function btn-save click */
getS(".btn-save").onclick = function () {
  getS(".edit-block").classList.remove("show");
  getS(".top-block").innerHTML = getS(".edit-area").value;
};
/* end function btn-save click  */

/* start function btn-style click  */
getS(".btn-style").addEventListener("click", () => {
  getS(".style-block").classList.add("show");
  getS(".edit-block").classList.remove("show");
});
/* end function btn-style click  */

/* start function fontSize change  */
function fontSize() {
  getS(".top-block").style.fontSize = event.target.value;
}
/* end function fontSize change  */

/* start function fontFamily change  */
let fF = document.getElementById("fontFamily");
fF.onchange = function (e) {
  getS(".top-block").style.fontFamily = this.value;
};
/* end function fontFamily change  */

/* start function btn-text-color click  */
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
/* end function btn-text-color click  */

/* start function btn-bg-color click  */
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
/* end function btn-bg-color click  */

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
/* end function bold and cursive style */

/* start function btn-add click  */
getS(".btn-add").onclick = function () {
  getS(".first").classList.remove("show");
  getS(".second").classList.add("show");
};
/* end function btn-add click  */

/* start function btn-create-list click  */
const list = document.forms["form-list"];
getS(".btn-create-list").onclick = function () {
  const countLi = list.count.value;
  const typeLi = list.type.value;
  getS(".edit-area").value += `<ul style="list-style-type: ${typeLi}">`;
  for (let i = 0; i < countLi; i++) {
    getS(".edit-area").value += `<li>item ${i + 1}</li>`;
  }
  getS(".edit-area").value += "</ul>";
  getS(".first").classList.add("show");
  getS(".second").classList.remove("show");
  list.count.value = "";
  list.type.value = "circle";
};
/* end function btn-create-list click  */

/* start function list radio button click  */
getS("#list").onclick = function () {
  getS(".create-list").classList.add("show");
  getS(".create-table").classList.remove("show");
};
/* end function list radio button click  */

/* start function table radio button click  */
getS("#table").onclick = function () {
  getS(".create-list").classList.remove("show");
  getS(".create-table").classList.add("show");
};
/* end function table radio button click  */

/* start function btn-create-table click  */
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
  tableForm.countTR.value = "";
  tableForm.countTD.value = "";
  tableForm.widthTD.value = "";
  tableForm.heightTD.value = "";
  tableForm.borderWidth.value = "";
  tableForm.type.value = "solid";
  tableForm.color.value = "black";
  getS(".second").classList.remove("show");
  getS(".first").classList.add("show");
};
/* end function btn-create-table click  */
