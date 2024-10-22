(function ($) {
  $(document).ready(function () {
    var JsPdSlider = new Swiper(".swiper-container.js--pd-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 800,
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
      thumbMargin: 4,
      thumbContHeight: 72,
      thumbWidth: 96,
      thumbHeight: "64px",
      controls: false,
      fullScreen: false,
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
        enableSwipe: false,
        enableDrag: false,
        closable: false,
        actualSize: false,
        share: false,
        rotate: false,
        flipHorizontal: false,
        flipVertical: false,
        thumbMargin: 4,
        thumbContHeight: 72,
        thumbWidth: 96,
        thumbHeight: "64px",
        controls: false,
        fullScreen: false,
        counter: false,
        download: false,
        dynamicEl: [
          {
            src: "https://youtu.be/PJ_zomNMK_s",
            thumb: "http://i3.ytimg.com/vi/PJ_zomNMK_s/hqdefault.jpg",
            subHtml: "Trong hộp iPhone 11 Pro Max 64GB",
          },
          {
            src: "https://youtu.be/_Gd8mbQ3-mI",
            thumb: "http://i3.ytimg.com/vi/_Gd8mbQ3-mI/hqdefault.jpg",
            subHtml: "Trong hộp iPhone 11 Pro Max 64GB",
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
        controls: false,
        fullScreen: false,
        download: false,
        dynamicEl: [
          {
            src: "../images/gallery/main1.jpg",
            subHtml: "Trong hộp iPhone 11 Pro Max 64GB",
          },
        ],
      });
    });
    $(".js--open-slider--360").on("click", function (e) {
      e.preventDefault();
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
    // loyalty
    var switchLoyalty = $(".c-cart__loyalty .js-switch");

    var discount = $(".c-cart__loyalty .discount");
    var slide = $(".c-cart__loyalty .js-slide");
    switchLoyalty.click(function () {
      if (switchLoyalty.is(":checked") == true) {
        discount.addClass("open");
        slide.addClass("active");
      } else {
        discount.removeClass("open");
        slide.removeClass("active");
      }
    });
    // -----------------
    var switchVoucher = $(".js-switch-voucher");
    var blockVoucher = $(".c-cart__loyalty .block-voucher");
    switchVoucher.click(function () {
      if (switchVoucher.is(":checked") == true) {
        blockVoucher.addClass("active");
      } else {
        blockVoucher.removeClass("active");
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
    // image 360 degree
    $("#threesixty").spritespin({
      // path to the source images.
      source: [
        "../images/360/1.jpg",
        "../images/360/2.jpg",
        "../images/360/3.jpg",
        "../images/360/4.jpg",
        "../images/360/5.jpg",
        "../images/360/6.jpg",
        "../images/360/7.jpg",
        "../images/360/8.jpg",
        "../images/360/9.jpg",
        "../images/360/10.jpg",
        "../images/360/11.jpg",
        "../images/360/12.jpg",
        "../images/360/13.jpg",
        "../images/360/14.jpg",
        "../images/360/15.jpg",
        "../images/360/16.jpg",
        "../images/360/17.jpg",
        "../images/360/18.jpg",
        "../images/360/19.jpg",
        "../images/360/20.jpg",
        "../images/360/21.jpg",
        "../images/360/22.jpg",
        "../images/360/23.jpg",
        "../images/360/24.jpg",
        "../images/360/25.jpg",
        "../images/360/26.jpg",
        "../images/360/27.jpg",
        "../images/360/28.jpg",
        "../images/360/29.jpg",
        "../images/360/30.jpg",
        "../images/360/31.jpg",
        "../images/360/32.jpg",
        "../images/360/33.jpg",
        "../images/360/34.jpg",
        "../images/360/35.jpg",
        "../images/360/36.jpg",
      ],
      // animate:false,
      frameTime: 200,
      width: 960, // width in pixels of the window/frame
      height: 640, // height in pixels of the window/frame
    });

    var JSPdPostSlider = new Swiper(".swiper-container.js--pd-contentSlider", {
      speed: 800,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    $(".js--button-vm").click(function (e) {
      e.preventDefault();
      $(this).closest(".js--st-card--article").css("height", "auto");
      $(this).hide();
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

    $(".js--modal-slider").lightSlider({
      gallery: true,
      item: 1,
      control: false,
      vertical: true,
      verticalHeight: 170,
      vThumbWidth: 40,
      thumbItem: 4,
      thumbMargin: 4,
      slideMargin: 0,
    });

    $(
      ".js--boxFeature li, .js--boxMutilFeature li, .js--promoProduct .st-promoProduct__item"
    ).click(function (e) {
      var cb = $(this).find(":checkbox")[0];
      if (e.target != cb) cb.checked = !cb.checked;
      console.log($(this));
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
    function goToByScroll(id) {
      var container = $(".c-modal"),
        scrollTo = $("#" + id);
      container.animate(
        {
          scrollTop:
            scrollTo.offset().top -
            container.offset().top +
            container.scrollTop() -
            39,
        },
        700
      );
    }
    $(".js--modal-nav .swiper-slide").click(function (e) {
      e.preventDefault();
      $(".js--modal-nav .swiper-slide").removeClass("active");
      $(this).addClass("active");
      var data = $(this).attr("data-scroll");
      goToByScroll(data);
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
      if (e.target != this) return;
      $(this).fadeOut(300);
      $("body").removeClass("c-modal--open");
    });
    $(".modal").click(function (e) {
      console.log('111');
      e.stopPropagation();
      if (e.target != this) return;
      $(this).removeClass("modal--is-visible");
      $("body").removeClass("c-modal--open");
    });
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

    $(".js--modal--close").click(function (e) {
      e.preventDefault();
      $(".c-modal").fadeOut(300);
      $("body").removeClass("c-modal--open");
    });
    $(".js-modal__close").click(function (e) {
      $("body").removeClass("c-modal--open");
    });
    $(".js--modal-nav .swiper-slide").click(function () {
      // $('.js--modal-nav .swiper-slide').removeClass('swiper-slide-active');
      // $(this).addClass('swiper-slide-active');
      $(".js--modal-nav .swiper-slide").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("scroll", function () {
      var scroll = $(this).scrollTop();
      if (scroll > 48 && scroll < $(".l-pd-right").position().top + 62) {
        $(".st-slider__feature").addClass("fixed");
      } else {
        $(".st-slider__feature").removeClass("fixed");
      }
    });

    const sliderImage = document.querySelector(".st-slider");
    const sliderFeature = document.querySelector(".st-slider__feature");
    // get offset of element
    function offset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    const sliderOffset = offset(sliderImage);
    function checkPosition() {
      // 16 is margin
      const slideBottom = sliderOffset.top + sliderImage.offsetHeight + 16;
      const isNotScrollPast = window.scrollY > slideBottom;
      if (isNotScrollPast) {
        sliderFeature.classList.add("fixed");
      } else {
        sliderFeature.classList.remove("fixed");
      }
    }
    window.addEventListener("scroll", checkPosition);

    $(".c-modal").on("scroll", function () {
      var modal = $(this);
      var topTitle = modal.find(".card-title").outerHeight();
      if ($(this).scrollTop() > 188 + topTitle + 20) {
        $(".c-modal__nav").addClass("fixed");
        modalNav.update();
      } else {
        $(".c-modal__nav").removeClass("fixed").fadeOut(300);
      }
    });
    $(".c-modal").scroll(function () {
      var modal = $(".c-modal");
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

    // input on mobile
    $(".js--search-mobile").click(function (e) {
      $(this).addClass("expand");
      $("body").addClass("c-modal--open");
    });
    $(".js--search-front").click(function (e) {
      $(this).prev().addClass("expand");
    });
    $(".js--search-mobile__input").keyup(function (e) {
      var parent = $(this).closest(".js--search-mobile");
      if ($(this).val().length > 0) {
        $(this).addClass("active");
        parent.find(".js--search-mobile__suggest").addClass("open");
      } else {
        $(this).removeClass("active");
      }
    });
    $(".js--search-mobile__clear").click(function (e) {
      var parent = $(this).closest(".js--search-mobile");
      e.stopPropagation();
      $(this).siblings("input").removeClass("active").val("");
      parent.find(".js--search-mobile__suggest").removeClass("open");
    });
    $(".js--search-mobile__close").click(function (e) {
      var parent = $(this).closest(".js--search-mobile");
      e.preventDefault();
      e.stopPropagation();
      parent.removeClass("expand");
      parent.find("input").removeClass("active").val("");
      parent.find(".js--search-mobile__suggest").removeClass("open");
      $("body").removeClass("c-modal--open");
    });

    $(".js--open-search-product").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var trigger = $(this);
      var form = trigger.parent().next();
      trigger.hide();
      form.show();
      var input = $(".js--search-mobile");
      $(document).click(function (e) {
        if (!input.is(e.target) && input.has(e.target).length === 0) {
          trigger.show();
          input.hide();
        }
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
    var cartProductSuggest = new Swiper(
      ".swiper-container.js--cart__product-suggest",
      {
        slidesPerView: 2.2,
        spaceBetween: 16,
      }
    );

    // shock deal
    $(".js-show-result").click(function () {
      $(".sock-deal .block-main").addClass("extend");
      $(".sock-deal .block-result1").addClass("open");
      $(".sock-deal .block-result2").addClass("open");
      if ($(".sock-deal .block-result2").hasClass("open") == true) {
        $(".sock-deal .block-result1").addClass("extend");
      }
    });
    $(".js-modal-sockdeal").click(function () {
      $("#modal-sock-deal").addClass("modal--is-visible");
    });
    $(".js-modal-close").click(function () {
      $(".modal").removeClass("modal--is-visible");
    });

    // chuyen trang dien may - gia dung
    var newsSwiper = new Swiper(".news__section-swiper .swiper", {
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
      centeredSlides: true,
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
function modalMini() {
  const modalMini = $('.modal-mini'),
    closeMini = $('.js-close-mini');
  // show modal mini when click
  $('.open-modal-mini').on('click', function (e) {
    e.preventDefault();
    modalMini.addClass('modal--is-visible');
    modalMini.show();

  });
  // click btn close remove this modal mini
  closeMini.each(function () {
    closeMini.on('click', function () {
      if (modalMini.hasClass('modal--is-visible')) {
        modalMini.removeClass('modal--is-visible');
      }
    });
  });

  $(".c-modal").click(function (e) {
    if (e.target != this) return;
    $(this).fadeOut(300);
    modalMini.removeClass('modal--is-visible');
  });
}
modalMini();