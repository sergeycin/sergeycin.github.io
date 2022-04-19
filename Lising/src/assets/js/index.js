
import '../scss/style.scss'


$('.first').css('display','flex')
let dep_item = $('.SelectMain__item');
$(dep_item).each(function(){
 
  this.onclick = () =>{


    for(let dep of dep_item){
     $(dep).removeClass("SelectMain__active");
    }
    $(this).addClass("SelectMain__active");
    // $('.includeModal__item h6').css('display','none');

    let id_dep = $(this).attr('id');

    let dep_block = id_dep.slice(0,-4);
    console.log(dep_block);

        let block_dep = $('.'+ dep_block);
        
        
        $('.main__item').css('display','none');

       let cn = 0;
         for(let model of block_dep){
           
         console.log(model)
        cn++;
      $(model).css('display','flex');
   

         }
   cn = 0;
  }
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



 
