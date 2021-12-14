/*Приватный квартал слайдер на главной */
$(document).ready(function(){

    $('.private-slider').slick({
    dots: true,
    prevArrow: '<button class="prevPrivate"> </button>',
    nextArrow: '<button class="nextPrivate"> </button>',
    customPaging : function(slider, i) {
    
        var thumb = $(slider.$slides[i]).data();
        i= i+1;
          return '<a class="dot">'+i+'</a>';
     
  
                },
    responsive: [
    {
      breakpoint: 768,
      settings: {
     
        dots: false
      }
    },
    ]
  
     
    });
  });



/*Сладйер с демонстрацией */
$(document).ready(function(){
  $('.demonstration-slider').slick({
  dots: true,
  prevArrow: '<button class="prevPrivate"> </button>',
  nextArrow: '<button class="nextPrivate"> </button>',
  customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      i= i+1;
      return '<a class="dot">'+i+'</a>';
              },
  responsive: [
  {
    breakpoint: 768,
    settings: {
   
      dots: false
    }
  },
  ]

   
  });
});



/*Сладйер с демонстрацией в модальном окне */
$(document).ready(function(){

  $('.increaseDem__slider').slick({
  dots: true,
  prevArrow: '<button class="prevPrivate"> </button>',
  nextArrow: '<button class="nextPrivate"> </button>',
  customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      i= i+1;
      return '<a class="dot">'+i+'</a>';
              },
  responsive: [
  {
    breakpoint: 768,
    settings: {
   
      dots: false
    }
  },
  ]

   
  });
});


$(document).ready(function(){
  $('#HowBuy').on('click',function(event){
      event.preventDefault();
      $('.includeModal').fadeIn(500);
/*Слайдер как купить */

  $('#includeModal-slider').slick({
    slidesToShow: 3,
  
    dots: false,
    prevArrow: '<button class="prevPrivate"> </button>',
    nextArrow: '<button class="nextPrivate"> </button>',
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
 
       
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
    
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });

    $('#includeModal-slider2').slick({
      slidesToShow: 3,
    
      dots: false,
      prevArrow: '<button class="prevPrivate"> </button>',
      nextArrow: '<button class="nextPrivate"> </button>',
    
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
   
         
          }
        },
        {
          breakpoint: 567,
          settings: {
            slidesToShow: 1,
      
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
      });

      $('.includeModal-slider').css('display','none');
      $('.include__text-item').css('display','none');
$('.ipotec').css('display','block');

// $('.ipotec').get(0).slick.setPosition();

  });
  $('.includeModal-close').on('click',function(event){
  
      setTimeout($('.includeModal').fadeOut(500), 8000);
 
  })

 
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
        
        
        $('.includeModal-slider').css('display','none');
       $('.include__text-item').css('display','none');
       let cn = 0;
         for(model of block_dep){
           
         console.log(model)
        cn++;
      $(model).css('display','block');
      if(cn > 1){
        $(model).get(0).slick.setPosition();        
      }

         }
   cn = 0;

      


  }
});



/*Слайдер со схемами домов */
// $('.includeModal-slider').slick({
//   dots: false,
//   prevArrow: '<button class="prevPrivate"> </button>',
//   nextArrow: '<button class="nextPrivate"> </button>',


   
//   });