
import '../scss/style.scss'
import './modal'
import './sliders'
import './newAnimation'
import './3dtour'
import './home'


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







     /*Плавныя прокрутка до якоря */

$(document).ready(function() {
  //Плавно прокручивает страницу до id-ка
  //Ссылка должна быть с id на якорь и классом prokrutkaslide.
  $('.prokrutkaslide').click(function(){
  var el = $(this).attr('href');
  el = el.replace(/[^\#]*/, ''); //вытаскиваем id из ссылки
  $('body,html').animate({
  scrollTop: $(el).offset().top}, 1000);
  return false;
  });
  });

  (function(){

      let counter = document.querySelectorAll('.number-span');
      let limit = 0; // Переменная, чтобы останавливать функцию, когда всё запустится.
      window.addEventListener('scroll', function(){  
        if( limit == counter.length ){ return; }
        
        for(let i = 0; i < counter.length; i++){
          let pos = counter[i].getBoundingClientRect().top; //Позиция блока, считая сверху окна
          let win = window.innerHeight - 40; // На 40 пикселей меньше, чем высота окна
          if( pos < win && counter[i].dataset.stop === "0" ){
            counter[i].dataset.stop = 1; // Останавливаем перезапуск счета в этом блоке
            let x = 0;
            limit++; // Счетчик будет запущен, увеличиваем переменную на 1
            let int = setInterval(function(){
              // Раз в 60 миллисекунд будет прибавляться 50-я часть нужного числа
              x = x + Math.ceil( counter[i].dataset.to / 50 ); 
              counter[i].innerText = x;
              if( x > counter[i].dataset.to ){
                //Как только досчитали - стираем интервал.
                counter[i].innerText = counter[i].dataset.to;
                clearInterval(int);
              }
            }, 60);
          }
        }
      });
      
      })();



      $(document).ready(function() { 
        var button = $('.back-to-top');	
       
        $(window).scroll (function () {
          if ($(this).scrollTop () > 300) {
            button.fadeIn();
          } else {
            button.fadeOut();
          }
      });	 
      button.on('click', function(){
      $('body, html').animate({
      scrollTop: 0
      }, 800);
      return false;
      });		 
      });
