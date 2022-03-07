
import '../scss/style.scss'
import './modal'
import './sliders'


$(document).ready(function() {
    var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;

    if(isSafari){
        console.log('I have safari')
    }
    else{
    
 
         
          const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
        
            const header = $('.header') // находим header и записываем в константу
        
            let prevScroll = $(window).scrollTop() // узнаем на сколько была прокручена страница ранее
            let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
        
            $(window).scroll(() => { // при прокрутке страницы
        
              currentScroll = $(window).scrollTop() // узнаем на сколько прокрутили страницу
        
              const headerHidden = () => header.hasClass('header_hidden') // узнаем скрыт header или нет
        
              if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.addClass('header_hidden') // то скрываем header
              }
              if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.removeClass('header_hidden') // то отображаем header
              }
        
              prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        
            })
        
          }
    
          onScrollHeader() // вызываем основную функцию onScrollHeader
        
  
      
    }
    })




    
    $(".footer__list-open.item-open").slideDown(400);
    let falg__menu = 0;
     $( document ).ready(function(){
     
       $(".footer__list-item").each(function(){
        //  console.log($(this).children('.arrowOpen'))

         $(this).children('h5').on('click',function(event){
       // this.children('.arrowOpen').onclick = () =>{

           console.log($(this).parent().children('.footer__list-open'))
           if($(this).parent().children('.footer__list-open').hasClass('item-open') == false){
             $( ".footer__list-open.item-open" ).slideUp(400);  
             $('.footer__list-open').removeClass('item-open')	
             $('.footer__list-item h5').removeClass('arrowOpen')	
             $(this).parent().children('h5').addClass('arrowOpen')	
             $(this).parent().children('.footer__list-open').addClass('item-open')	
             $(".footer__list-open.item-open").slideDown(400);
             falg__menu = 1;
           }
           else{
             $(this).parent().children('h5').removeClass('arrowOpen')	
             $( ".footer__list-open.item-open" ).slideUp(400);  	
            $('.footer__list-open').removeClass('item-open')	
             falg__menu = 0;
           }
   
         }); 
          
     
     });
     });