$(document).ready(function () {
  $(".box").each(function () {
    const $box = $(this);
    $box.data("original", {
      left: $box.position().left,
      top: $box.position().top,
      width: $box.width(),
      height: $box.height(),
      position: "absolute",
    });
  });

  $(".box").click(function () {
    const $box = $(this);
    const original = $box.data("original");
    const isExpanded = $box.hasClass("expanded");

    if (isExpanded) {
      $(".overlay").fadeOut(300);

      $box.animate(
        {
          left: original.left,
          top: original.top,
          width: original.width,
          height: original.height,
        },
        800,
        "linear",
        function () {
          $box
            .css({
              position: original.position,
              "z-index": "2",
            })
            .removeClass("expanded");
        }
      );
    } else {
      $(".overlay").fadeIn(300);

      $box.css({
        position: "fixed",
        "z-index": "20",
      });

      const centerX = ($(window).width() - 500) / 2;
      const centerY = ($(window).height() - 500) / 2;

      $box
        .animate(
          {
            left: centerX,
            top: centerY,
            width: 500,
            height: 500,
          },
          800,
          "linear"
        )
        .addClass("expanded");
    }
  });

  $(".overlay").click(function () {
    $(".box.expanded").trigger("click");
  });
});
