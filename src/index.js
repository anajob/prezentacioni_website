import "./scss/style.scss";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Splide from "@splidejs/splide";

var splide = new Splide(".headingSlider");
var rate = 0.1;
splide.on("autoplay:playing", function (rate) {
  console.log(rate); // 0-1
});

splide.mount();
// new Splide(".headingSlider").mount();
new Splide("#image-slider").mount();

AOS.init();

$(document).ready(function () {
  const $itemWithDropdown = $(".itemWithDropdown");
  const $dropdownMenu = $(".dropDownMenuDesktop");

  $itemWithDropdown.on("click", function () {
    $dropdownMenu.toggleClass("isActive");
  });

  $(".hamburgerMenu").on("click", function () {
    $(".mobileMenuContent").addClass("show");
    $("body").css({ overflow: "hidden" });
  });

  $(".mobileMenu .closeBtn").on("click", function () {
    $("body").css({ overflow: "visible" });
    $(".mobileMenuContent").removeClass("show");
  });

  $(".mainMobileNavigation > ul > li > a").on("click", function () {
    const $clickedEl = $(this);
    const $submenuEl = $(this).siblings(".mobileSubmenu");
    if ($clickedEl.hasClass("isOpen")) {
      $clickedEl.removeClass("isOpen");
      $submenuEl.slideUp();
    } else {
      $clickedEl.addClass("isOpen");
      $submenuEl.slideDown();
    }
  });

  $(".creditsTableTrigger").on("click", function () {
    const $trigger = $(this);
    const $content = $trigger.siblings(".creditsContent");

    if ($trigger.hasClass("isOpen")) {
      $trigger.removeClass("isOpen");
      $content.slideUp();
    } else {
      $trigger.addClass("isOpen");
      $content.slideDown();
    }
  });

  $(".creditsTable .closeBtn").on("click", function () {
    const $content = $(this).closest(".creditsContent");
    const $trigger = $content.siblings(".creditsTableTrigger");

    $trigger.removeClass("isOpen");
    $content.slideUp();
  });
});
