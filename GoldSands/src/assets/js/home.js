console.log('home')


var korpus = 0;
var stage = 1;
var scheme = 2;
var  room = 3;


var state = korpus; // Текущее состояние 


// block hover home
var homeDefault = document.querySelector('.home') // изначальное изображение дома
var homeHover1 = document.querySelector('.home__hover1')


$(document).ready(function(){
    BackArrow();
    if ($(window).width() > '868') {

        hoverClickHome(homeHover1,1);
    
        
    }
    else{



    }

});




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
    // homeObject.removeEventListener('mouseover',mouseBegin)
    // homeObject.removeEventListener('mouseout',mouseLeave)
    state = stage;
    $(homeDefault).removeClass(`homeHover${numberHome}`)   
    $(homeDefault).addClass('hideHoverBLock')
    $(homeDefault).addClass('currentHome1')
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
            console.log(numberStage)
            showStageScheme(numberHome,numberStage)
        }
    })



}

// Показ схемы  с этажами в модальном окне
function showStageScheme(numberHome,numberStage){
  
    $(`.homeModal`).css('display','block')
}



function BackArrow(){
    let backArrow = document.querySelector('.backState')

    backArrow.onclick = () =>{
        if(state == stage){
            $(homeDefault).removeClass('hideHoverBLock')
            $(homeDefault).removeClass('currentHome1')
            $('.stage').removeClass('stageVisible')
            $(`.homeModal`).css('display','none')
            console.log('ok')
        }
    }
    

   
}