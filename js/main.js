$(document).ready(function() {
  $(function() {
    $(".multiple-review").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      autoplaySpeed: 2000,
      centerPadding: "0",
      appendArrows: ".arrow",
      prevArrow: '<img src="images/s1.png" class="slick-arrow slick-prev">',
      nextArrow: '<img src="images/s2.png" class="slick-arrow slick-next">',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
            // dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  $(function() {
    $(".menu__icon").on("click", function() {
      $(this)
        .closest(".menu")
        .toggleClass("menu_state_open");
    });

    $(".menu__links-item").on("click", function() {
      $(this)
        .closest(".menu")
        .removeClass("menu_state_open");
    });
  });

  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [53.18735, 43.99912],
      zoom: 16
    });
    myMap.behaviors.disable("scrollZoom");

    // Отключение лишних инструментов
    myMap.controls
      .remove("zoomControl")
      .remove("rulerControl")
      .remove("trafficControl")
      .remove("typeSelector")
      .remove("geolocationControl")
      .remove("fullscreenControl")
      .remove("searchControl");

    var myPlacemark = new ymaps.Placemark(
      [53.185767, 43.99915],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../images/pin.png",
        iconImageSize: [40, 58],
        iconImageOffset: [-3, -42]
      }
    );
  }
});

// // Отправка заявки
// $(document).ready(function() {
//   $("#form").submit(function() {
//     // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
//     if (document.form.name.value == "" || document.form.tel.value == "") {
//       valid = false;
//       return valid;
//     }
//     $.ajax({
//       type: "POST",
//       url: "php/mail.php",
//       data: $(this).serialize()
//     }).done(function() {
//       $(".js-overlay-thank-you").fadeIn();
//       $(this)
//         .find("input")
//         .val("");
//       $("#form").trigger("reset");
//     });
//     return false;
//   });
// });

// // Закрыть попап «спасибо»
// $(".js-close-thank-you").click(function() {
//   // по клику на крестик
//   $(".js-overlay-thank-you").fadeOut();
// });

// $(document).mouseup(function(e) {
//   // по клику вне попапа
//   var popup = $(".popup");
//   if (e.target != popup[0] && popup.has(e.target).length === 0) {
//     $(".js-overlay-thank-you").fadeOut();
//   }
// });

// // Маска ввода номера телефона (плагин maskedinput)
// $(function($) {
//   $('[name="phone"]').mask("+7(999) 999-9999");
// });
// Отправка заявки

$(document).ready(function() {
  $("#form1").submit(function() {
    // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    if (document.form1.name1.value == "" || document.form1.phone1.value == "") {
      valid = false;
      return valid;
    }
    $.ajax({
      type: "POST",
      url: "php/mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(".js-overlay-thank-you").fadeIn();
      $(this)
        .find("input")
        .val("");
      $("#form1").trigger("reset");
    });
    return false;
  });
});

// Закрыть попап «спасибо»
$(".js-close-thank-you").click(function() {
  // по клику на крестик
  $(".js-overlay-thank-you").fadeOut();
});

$(document).mouseup(function(e) {
  // по клику вне попапа
  var popup = $(".popup");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".js-overlay-thank-you").fadeOut();
  }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($) {
  $('[name="phone1"]').mask("+7(999) 999-9999");
});
