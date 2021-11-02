(function ($, window, document) {
  "use strict";
  $(function () {
    //##Variables
    var $body = $("body"),
      $window = $(window),
      $doc = $(document),
      defaultEasing = [0.4, 0.0, 0.2, 1];
    //End Variables

    var element = document.querySelector(".header-Wrap");

    setTimeout(() => {
      element.classList.add("separation-Div");
    }, 2000);
    element.classList.remove("header-Wrap");
  });
})(window.jQuery, window, document);
