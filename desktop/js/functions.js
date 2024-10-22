(function ($) {
  $(document).ready(function () {
    var JsPdSlider = new Swiper(".swiper-container.js--pd-slider", {
      slidesPerView: 1,
      // spaceBetween: 15,
      // loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    $(".js--slide--full").lightGallery({
      thumbnail: true,
      enableDrag: false,
      closable: false,
      actualSize: false,
      share: false,
      rotate: false,
      flipHorizontal: false,
      flipVertical: false,
      thumbMargin: 8,
      thumbWidth: 120,
      thumbHeight: 80,
    });

    $(".js--open-slider--full").on("click", (e) => {
      e.preventDefault();
      $(".js--slide--full .swiper-slide:nth-child(1) > img").trigger("click");
    });
    $(".js--open-slider--video").on("click", function (e) {
      e.preventDefault();
      $(this).lightGallery({
        dynamic: true,
        thumbnail: true,
        enableDrag: false,
        closable: false,
        actualSize: false,
        share: false,
        rotate: false,
        flipHorizontal: false,
        flipVertical: false,
        counter: false,
        dynamicEl: [
          {
            src: "https://youtu.be/PJ_zomNMK_s",
            thumb: "http://i3.ytimg.com/vi/PJ_zomNMK_s/hqdefault.jpg",
          },
          {
            src: "https://youtu.be/_Gd8mbQ3-mI",
            thumb: "http://i3.ytimg.com/vi/_Gd8mbQ3-mI/hqdefault.jpg",
          },
        ],
      });
    });
    $(".js--open-slider--box").on("click", function (e) {
      e.preventDefault();
      $(this).lightGallery({
        enableDrag: false,
        closable: false,
        actualSize: false,
        share: false,
        rotate: false,
        flipHorizontal: false,
        flipVertical: false,
        counter: false,
        dynamic: true,
        dynamicEl: [
          {
            src: "images/gallery/main1.jpg",
            subHtml: "Trong hộp iPhone 11 Pro Max 64GB",
          },
        ],
      });
    });
    $(".js--open-slider--360").on("click", function (e) {
      e.preventDefault();
    });
    $(".js--open-pdf").on("click", function (e) {
      e.preventDefault();
    });

    function copyToClipboard(element) {
      var $temp = $("<input>");
      $("body").append($temp);
      var str = $(element)
        .text()
        .replace(/[-+()\s]/g, "");
      $temp.val(str).select();
      document.execCommand("copy");
      $temp.remove();
    }

    function removeClicked() {
      $(".st-sku").removeClass("clicked");
    }
    $(".st-sku").click(function () {
      copyToClipboard($(this));
      $(this).addClass("clicked");
      setTimeout(removeClicked, 2000);
    });

    $(".js--button-overlay").click(function (e) {
      e.preventDefault();
      $(this).closest(".js--st-card--article").addClass("expand");
      $(this).parent().hide();
    });
    $(".js--button-overlay").click(function (e) {
      e.preventDefault();
      $(this).closest(".js--st-card--article").css("height", "auto");
      $(this).parent().hide();
    });

    $(".js--c-question").each(function () {
      var child = $(this).children();
      var icon = child.find(".c-question__icon");
      icon.click(function () {
        if ($(this).parent().hasClass("active")) {
          child.removeClass("active");
          $(this).parent().removeClass("active");
        } else {
          child.removeClass("active");
          $(this).parent().addClass("active");
        }
      });
    });

    // loyalty
    var switchLoyalty = $(".c-cart__loyalty input");
    var discount = $(".c-cart__loyalty .discount");
    var slide = $(".c-cart__loyalty .wrap");
    switchLoyalty.click(function () {
      //
      if (switchLoyalty.is(":checked") == true) {
        discount.addClass("open");
        slide.addClass("active");
      } else {
        discount.removeClass("open");
        slide.removeClass("active");
      }
    });
    // slide
    var styleDefaults = Array.from(document.querySelectorAll(".js-slider"));
    styleDefaults.map((item) => {
      noUiSlider.create(item, {
        start: 20,
        connect: "lower",
        // connect: 'upper',
        range: {
          min: 0,
          max: 100,
        },
      });
    });

    $(".js--modal-slider").lightSlider({
      gallery: true,
      item: 1,
      vertical: true,
      verticalHeight: 390,
      vThumbWidth: 90,
      thumbItem: 4,
      thumbMargin: 10,
      slideMargin: 0,
    });
    // dropdown
    $(".c-dropdown").cDropdown();
    // Modal
    var modalNav = new Swiper(".swiper-container.js--modal-nav", {
      slidesPerView: "auto",
      spaceBetween: 16,
    });
    $(".js--open-modal").click(function (e) {
      e.preventDefault();
      $(".c-modal").fadeIn(300);
      $("body").addClass("c-modal--open");
      modalNav.update();
    });
    $(".js--find-shop,.js--open-360-box").click(function (e) {
      e.preventDefault();
      $("body").addClass("c-modal--open");
    });
    $(".js--open--normal").click(function (e) {
      e.preventDefault();
      $("body").addClass("c-modal--open");
    });

    $(".c-modal").click(function (e) {
      e.stopPropagation();
      if ($(this).hasClass("c-modal--visible")) {
        $(this).removeClass("c-modal--visible");
        // $(this).fadeOut(300);
        // $('body').removeClass('c-modal--open');
      } else {
        if (e.target != this) return;
        $(this).fadeOut(300);
        $("body").removeClass("c-modal--open");
      }
    });
    $(".modal").click(function (e) {
      e.stopPropagation();
      if (e.target != this) return;
      $(this).removeClass("modal--is-visible");
      $("body").removeClass("c-modal--open");
    });

    $(".js--modal--close,.js-modal__close").click(function (e) {
      e.preventDefault();
      $(".c-modal").fadeOut(300);
      $("body").removeClass("c-modal--open");
    });

    // Đoạn này khi scroll sẽ show nav
    $(".c-modal").on("scroll", function () {
      var modal = $(this);
      var topTitle = modal.find(".card-title").outerHeight();
      if ($(this).scrollTop() > 430 + topTitle + 26 + 100) {
        $(".c-modal__nav").addClass("fixed");
        modalNav.update();
      } else {
        $(".c-modal__nav").removeClass("fixed");
      }
    });
    // Đoạn này khi scroll sẽ active item ở nav
    $(".c-modal").scroll(function () {
      var modal = $(this);
      var lastId,
        topMenu = modal.find(".c-modal__nav"),
        topMenuHeight = topMenu.outerHeight(),
        menuItems = topMenu.find(".swiper-slide"),
        scrollItems = menuItems.map(function (i) {
          var item = $(`#` + $(this).attr("data-scroll"));
          if (item.length) {
            return item;
          }
        });
      var temp = $(".c-modal").offset().top;
      var cur = scrollItems.map(function (i) {
        if ($(this).offset().top - temp - topMenuHeight < 0) {
          return this;
        }
      });
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
      if (lastId !== id) {
        lastId = id;
        menuItems.removeClass("active swiper-slide-active");
        var index = $(`[data-scroll="${lastId}"]`).index();
        modalNav.slideTo(index, 800);
        modalNav.update();
        $(`[data-scroll="${lastId}"]`).addClass("active swiper-slide-active");
      }
    });
    // Hàm scroll tới element khi click
    function goToByScroll(id) {
      var container = $(".c-modal"),
        scrollTo = $("#" + id);
      container.animate(
        {
          scrollTop:
            scrollTo.offset().top -
            container.offset().top +
            container.scrollTop() -
            45,
        },
        800
      );
      setTimeout(() => {
        $(".c-modal").removeClass("c-modal--visible");
      }, 1000);
    }
    //Bắt sự kiện click và gọi hàm scroll
    $(".js--modal-nav .swiper-slide").click(function (e) {
      e.preventDefault();
      $(".js--modal-nav .swiper-slide").removeClass("active");
      $(this).addClass("active");
      var data = $(this).attr("data-scroll");
      goToByScroll(data);
    });

    $(".js--modal-nav")
      .on("mousedown", function () {
        $(".c-modal").addClass("c-modal--visible");
        // if ($('.c-modal').hasClass('c-modal--visible')) {
        // 	setTimeout(removeClicked1, 1500);
        // }
      })
      .on("mouseup", function () {
        $(".c-modal").addClass("c-modal--visible");
      })
      .on("mouseenter", function () {
        $(".c-modal").addClass("c-modal--visible");
      })
      .on("mouseleave", function () {
        $(".c-modal").addClass("c-modal--visible");
        setTimeout(() => {
          $(".c-modal").removeClass("c-modal--visible");
        }, 1500);
      });
    // scroll page active

    $(
      ".js--boxFeature li, .js--boxMutilFeature li, .js--promoProduct .st-promoProduct__item"
    ).click(function (e) {
      var cb = $(this).find(":checkbox")[0];
      if (e.target != cb) cb.checked = !cb.checked;
    });

    $(".js--select-item").click(function (e) {
      var cb = $(this).find(":radio")[0];
      if (e.target != cb) cb.checked = !cb.checked;
      $(this).parent().find(".js--select-item").removeClass("active");
      $(this).addClass("active");
    });

    $(".js--select-color-item").click(function (e) {
      $(".js--select-color-item").removeClass("active");
      $(this).addClass("active");
    });

    // dropdown
    $(".c-fs").click(function (e) {
      var dropdown = $(".c-dropdown");
      if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown.find(".c-dropdown-menu").removeClass("open");
      }
    });
    $(".js--popup-dropdown").click(function (e) {
      var dropdown = $(".c-dropdown");
      if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown.find(".c-dropdown-menu").removeClass("open");
      } else {
        dropdown.click(function () {
          $(".c-dropdown-menu").removeClass("open");
          $(this).find(".c-dropdown-menu").addClass("open");
        });
      }
    });

    // search product
    $(".js--input-w-product").keyup(function () {
      $(this)
        .closest(".js--search-product")
        .find(".js--suggestion-w-product")
        .addClass("open");
    });
    $(document).click(function (e) {
      var dropdown = $(".js--search-product");
      if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        dropdown.find(".js--suggestion-w-product").removeClass("open");
      }
    });

    $(".js--open-search-product").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var trigger = $(this);
      var form = trigger.parent().next();
      trigger.hide();
      form.show();
      $(document).click(function (e) {
        if (!form.is(e.target) && form.has(e.target).length === 0) {
          trigger.show();
          form.hide();
        }
      });
    });

    // product
    $(".product__img-promo").each(function () {
      $(this)
        .children()
        .click(function () {
          $(this).siblings().removeClass("active");
          const data = $(this).data();
          $(this).addClass("active");
          $(this).parent().next().text(data.content);
        });
    });

    // product quality

    $(".js--btn-plus").click(function () {
      var value = parseInt($(this).prev("input").val());
      if (1 < value < 10) {
        $(this).siblings(".js--btn-minus").removeClass("disabled");
        $(this)
          .prev()
          .val(+value + 1);
        if (value + 1 == 10) {
          $(this).addClass("disabled");
        }
      }
    });
    $(".js--btn-minus").click(function () {
      var value = parseInt($(this).next("input").val());
      if (1 < value - 1 < 10) {
        $(this).siblings(".js--btn-plus").removeClass("disabled");
        $(this)
          .next()
          .val(+value - 1);
        if (parseInt(value) - 1 == 1) {
          $(this).addClass("disabled");
        }
      }
    });

    // cart

    var cartProductSuggest = new Swiper(".js--cart__product-suggest", {
      slidesPerView: 3,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next.js--cart__slide-arrow ",
        prevEl: ".swiper-button-prev.js--cart__slide-arrow ",
      },
    });
    var ssVideos = new Swiper(".js--videos", {
      slidesPerView: 4,
      spaceBetween: 16,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // chuyen trang dien may - gia dung
    var newsSwiper = new Swiper(".news__section-swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var productRelated = new Swiper(".product__related-slide .swiper", {
      slidesPerView: 4,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  });
})(window.jQuery);

