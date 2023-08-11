import { handleRequest } from "./axioscall.js";

function handleCalculator(event) {
  
  event.preventDefault();

  document.getElementById("convOutput").innerHTML = "Loading...";

  const coin1 = document.getElementById("coin1");
  const coin2 = document.getElementById("coin2");
 
  handleRequest(coin1,coin2);

}

const form = document.getElementById("calculator_form");
form.addEventListener("submit", handleCalculator);



$(".faq-collapse-item-card-header").click(function () {
  $(this).next(".faq-collapse-item-card-header-content").hasClass("active")
    ? ($(this)
        .next(".faq-collapse-item-card-header-content")
        .removeClass("active")
        .slideUp(),
      $(this).children("i").removeClass("fa fa-minus").addClass("fa fa-plus"))
    : ($(".faq-collapse-item-card-header-content")
        .removeClass("active")
        .slideUp(),
      $(".faq-collapse-item-card-header i")
        .removeClass("fa fa-minus")
        .addClass("fa fa-plus"),
      $(this)
        .next(".faq-collapse-item-card-header-content")
        .addClass("active")
        .slideDown(),
      $(this).children("i").removeClass("fa fa-plus").addClass("fa fa-minus"));
}),
  $(document).ready(function () {
    $(".share-button-main").on("click", function () {
      $(".share-buttons").toggleClass("open");
    });
  });
var CryptoZone = (function () {
  var e = $(window).width(),
    t = function () {
      var t = 0,
        a = 0;
      $(".header .sticky-header").removeClass("is-fixed"),
        $(".header").removeAttr("style"),
        jQuery(".header .top-bar").length > 0 &&
          e > 991 &&
          (t = parseInt($(".header .top-bar").outerHeight())),
        jQuery(".header").length > 0 &&
          (a =
            0 == (a = parseInt($(".header").height()))
              ? parseInt($(".header .main-bar").outerHeight())
              : a);
      var i = a + t;
      jQuery(".header").css("height", i);
    },
    a = function () {
      "use strict";
      jQuery(".dzload").each(function () {
        var e = siteUrl + $(this).attr("dzsrc");
        jQuery(this).hide(function () {
          jQuery(this).load(e, function () {
            jQuery(this).fadeIn("slow");
          });
        });
      }),
        e <= 991 &&
          jQuery(".navbar-nav > li > a, .sub-menu > li > a")
            .unbind()
            .on("click", function (e) {
              jQuery(this).parent().hasClass("open")
                ? jQuery(this).parent().removeClass("open")
                : (jQuery(this)
                    .parent()
                    .parent()
                    .find("li")
                    .removeClass("open"),
                  jQuery(this).parent().addClass("open"));
            });
    };
  return {
    init: function () {
      jQuery(".box-hover").on("mouseenter", function () {
        jQuery(this).parent().parent().find(".box-hover").removeClass("active"),
          jQuery(this).addClass("active");
      }),
        a(),
        (function () {
          if (jQuery(".image-select").length > 0) {
            const e = $(".image-select");
            e.find("option").each((e, t) => {
              const a = $(t),
                i = a.attr("data-thumbnail");
              i &&
                a.attr(
                  "data-content",
                  "<img src='%i'/> %s".replace(/%i/, i).replace(/%s/, a.text())
                );
            }),
              e.selectpicker();
          }
        })(),
        (function () {
          "use strict";
          jQuery("button.scroltop").on("click", function () {
            return jQuery("html, body").animate({ scrollTop: 0 }, 1e3), !1;
          }),
            jQuery(window).bind("scroll", function () {
              jQuery(window).scrollTop() > 900
                ? jQuery("button.scroltop").fadeIn(1e3)
                : jQuery("button.scroltop").fadeOut(1e3);
            });
        })(),
        (function () {
          "use strict";
          jQuery(window).on("scroll", function () {
            if (jQuery(".sticky-header").length > 0) {
              var e = jQuery(".sticky-header");
              $(window).scrollTop() > e.offset().top
                ? e.addClass("is-fixed")
                : e.removeClass("is-fixed");
            }
          });
        })(),
        jQuery(".default-select").length > 0 &&
          jQuery(".default-select").selectpicker(),
        (function () {
          for (
            var e = window.location,
              t = $("ul.navbar a")
                .filter(function () {
                  return this.href == e;
                })
                .addClass("active")
                .parent()
                .addClass("active");
            t.is("li");

          )
            t = t.parent().addClass("show").parent("li").addClass("active");
        })(),
        $(".wow").length > 0 &&
          new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
          }).init(),
        (function () {
          "use strict";
          jQuery(".mfp-gallery").length > 0 &&
            jQuery(".mfp-gallery").magnificPopup({
              delegate: ".mfp-link",
              type: "image",
              tLoading: "Loading image #%curr%...",
              mainClass: "mfp-img-mobile",
              gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
              image: {
                tError:
                  '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (e) {
                  return e.el.attr("title") + "<small></small>";
                },
              },
            }),
            jQuery(".mfp-video").length > 0 &&
              jQuery(".mfp-video").magnificPopup({
                type: "iframe",
                iframe: {
                  markup:
                    '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>',
                },
                callbacks: {
                  markupParse: function (e, t, a) {
                    t.title = a.el.attr("title");
                  },
                },
              }),
            jQuery(".popup-youtube, .popup-vimeo, .popup-gmaps").length > 0 &&
              $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1,
              });
        })(),
        t();
    },
    load: function () {},
    resize: function () {
      (e = $(window).width()),
        a(),
        setTimeout(function () {
          t();
        }, 500);
    },
  };
})();
jQuery(document).ready(function () {
  "use strict";
  CryptoZone.init(),
    jQuery(".navicon").on("click", function () {
      $(this).toggleClass("open");
    });
}),
  jQuery(window).on("resize", function () {
    "use strict";
    CryptoZone.resize();
  });
