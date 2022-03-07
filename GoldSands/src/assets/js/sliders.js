
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



  let swiperBuy = new Swiper(".SwiperBuy", {
  
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
         clickable: true,
      
      },
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      // slidesPerView: 3,
      spaceBetween: 30,
      observer: true,

      observeParents: true,
      observeSlideChildren: true,
      breakpoints:{
        1400: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320:{
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
  });
  





  
let dep_item = $('.includeModal__item');
$(dep_item).each(function(){
 
  this.onclick = () =>{


    for(dep of dep_item){
     $(dep).removeClass("includeModal__item-actvie");
    }
    $(this).addClass("includeModal__item-actvie");
    $('.includeModal__item h6').css('display','none');

    let id_dep = $(this).attr('id');

    let dep_block = id_dep.slice(0,-4);
    console.log(dep_block);

        let block_dep = $('.'+ dep_block);
        
        
        $('.includeModal__slide').css('display','none');
       $('.include__text-item').css('display','none');
       let cn = 0;
         for(model of block_dep){
           
         console.log(model)
        cn++;
      $(model).css('display','block');
   

         }
   cn = 0;

      


  }
});
