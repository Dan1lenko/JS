$(document).ready(function () {
  $("#circle").on("click", function () {
    const getRandom = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const newWidth = getRandom(50, 250);
    const newHeight = getRandom(50, 250);
    const startColor = $(this).css("background-color");
    const newColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;
    const newPositionTop = getRandom(0, $(window).height() - newHeight);
    const newPositionLeft = getRandom(0, $(window).width() - newWidth);
    const interpolateColor = (color1, color2, factor) => {
      const c1 = color1.match(/\d+/g).map(Number);
      const c2 = color2.match(/\d+/g).map(Number);
      return `rgb(${c1
        .map((c, i) => Math.round(c + (c2[i] - c) * factor))
        .join(", ")})`;
    };

    $(this).animate(
      {
        width: newWidth,
        height: newHeight,
        top: newPositionTop,
        left: newPositionLeft,
      },
      {
        duration: 2000,
        easing: "easeOutBounce",
        step: function (now, fx) {
          if (fx.prop === "top" || fx.prop === "left") {
            const progress = fx.now / fx.end;
            $(this).css(
              "background-color",
              interpolateColor(startColor, newColor, progress)
            );
          }
        },
        complete: function () {
          $(this).css("background-color", newColor);
        },
      }
    );
  });
});
