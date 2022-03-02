
import '../scss/style.scss'
import './modal'


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