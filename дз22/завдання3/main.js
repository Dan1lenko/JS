$(document).ready(function () {
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const randomizeElement = (element) => {
    const newColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;
    const newBorderColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;
    const newBoxShadow = `${getRandom(-20, 20)}px ${getRandom(
      -20,
      20
    )}px ${getRandom(10, 50)}px ${newColor}`;
    const newPositionTop = getRandom(0, $(window).height() - element.height());
    const newPositionLeft = getRandom(0, $(window).width() - element.width());

    element.css({
      backgroundColor: newColor,
      borderColor: newBorderColor,
      boxShadow: newBoxShadow,
      top: newPositionTop,
      left: newPositionLeft,
    });
  };

  const animateElement = (element) => {
    const newColor = `rgb(${getRandom(0, 255)}, ${getRandom(
      0,
      255
    )}, ${getRandom(0, 255)})`;
    const newPositionTop = getRandom(0, $(window).height() - element.height());
    const newPositionLeft = getRandom(0, $(window).width() - element.width());

    element.animate(
      {
        top: newPositionTop,
        left: newPositionLeft,
      },
      {
        duration: 1000,
        easing: "linear",
        step: function (now, fx) {
          if (fx.prop === "top" || fx.prop === "left") {
            const progress = fx.now / fx.end;
            const startColor = $(this).css("background-color");
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
  };

  const interpolateColor = (color1, color2, factor) => {
    const c1 = color1.match(/\d+/g).map(Number);
    const c2 = color2.match(/\d+/g).map(Number);
    return `rgb(${c1
      .map((c, i) => Math.round(c + (c2[i] - c) * factor))
      .join(", ")})`;
  };

  const $circle = $("#circle");

  randomizeElement($circle);

  setInterval(() => {
    animateElement($circle);
  }, 1000);
});
