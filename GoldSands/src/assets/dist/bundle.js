(()=>{var e={822:()=>{$(document).ready((function(){$("#modal-btn").on("click",(function(e){e.preventDefault(),$("#popup__menu").fadeIn(100)})),$("#modal-mobile-btn").on("click",(function(e){e.preventDefault(),$("#popup__menu").css("display","block")})),$("#menu-content a").on("click",(function(){$("#popup__menu").fadeOut(500)})),$(".popup__menu-close").on("click",(function(e){e.preventDefault(),$("#popup__menu").fadeOut(500)})),$(".call").on("click",(function(e){e.preventDefault(),$("#callModal__menu").fadeIn(500)})),$(".callModal-close").on("click",(function(e){e.preventDefault(),$("#callModal__menu").fadeOut(500)})),$("#map__btn").on("click",(function(e){e.preventDefault(),$("#map__menu-mobile").fadeIn(500)})),$(".map-content .radio").on("click",(function(e){setTimeout($("#map__menu-mobile").fadeOut(500),8e3)})),$("#close-infr").on("click",(function(e){setTimeout($("#map__menu-mobile").fadeOut(500),8e3)})),$(".howbuy").on("click",(function(e){$(".includeModal").fadeIn(500)})),$(".includeModal-close").on("click",(function(e){setTimeout($(".includeModal").fadeOut(500),8e3)})),$(".increase").on("click",(function(e){$(".demonstration").toggleClass("demonstration__full")}))}))},259:()=>{let e=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&e.target.classList.add("element-show")}))}),{threshold:[.5]}),n=document.querySelectorAll(".element-animation");for(let o of n)e.observe(o)},536:()=>{new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,n){return'<span class="'+n+'">'+(e+1)+"</span>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},loop:!0});let e=new Swiper(".planeSwiper",{pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,n){return'<button class="'+n+'">Планировка  '+(e+1)+"</button>"}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},loop:!0,touchRatio:0,freeMode:!0,effect:"fade",touchStartPreventDefault:!1});new Swiper(".SwiperBuy",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar"},spaceBetween:30,observer:!0,observeParents:!0,observeSlideChildren:!0,breakpoints:{1400:{slidesPerView:3},768:{slidesPerView:2,spaceBetween:30},320:{slidesPerView:1,spaceBetween:10}}}).on("slideChange",(function(){const n=e.realIndex;console.log(n),$(".AfterBefore__mobile-number p").html(`Планировка ${n+1}`)}));let n=$(".includeModal__item");$(n).each((function(){this.onclick=()=>{for(dep of n)$(dep).removeClass("includeModal__item-actvie");$(this).addClass("includeModal__item-actvie"),$(".includeModal__item h6").css("display","none");let e=$(this).attr("id").slice(0,-4);console.log(e);let o=$("."+e);$(".includeModal__slide").css("display","none"),$(".include__text-item").css("display","none");let t=0;for(model of o)console.log(model),t++,$(model).css("display","block");t=0}}))}},n={};function o(t){var i=n[t];if(void 0!==i)return i.exports;var l=n[t]={exports:{}};return e[t](l,l.exports,o),l.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{"use strict";o.p,o(822),o(536),o(259),$(document).ready((function(){navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS")?console.log("I have safari"):(()=>{const e=$(".header");let n,o=$(window).scrollTop();$(window).scroll((()=>{n=$(window).scrollTop();const t=()=>e.hasClass("header_hidden");n>o&&!t()&&e.addClass("header_hidden"),n<o&&t()&&e.removeClass("header_hidden"),o=n}))})()})),$(".footer__list-open.item-open").slideDown(400);let e=0;$(document).ready((function(){$(".footer__list-item").each((function(){$(this).children("h5").on("click",(function(n){console.log($(this).parent().children(".footer__list-open")),0==$(this).parent().children(".footer__list-open").hasClass("item-open")?($(".footer__list-open.item-open").slideUp(400),$(".footer__list-open").removeClass("item-open"),$(".footer__list-item h5").removeClass("arrowOpen"),$(this).parent().children("h5").addClass("arrowOpen"),$(this).parent().children(".footer__list-open").addClass("item-open"),$(".footer__list-open.item-open").slideDown(400),e=1):($(this).parent().children("h5").removeClass("arrowOpen"),$(".footer__list-open.item-open").slideUp(400),$(".footer__list-open").removeClass("item-open"),e=0)}))}))}))})()})();