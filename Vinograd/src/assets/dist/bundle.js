(()=>{var e={733:()=>{var e=0;!function(){let t=document.querySelector(".home29-hover"),n=document.querySelector(".home28-hover"),r=document.querySelector(".home"),s=document.querySelector(".home29"),l=document.querySelector(".home28"),i=document.getElementById("home1Modal"),c=document.querySelector(".home__back-arrow");t.onmouseover=e=>{e.stopPropagation(),r.style.background="url(./assets/img/home1.png) no-repeat center"},t.onmouseout=e=>{e.stopPropagation(),r.style.background="url(./assets/img/home.png) no-repeat center"},n.onmouseover=e=>{e.stopPropagation(),r.style.background="url(./assets/img/home2.png) no-repeat center"},n.onmouseout=e=>{e.stopPropagation(),r.style.background="url(./assets/img/home.png) no-repeat center"},document.querySelector(".home27-hover").onmouseover=e=>{e.stopPropagation(),r.style.background="url(./assets/img/home3.png) no-repeat center"},document.querySelector(".home27-hover").onmouseout=e=>{e.stopPropagation(),r.style.background="url(./assets/img/home.png) no-repeat center"},t.onclick=()=>{$(".home__header h2").html("Выберите этаж"),c.style.display="block",e=0,r.style.background="url(./assets/img/currenthome1.png) no-repeat center",t.style.display="none",n.style.display="none",document.querySelector(".home27-hover").style.display="none",s.style.display="block",t.onmouseout=()=>{r.style.background="url(./assets/img/currenthome1.png) no-repeat center"},t.onmouseover=()=>{r.style.background="url(./assets/img/currenthome1.png) no-repeat center"},a(r,t,n,l,s,c,i),o()},n.onclick=()=>{$(".home__header h2").html("Выберите этаж"),c.style.display="block",e=0,r.style.background="url(./assets/img/currenthome2.png) no-repeat center",t.style.display="none",n.style.display="none",document.querySelector(".home27-hover").style.display="none",l.style.display="block",n.onmouseout=()=>{r.style.background="url(./assets/img/currenthome2.png) no-repeat center"},n.onmouseover=()=>{r.style.background="url(./assets/img/currenthome2.png) no-repeat center"},a(r,t,s,n,l,c,i),o()},document.querySelector(".home27-hover").onclick=()=>{$(".home__header h2").html("Выберите этаж"),c.style.display="block",e=0,r.style.background="url(./assets/img/currenthome3.png) no-repeat center",t.style.display="none",n.style.display="none",document.querySelector(".home27-hover").style.display="none",document.querySelector(".home27").style.display="block",document.querySelector(".home27-hover").onmouseout=()=>{r.style.background="url(./assets/img/currenthome3.png) no-repeat center"},document.querySelector(".home27-hover").onmouseover=()=>{r.style.background="url(./assets/img/currenthome3.png) no-repeat center"},a(r,t,s,n,l,c,i),o()}}();var t=0;function o(){let o=document.querySelectorAll(".home29 .stageActive"),n=document.querySelector(".home29"),l=document.getElementById("home1Modal"),i=document.querySelector(".home__back-arrow"),c=document.querySelector(".home29-hover"),d=document.querySelector(".home"),u=document.querySelector(".home__orientir1"),m=document.querySelector(".home__orientir2"),p=document.querySelector(".home28-hover"),h=document.querySelector(".home28"),y=0;$(o).each((function(){this.onclick=o=>{o.preventDefault(),n.style.display="none",u.style.display="none",m.style.display="none";let a=$(this).attr("id");$(".currentStage p").html(`${a} ЭТАЖ`),$(l).fadeIn(500),$("#home1Modal-slider").css("display","block"),$("#home2Modal-slider").css("display","none"),$("#home3Modal-slider").css("display","none"),e=1,y=1,t=1,r(a),s()}})),$(".home28 .stageActive").each((function(){this.onclick=o=>{o.preventDefault(),h.style.display="none",u.style.display="none",m.style.display="none";let n=$(this).attr("id");$(".currentStage p").html(`${n} ЭТАЖ`),$(l).fadeIn(500),$("#home1Modal-slider").css("display","none"),$("#home2Modal-slider").css("display","block"),$("#home3Modal-slider").css("display","none"),e=1,y=2,r(n),t=2,s()}})),$(".home27 .stageActive").each((function(){this.onclick=o=>{o.preventDefault(),document.querySelector(".home27").style.display="none",u.style.display="none",m.style.display="none";let n=$(this).attr("id");$(".currentStage p").html(`${n} ЭТАЖ`),$(l).fadeIn(500),$("#home1Modal-slider").css("display","none"),$("#home2Modal-slider").css("display","none"),$("#home3Modal-slider").css("display","block"),e=1,y=3,r(n),t=3,s()}})),a(d,c,n,p,h,i,l)}var n=0;function r(e,t){1==n?($("#home1Modal-slider").slick("unslick"),$("#home2Modal-slider").slick("unslick"),$("#home3Modal-slider").slick("unslick"),$("#home1Modal-slider").slick({dots:!1,initialSlide:e-1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>'}),$("#home2Modal-slider").slick({dots:!1,initialSlide:e-1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>'}),$("#home3Modal-slider").slick({dots:!1,initialSlide:e-1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>'})):(n=1,$("#home1Modal-slider").slick({dots:!1,initialSlide:e-1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>'}),$("#home2Modal-slider").slick({dots:!1,initialSlide:e-1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>'}),$("#home3Modal-slider").slick({dots:!1,initialSlide:e-1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>'})),$("#home1Modal-slider").on("afterChange",(function(e,t,o,n){$(".currentStage p").html(`${o+1} ЭТАЖ`)})),$("#home2Modal-slider").on("afterChange",(function(e,t,o,n){$(".currentStage p").html(`${o+1} ЭТАЖ`)})),$("#home3Modal-slider").on("afterChange",(function(e,t,o,n){$(".currentStage p").html(`${o+1} ЭТАЖ`)}))}function s(){let t=document.querySelectorAll(".hoverScheme"),o=document.querySelectorAll(".home1Modal-slide .home1Modal__scheme-text");$(".home__header h2").html("Выберите этаж и квартиру"),$(t).each((function(){this.onmouseover=e=>{let t=$(this).attr("data-number"),n=$(this).attr("data-room"),r=$(this).attr("data-square"),s=$(this).attr("data-price");$(".num_home").html(`${t}`),$(".room").html(`${n}`),$(".square").html(`${r}`),$(".price__home").html(`${s}`),$(o).css("display","block")},this.onmouseout=e=>{$(o).css("display","none")},this.onclick=t=>{t.preventDefault(),dataNumber=$(this).attr("data-number"),dataRoom=$(this).attr("data-room"),dataSquare=$(this).attr("data-square"),dataPrice=$(this).attr("data-price"),dataSingle=$(this).attr("data-single"),dataSrcScheme=$(this).attr("data-srcscheme"),function(t,o,n,r,s,l){let i=document.querySelector(".home29-hover"),c=document.querySelector(".home"),d=document.querySelector(".home29"),u=document.querySelector(".home__back-arrow"),m=document.getElementById("home1Modal"),p=document.querySelector(".home28-hover"),h=document.querySelector(".home28");e=2,$(".home__header h2").html(`КВартира №${t}`),$(".home1Modal-slider").fadeOut(),$(".home1Modal__single").fadeIn(),$(".home1Modal__single .home1Modal__scheme-text").fadeIn(),$(".home1Modal__single .num_home").html(`${t}`),$(".home1Modal__single .room").html(`${o}`),$(".home1Modal__single .square").html(`${n}`),$(".home1Modal__single .price__home").html(`${r}`),$(".home1Modal__single-image img").attr("src",`${s}`),$(".home1Modal__single-scheme img").attr("src",`${l}`),a(c,i,d,p,h,u,m)}(dataNumber,dataRoom,dataSquare,dataPrice,dataSingle,dataSrcScheme)}}))}function a(o,n,r,s,a,l,i){l.onclick=()=>{0==e?($(".home__header h2").html("Выберите квартиру"),l.style.display="none",n.style.display="block",r.style.display="none",document.querySelector(".home28").style.display="none",s.style.display="block",document.querySelector(".home27").style.display="none",document.querySelector(".home27-hover").style.display="block",o.style.background="url(./assets/img/home.png) no-repeat center",n.onmouseover=e=>{e.stopPropagation(),o.style.background="url(./assets/img/home1.png) no-repeat center"},n.onmouseout=e=>{e.stopPropagation(),o.style.background="url(./assets/img/home.png) no-repeat center"},s.onmouseover=e=>{e.stopPropagation(),o.style.background="url(./assets/img/home2.png) no-repeat center"},s.onmouseout=e=>{e.stopPropagation(),o.style.background="url(./assets/img/home.png) no-repeat center"},document.querySelector(".home27-hover").onmouseover=e=>{e.stopPropagation(),o.style.background="url(./assets/img/home3.png) no-repeat center"},document.querySelector(".home27-hover").onmouseout=e=>{e.stopPropagation(),o.style.background="url(./assets/img/home.png) no-repeat center"},e=1):1==e?($(".home__have").html("<p>Доступных <br> квартир в ЖК </p><span>118</span>"),$(".home__header h2").html("Выберите этаж"),$(i).fadeOut(500),1==t?r.style.display="block":2==t?a.style.display="block":3==t&&(document.querySelector(".home27").style.display="block"),document.querySelector(".home__orientir1").style.display="block",document.querySelector(".home__orientir2").style.display="block",e=0):2==e&&($(".home__header h2").html("Выберите этаж и квартиру"),$(".home1Modal__single").fadeOut(),1==t?$("#home1Modal-slider").fadeIn():2==t?$("#home2Modal-slider").fadeIn():3==t&&$("#home3Modal-slider").fadeIn(),e=1)}}},589:()=>{$(document).ready((function(){$("#modal-btn").on("click",(function(e){e.preventDefault(),$("#popup__menu").fadeIn(500)})),$("#modal-mobile-btn").on("click",(function(e){e.preventDefault(),$("#popup__menu").fadeIn(500)})),$(".popup__menu-close").on("click",(function(e){e.preventDefault(),$("#popup__menu").fadeOut(500)}))})),$(document).ready((function(){$("#map__btn").on("click",(function(e){e.preventDefault(),$("#map__menu-mobile").fadeIn(500)})),$(".map-content .radio").on("click",(function(e){setTimeout($("#map__menu-mobile").fadeOut(500),8e3)}))})),$(document).ready((function(){$(".call").on("click",(function(e){e.preventDefault(),$(".callModal").fadeIn(500)})),$(".callModal-close").on("click",(function(e){e.preventDefault(),$(".callModal").fadeOut(500)}))})),$(document).ready((function(){$(".increase").on("click",(function(e){e.preventDefault(),$(".demonstration").fadeOut(),$(".demonstration__image-big").addClass("increase-image").delay(1e3),$(".demonstration").css("margin-left","0"),$(".demonstration__image-small").css("display","none"),$(".decrease").css("display","block"),$(".increase").css("display","none"),$(".demonstration__text-parag").css("display","none"),$(".demonstration").addClass("demonstration-increase"),$(".demonstration-increase").fadeIn()})),$(".decrease").on("click",(function(e){e.preventDefault(),$(".demonstration__image-big").removeClass("increase-image"),$(".demonstration").css("margin-left","5%"),$(".demonstration__image-small").css("display","block"),$(".decrease").css("display","none"),$(".increase").css("display","block"),$(".demonstration__text-parag").css("display","block"),$(".demonstration").removeClass("demonstration-increase")}))}))},746:()=>{document.addEventListener("DOMContentLoaded",(()=>{let e=document.querySelector(".grH"),t=document.querySelector(".grT"),o=document.querySelector(".gret_image"),n=document.querySelector(".greeting__image"),r=document.querySelector(".private__text-head"),s=document.querySelector(".private__image"),a=document.querySelector(".demonstration__image-big"),l=document.querySelector(".include__header"),i=document.querySelector(".include__image"),c=200,d=650,u=1500,m=3500;window.addEventListener("scroll",(()=>{let p=window.scrollY;p>c&&(e.classList.add("greeting__animate"),t.classList.add("greeting__animate"),n.classList.add("greeting__image-animate"),c=0),p>d&&(o.classList.add("greeting__image-animate"),d=0),p>u&&(s.classList.add("demonstration__image-big-animate"),r.classList.add("greeting__animate"),u=0),p>m&&(a.classList.add("demonstration__image-big-animate"),m=0),p>6800&&(l.classList.add("greeting__animate"),i.classList.add("include__image-animate"),m=0)}))}))},536:()=>{$(document).ready((function(){$(".private-slider").slick({dots:!0,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>',customPaging:function(e,t){return $(e.$slides[t]).data(),'<a class="dot">'+(t+=1)+"</a>"},responsive:[{breakpoint:768,settings:{dots:!1}}]})})),$(document).ready((function(){$(".demonstration-slider").slick({dots:!0,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>',customPaging:function(e,t){return $(e.$slides[t]).data(),'<a class="dot">'+(t+=1)+"</a>"},responsive:[{breakpoint:768,settings:{dots:!1}}]})})),$(document).ready((function(){$(".increaseDem__slider").slick({dots:!0,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>',customPaging:function(e,t){return $(e.$slides[t]).data(),'<a class="dot">'+(t+=1)+"</a>"},responsive:[{breakpoint:768,settings:{dots:!1}}]})})),$(document).ready((function(){$("#HowBuy").on("click",(function(e){e.preventDefault(),$(".includeModal").fadeIn(500),$("#includeModal-slider").slick({slidesToShow:3,dots:!1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>',responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:567,settings:{slidesToShow:1}}]}),$("#includeModal-slider2").slick({slidesToShow:3,dots:!1,prevArrow:'<button class="prevPrivate"> </button>',nextArrow:'<button class="nextPrivate"> </button>',responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:567,settings:{slidesToShow:1}}]}),$(".includeModal-slider").css("display","none"),$(".include__text-item").css("display","none"),$(".ipotec").css("display","block")})),$(".includeModal-close").on("click",(function(e){setTimeout($(".includeModal").fadeOut(500),8e3)}))}));let e=$(".includeModal__item");$(e).each((function(){this.onclick=()=>{for(dep of e)$(dep).removeClass("includeModal__item-actvie");$(this).addClass("includeModal__item-actvie"),$(".includeModal__item h6").css("display","none");let t=$(this).attr("id").slice(0,-4);console.log(t);let o=$("."+t);$(".includeModal-slider").css("display","none"),$(".include__text-item").css("display","none");let n=0;for(model of o)console.log(model),n++,$(model).css("display","block"),n>1&&$(model).get(0).slick.setPosition();n=0}}))}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(589),o(536),o(746),o(733),$(document).ready((function(){$(".prokrutkaslide").click((function(){var e=$(this).attr("href");return e=e.replace(/[^\#]*/,""),$("body,html").animate({scrollTop:$(e).offset().top},1e3),!1}))})),function(){let e=document.querySelectorAll(".number-span"),t=0;window.addEventListener("scroll",(function(){if(t!=e.length)for(let o=0;o<e.length;o++)if(e[o].getBoundingClientRect().top<window.innerHeight-40&&"0"===e[o].dataset.stop){e[o].dataset.stop=1;let n=0;t++;let r=setInterval((function(){n+=Math.ceil(e[o].dataset.to/50),e[o].innerText=n,n>e[o].dataset.to&&(e[o].innerText=e[o].dataset.to,clearInterval(r))}),60)}}))}()})()})();