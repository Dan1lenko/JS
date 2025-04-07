$(document).ready(function () {
  $(".block")
    .animate(
      {
        height: "56%",
      },
      60000,
      "linear",
      function () {
        $("#first").html(`<p id="first">1</p>`);
      }
    )
    .animate(
      {
        height: "0px",
      },
      60000,
      "linear",
      function () {
        $("#first").html(`<p id="first">0</p>`);
      }
    );
});
