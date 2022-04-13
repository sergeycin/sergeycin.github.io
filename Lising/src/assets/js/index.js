
import '../scss/style.scss'







    
    // $(".footer__list-open.item-open").slideDown(400);
    // let falg__menu = 0;
    //  $( document ).ready(function(){
     
    //    $(".footer__list-item").each(function(){
    //     //  console.log($(this).children('.arrowOpen'))

    //      $(this).children('h5').on('click',function(event){
    //    // this.children('.arrowOpen').onclick = () =>{

    //        console.log($(this).parent().children('.footer__list-open'))
    //        if($(this).parent().children('.footer__list-open').hasClass('item-open') == false){
    //          $( ".footer__list-open.item-open" ).slideUp(400);  
    //          $('.footer__list-open').removeClass('item-open')	
    //          $('.footer__list-item h5').removeClass('arrowOpen')	
    //          $(this).parent().children('h5').addClass('arrowOpen')	
    //          $(this).parent().children('.footer__list-open').addClass('item-open')	
    //          $(".footer__list-open.item-open").slideDown(400);
    //          falg__menu = 1;
    //        }
    //        else{
    //          $(this).parent().children('h5').removeClass('arrowOpen')	
    //          $( ".footer__list-open.item-open" ).slideUp(400);  	
    //         $('.footer__list-open').removeClass('item-open')	
    //          falg__menu = 0;
    //        }
   
    //      }); 
          
     
    //  });
    //  });







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



      // $(document).ready(function() { 
      //   var button = $('.back-to-top');	
       
      //   $(window).scroll (function () {
      //     if ($(this).scrollTop () > 300) {
      //       button.fadeIn();
      //     } else {
      //       button.fadeOut();
      //     }
      // });	 
      // button.on('click', function(){
      // $('body, html').animate({
      // scrollTop: 0
      // }, 800);
      // return false;
      // });		 
      // });
