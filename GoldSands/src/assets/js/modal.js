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
  
   



    
  });