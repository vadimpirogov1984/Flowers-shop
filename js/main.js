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

$(document).ready(function() {
  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      // url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this)
        .find("input")
        .val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });
});