jQuery.fn.extend({
  cDropdown: function () {
    return this.each(function () {
      var containermenu = $(this);
      var arrow = containermenu.find(".c-dropdown-arrow");
      var itemmenu = containermenu.find(".c-dropdown-button");
      itemmenu.click(function (e) {
        var submenuitem = containermenu.find(".c-dropdown-menu");
        itemmenu.addClass("active");
        submenuitem.addClass("open");
        arrow.addClass("active");
      });

      $(document).click(function (e) {
        if (
          !containermenu.is(e.target) &&
          containermenu.has(e.target).length === 0
        ) {
          var isopened = containermenu.find(".c-dropdown-menu").css("display");
          if (isopened == "block") {
            containermenu.find(".c-dropdown-menu").removeClass("open");
            arrow.removeClass("active");
            itemmenu.removeClass("active");
          }
        }
      });
    });
  },
});

// Ẩn/hiện danh sách khuyến mãi
$(".js-promotion").click(function (e) {
  e.preventDefault();
  $(".list-promotion").toggle();
  let icon = $(this).find("i");
  let text = $(this).find("span");
  if ($(this).hasClass("active")) {
    $(text).text("Thu gọn khuyến mại");
    icon.removeClass("ic-angle-down");
    icon.addClass("ic-angle-up");
  } else {
    icon.removeClass("ic-angle-up");
    icon.addClass("ic-angle-down");
    $(text).text("Xem chi tiết khuyến mãi");
  }
  $(this).toggleClass("active");
});

