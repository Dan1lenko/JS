const backgroundColor = prompt("Введіть колір фону сторінки:");
const fontFamily = prompt(
  "Введіть тип шрифта (наприклад, Arial, 'Times New Roman'):"
);
const h1Alignment = prompt(
  "Введіть вирівнювання заголовка h1 (left, center, right):"
);
const paragraphBackground = prompt(
  "Введіть колір фону для параграфа зі зсилками:"
);
const paragraphTextColor = prompt(
  "Введіть колір тексту у параграфі зі зсилками:"
);
const linkColors = [];
for (let i = 1; i <= 3; i++) {
  linkColors.push(prompt(`Введіть колір для зсилки №${i}:`));
}
const divTextColor = prompt("Введіть колір тексту у елементі div:");
const divTextSize = prompt(
  "Введіть розмір тексту у елементі div (наприклад, 20px):"
);
const divTextWeight = prompt(
  "Введіть товщину тексту у елементі div (normal, bold, etc.):"
);
const listStyleType = prompt(
  "Введіть тип маркера для маркованого списку (disc, circle, square, etc.):"
);

document.body.style.backgroundColor = backgroundColor;
document.body.style.fontFamily = fontFamily;

const mainTitle = document.getElementById("main-title");
mainTitle.style.textAlign = h1Alignment;

const linkParagraph = document.getElementById("link-paragraph");
linkParagraph.style.backgroundColor = paragraphBackground;
linkParagraph.style.color = paragraphTextColor;

const links = linkParagraph.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].style.color = linkColors[i];
}

const styledDiv = document.getElementById("styled-div");
styledDiv.style.color = divTextColor;
styledDiv.style.fontSize = divTextSize;
styledDiv.style.fontWeight = divTextWeight;

const styledList = document.getElementById("styled-list");
styledList.style.listStyleType = listStyleType;
