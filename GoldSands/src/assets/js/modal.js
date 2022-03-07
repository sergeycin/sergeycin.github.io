$(document).ready(function(){
    $('#modal-btn').on('click',function(event){
        event.preventDefault();
        // $('.header').css('visibility','hidden'); 
        $('#popup__menu').fadeIn(100);
        

    });
    $('#modal-mobile-btn').on('click',function(event){
        event.preventDefault();
        // $('.header').css('visibility','hidden'); 
        $('#popup__menu').css('display','block');
        
        // $('#menu-content a').each(function(){
        //     this.onclick = () =>{

        //     }

        // });

    });
    $('#menu-content a').on('click',function(){
        // $('.header').css('visibility','visible'); 
        $('#popup__menu').fadeOut(500);
        
    })
  
    $('.popup__menu-close').on('click',function(event){
        event.preventDefault();
        $('#popup__menu').fadeOut(500);
        // $('.header').css('visibility','visible'); 
        
    })
  
   




  /*Форма обратной связи */

    $('.call').on('click',function(event){
        event.preventDefault();
        $('#callModal__menu').fadeIn(500);

    });

    $('.callModal-close').on('click',function(event){
        event.preventDefault();
        $('#callModal__menu').fadeOut(500);
    })
  

    // $('.call_floor').on('click',function(event){
    //     event.preventDefault();
    //     $('#callModal__apartmernt').fadeIn(500);

    // });

    // $('.callModal-close').on('click',function(event){
    //     event.preventDefault();
    //     $('#callModal__apartmernt').fadeOut(500);
    // })
    // $('.closeSank').on('click',function(event){
    //     event.preventDefault();
    //     $('#callModal__SankYou').fadeOut(500);
    // })
   



            // Модальное окно карты 
        $('#map__btn').on('click',function(event){
            event.preventDefault();
            $('#map__menu-mobile').fadeIn(500);
    
        });
        $('.map-content .radio').on('click',function(event){
        
            setTimeout($('#map__menu-mobile').fadeOut(500), 8000);
       
        })
        $('#close-infr').on('click',function(event){
        
            setTimeout($('#map__menu-mobile').fadeOut(500), 8000);
       
        })
     
        $('.howbuy').on('click',function(event){
        
            $('.includeModal').fadeIn(500)
               
           
               });
           
              
               $('.includeModal-close').on('click',function(event){
               
                   setTimeout($('.includeModal').fadeOut(500), 8000);
              
               })
   
        // Увеличение изображения
        $('.increase').on('click',function(event){
            $('.demonstration').toggleClass('demonstration__full')
        });

  });




