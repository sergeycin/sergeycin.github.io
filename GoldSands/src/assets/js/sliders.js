
let swiper = new Swiper(".mySwiper", {
    pagination: {
        el: '.swiper-pagination',
         clickable: true,
         renderBullet: function(index,className){
             return '<span class="'+ className + '">' + (index + 1) + '</span>'
         }
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      }
  });


  
// let demSwiper = new Swiper(".demSwiper", {
//   pagination: {
//       el: '.swiper-pagination',
//        clickable: true,
//        renderBullet: function(index,className){
//            return '<span class="'+ className + '">' + (index + 1) + '</span>'
//        }
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     }
// });