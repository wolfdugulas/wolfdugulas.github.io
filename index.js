// Scrollra animációk hozzáadása
$(document).ready(function () {
    $(window).scroll(function () {
      // Fade in animáció
      $(".fade-in").each(function () {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("fade-in-animation");
        }
      });

      // Slide up animáció
      $(".slide-up").each(function () {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("slide-up-animation");
        }
      });

      // Spin animáció
      $(".spin").each(function () {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("spin-animation");
        }
      });
    });
  });