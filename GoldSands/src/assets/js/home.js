console.log('home')


var korpus = 0;
var stage = 1;
var scheme = 2;
var  room = 3;


var state = korpus; // Текущее состояние 


// block hover home
var homeDefault = document.querySelector('.home') // изначальное изображение дома
var homeHover1 = document.querySelector('.home__hover1')
var homeHover2 = document.querySelector('.home__hover2')


$(document).ready(function(){
    BackArrow();
    if ($(window).width() > '868') {

        hoverClickHome(homeHover1,1);
        hoverClickHome(homeHover2,2);
        
    }
    else{



    }

});



/* Наведение на дом и и click */
function hoverClickHome (homeObject,numberHome){
    homeObject.addEventListener('mouseover',mouseBegin)
    homeObject.addEventListener('mouseout',mouseLeave)

     
function mouseBegin(){

    $(homeDefault).addClass(`homeHover${numberHome}`)
   }


   function mouseLeave () {
    $(homeDefault).removeClass(`homeHover${numberHome}`)
   }

   homeObject.addEventListener('click', showStage)

   function showStage() {
    state = stage;
    $(homeDefault).removeClass(`homeHover${numberHome}`)   
    $(homeDefault).addClass('hideHoverBLock')
    $(homeDefault).addClass(`currentHome${numberHome}`)
        openModalHome(numberHome)

    }


}


// Выбор этажа
function openModalHome(numberHome){

    let stage = document.querySelector(`.homeStage${numberHome}`)
    let stagePath = document.querySelectorAll(`.homeStage${numberHome} .stageActive`)

    $(stage).addClass('stageVisible')
    
  
    $(stagePath).each(function(){
        this.onclick = (event) =>{
            event.preventDefault()
            let numberStage = $(this).attr('id')
            // console.log(numberStage)
            
            showStageScheme(numberHome,numberStage)
        }
    })



}

// Показ схемы  с этажами в модальном окне
function showStageScheme(numberHome,numberStage){
    state = scheme;
    
    $('.homeModal').css('display','block')
    

  
    let sliderH = document.querySelector(`.sliderHome${numberHome}`)   
  
    $(sliderH).addClass('sliderHome__active') 
    
    swiperHome.slideTo(numberStage);

    let roomElement = document.querySelectorAll(`.sliderHome${numberHome} svg .hoverScheme`)
    let schemeText = document.querySelectorAll('.svg__wrap .Room-text');
    $(roomElement).each(function(){
        this.onmouseover = (event) =>{
            let dataNumber = $(this).attr('data-number');
            let dataRoom = $(this).attr('data-room');
            let dataSquare = $(this).attr('data-square');
            let dataPrice = $(this).attr('data-price');
            $('.num_home').html(`${dataNumber}`);
            $('.room').html(`${dataRoom}`);
            $('.square').html(`${dataSquare}`);
            $('.price__home').html(`${dataPrice}`);
            $(schemeText).addClass('activeRoom__text')

        }
        this.onmouseout = (event) =>{
            $(schemeText).removeClass('activeRoom__text')
        }
        this.onclick = (event) =>{
        event.preventDefault()
        dataNumber = $(this).attr('data-number');
        dataRoom = $(this).attr('data-room');
        dataSquare = $(this).attr('data-square');
        dataPrice = $(this).attr('data-price');
        dataSingle = $(this).attr('data-single');
        dataSrcScheme = $(this).attr('data-srcscheme');
        dataID = $(this).attr('data-id');
        dataLevel = $(this).attr('data-level');
        SingleScheme (dataNumber,dataRoom,dataSquare,dataPrice,dataSingle,dataSrcScheme,dataID,dataLevel);
        }
    })

    // console.log(swiperHome)
    
    
    
}




    var swiperHome = new Swiper(".swiperHome", {
        pagination: {
            el: '.swiper-pagination',
             clickable: true,
             renderBullet: function(index,className){
                 return '<span class="'+ className + '">'  + (index + 1) + '</span>'
             }
          },
        
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          loop: true,
          observer: true,

          observeParents: true,
          observeSlideChildren: true,
        
      });
      

      




function BackArrow(){
    let backArrow = document.querySelector('.backState')

    backArrow.onclick = () =>{
        if(state == stage){
   
            $(homeDefault).attr('class','home')
            $('.stage').removeClass('stageVisible')
             
           
        }
        if(state == scheme){
            $('.homeSlider').removeClass('sliderHome__active');
            $(`.homeModal`).css('display','none');
            state = stage;
        }
      
    }


   
}