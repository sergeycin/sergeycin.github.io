
/*Каталог открытие */
$(document).ready(function(){
    $('#modal-btn').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeIn();
      
        $('#popup-menu').fadeIn();
    });
    $('#modal-b').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeIn();
        $('#popup-katalog').fadeIn();
     
    });
    $('.popup__close').on('click',function(event){
        event.preventDefault();
        $('.content-modal').fadeOut();
        $('#popup-katalog').fadeOut();
         $('#popup-menu').fadeOut();
    })
 
   
});

     /*fixed menu */
     window.onscroll = function() {scrollFunction()};

     function scrollFunction(){
         let scrollPos= 10;
         let header = document.querySelector('header');
         let katalog = document.getElementById('popup-katalog');
         let katalog_menu = document.getElementById('popup-menu');
         
         if (document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
             header.classList.add('active');
             if(window.screen.width >768){
                if(katalog.style.display == 'block'){

                    katalog.style.display = 'none';
                    katalog_menu.style.display = 'block';
    
                 }
             }
          
             
         }else{
             header.classList.remove('active');
             if(window.screen.width >768){
             if(katalog_menu.style.display == 'block'){
             katalog.style.display = 'block';
             katalog_menu.style.display = 'none';
             }
             }
         }
         
     }

/*Каталог Табы */
let flag=0;
let item = document.querySelectorAll('#li-click');
$(item).each(function(){
  
    $(this).click(function(){
        if (flag==0){
            $('.green  .dropdown__content').fadeOut(); 
            $('.green  .dropdown__c').fadeOut(); 
            $('ul').removeClass("green");
            $(this).parent().addClass("green");
        $('.green  .dropdown__content').fadeIn(); 
        $('.green  .dropdown__c').fadeIn(); 

        }
    
    });
});


/*Слайдер*/
let fl =0;
$(document).ready(function(){
$('.tovar__small a').click(function(e){
    if($('.tovar__big img').attr('src')!== $(this).attr('href')){
        $('.tovar__big img').hide().attr('src', $(this).attr('href')).fadeIn(0); 
        if (fl == 0){
        $('.tovar__small img').removeClass("tovar__active");
        $(this).children().addClass("tovar__active");
        fl = 1;
        }
        else{
            $('.tovar__small img').removeClass("tovar__active");
            $(this).children().addClass("tovar__active");
            flag =0;
        }

     }
  
e.preventDefault();
    });
});



/*Получение звезд и отправка на сервер через ajax */
$('.rating .star').on('click', function() {
    $(this).closest('.rating').find('.--selected').removeClass('--selected');
    $(this).toggleClass('--selected');
    count = $('.--selected').attr('data-rating');

    $.ajax({
        type: "POST",
       url: "https://jsonplaceholder.typicode.com/posts",
        data: $(count).serialize()
    }).done(function() {
        alert("Вы успешно оставили отзыв");
        $("form").trigger("reset");
    });
    return false;
  });

 