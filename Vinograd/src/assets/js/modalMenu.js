$(document).ready(function(){
    $('#modal-btn').on('click',function(event){
        event.preventDefault();
        $('#popup__menu').fadeIn(500);

    });
    $('#modal-mobile-btn').on('click',function(event){
        event.preventDefault();
        $('#popup__menu').fadeIn(500);

    });
    $('.popup__menu-close').on('click',function(event){
        event.preventDefault();
        $('#popup__menu').fadeOut(500);
    })
  
   
  });



  $(document).ready(function(){
    $('#map__btn').on('click',function(event){
        event.preventDefault();
        $('#map__menu-mobile').fadeIn(500);

    });
    $('.map-content .radio').on('click',function(event){
    
        setTimeout($('#map__menu-mobile').fadeOut(500), 8000);
   
    })
  
   
  });


//   $(document).ready(function(){
//     $('#HowBuy').on('click',function(event){
//         event.preventDefault();
//         $('.includeModal').fadeIn(500);

//     });
//     $('.includeModal-close').on('click',function(event){
    
//         setTimeout($('.includeModal').fadeOut(500), 8000);
   
//     })
  
   
//   });




  /*Форма обратной связи */
  $(document).ready(function(){
    $('.call').on('click',function(event){
        event.preventDefault();
        $('.callModal').fadeIn(500);

    });

    $('.callModal-close').on('click',function(event){
        event.preventDefault();
        $('.callModal').fadeOut(500);
    })
  
   
  });



    /*Модальное окно с лупой и слайдером */

    $(document).ready(function(){
        $('.increase').on('click',function(event){
            event.preventDefault();
            $('.demonstration').fadeOut();
            $('.demonstration__image-big').addClass('increase-image').delay( 1000 );
            $('.demonstration').css('margin-left','0');
            $('.demonstration__image-small').css('display','none');
            $('.decrease').css('display','block');
            $('.increase').css('display','none');
            $('.demonstration__text-parag').css('display','none');
            $('.demonstration').addClass('demonstration-increase');
            $('.demonstration-increase').fadeIn();
        });
    
        $('.decrease').on('click',function(event){
            event.preventDefault();
         
            $('.demonstration__image-big').removeClass('increase-image');
            $('.demonstration').css('margin-left','5%');
            $('.demonstration__image-small').css('display','block');
            $('.decrease').css('display','none');
            $('.increase').css('display','block');
            $('.demonstration__text-parag').css('display','block');
            $('.demonstration').removeClass('demonstration-increase');
    
        })
      
       
      });