// Hàm nảy viết chỉ chuyên làm replace text
$(".dropdown-component a").click(function (e) {
  e.preventDefault();
  var Item = $(this);
  var dropdownItemTxt = Item.text();
  var dropdownParent = Item.closest("dropdown-component");
  var dropdownButtonTxt = dropdownParent.find(".dropdown-component-button p");

  // function replace text when click item
  dropdownButtonTxt.html(dropdownItemTxt);
  // active item when click
  Item.addClass("active");
});

// Hàm nảy viết chỉ chuyên làm ẩn hiện 1 div khác
$(".dropdown-toggle-component a").click(function (e) {
  e.preventDefault();
  var Item = $(this);
  // get data-value of another component
  var dropdownItemData = Item.attr("data-item");

  // trigger all another element hide
  // dropdown-sub is children element of main element
  $(".dropdown-sub").removeClass("active");

  // this element show
  $(`.${dropdownItemData}`).addClass("active");
});

function modalMini() {
  const modalMini = $('.modal-mini'),
        closeMini = $('.js-close-mini');
  // show modal mini when click
  $('.open-modal-mini').on('click', function (e) {
    modalMini.addClass('open');
  });
  // click btn close remove this modal mini
  closeMini.each(function () {
    closeMini.on('click', function (param) {
      if (modalMini.hasClass('open')) {
        modalMini.removeClass('open');
      }
      if (modalMini.hasClass('modal--is-visible')) {
        modalMini.removeClass('modal--is-visible');
      }
    });
  });
}
modalMini();