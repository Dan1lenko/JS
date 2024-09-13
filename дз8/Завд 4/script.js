let myStr = prompt();
let length = myStr.length;
if (myStr.includes("http://") || myStr.includes("https://"));
{
  if (myStr.includes("http://")) {
    alert(myStr.slice(11, length));
  } else if (myStr.includes("https://")) {
    alert(myStr.slice(8, length));
  } else alert("Спробуйте ще раз");
}
