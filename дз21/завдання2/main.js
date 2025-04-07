$(document).ready(function () {
  const spanS1 = $("#s1").text();
  const bS2 = $("b.s2").text();
  const iTag = $("div#second i").text();
  const qTag = $('q[title="hello"]').text();
  const link = $('a[target="_blank"]').text();
  const secondExtraSpan = $("span.extra").eq(1).text();

  const fullText = spanS1 + bS2 + iTag + qTag + link + secondExtraSpan;

  alert(fullText);
});
