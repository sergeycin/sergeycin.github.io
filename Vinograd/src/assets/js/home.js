var backCount = 0;

/*Наведение квартир */
function HoverHome () {
    let home1 = document.querySelector('.home29-hover');
    let home2 = document.querySelector('.home28-hover');

    let home1Fone = document.querySelector('.home');
    let stageHome = document.querySelector('.home29');
    let stageHome2 = document.querySelector('.home28');
    let modalSlider = document.getElementById('home1Modal');
   

    let backArrow = document.querySelector('.home__back-arrow');
        home1.onmouseover = (event) =>{
            event.stopPropagation();    
            home1Fone.style.background = 'url(./assets/img/home1.png) no-repeat center'
        }
        home1.onmouseout = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        }
        home2.onmouseover = (event) =>{
            event.stopPropagation();    
            home1Fone.style.background = 'url(./assets/img/home2.png) no-repeat center'
        }
        home2.onmouseout = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        }
        
        document.querySelector('.home27-hover').onmouseover = (event) =>{
            event.stopPropagation();    
            home1Fone.style.background = 'url(./assets/img/home3.png) no-repeat center'
        }
        document.querySelector('.home27-hover').onmouseout = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        }
 

    home1.onclick = () =>{
        $('.home__header h2').html('Выберите этаж');
        backArrow.style.display = 'block';
        backCount = 0;
        home1Fone.style.background = 'url(./assets/img/currenthome1.png) no-repeat center';
        home1.style.display = 'none';
        home2.style.display = 'none';
        document.querySelector('.home27-hover').style.display = 'none';


        stageHome.style.display = 'block';
 
        home1.onmouseout = () =>{
            home1Fone.style.background = 'url(./assets/img/currenthome1.png) no-repeat center';
        }
        home1.onmouseover = () =>{
            home1Fone.style.background = 'url(./assets/img/currenthome1.png) no-repeat center';
        }
        backStage(home1Fone,home1,home2,stageHome2,stageHome,backArrow,modalSlider);
        ShowStage ();

    }


    home2.onclick = () =>{
        $('.home__header h2').html('Выберите этаж');
        backArrow.style.display = 'block';
        backCount = 0;
        home1Fone.style.background = 'url(./assets/img/currenthome2.png) no-repeat center';
        home1.style.display = 'none';
        home2.style.display = 'none';
        document.querySelector('.home27-hover').style.display = 'none';
        stageHome2.style.display = 'block';
     
        home2.onmouseout = () =>{
            home1Fone.style.background = 'url(./assets/img/currenthome2.png) no-repeat center';
        }
        home2.onmouseover = () =>{
            home1Fone.style.background = 'url(./assets/img/currenthome2.png) no-repeat center';
        }
        backStage(home1Fone,home1,stageHome,home2,stageHome2,backArrow,modalSlider);
        ShowStage ();

    }

    document.querySelector('.home27-hover').onclick = () =>{
        $('.home__header h2').html('Выберите этаж');
        backArrow.style.display = 'block';
        backCount = 0;
        home1Fone.style.background = 'url(./assets/img/currenthome3.png) no-repeat center';
        home1.style.display = 'none';
        home2.style.display = 'none';
        document.querySelector('.home27-hover').style.display = 'none';
        document.querySelector('.home27').style.display = 'block';
     
        document.querySelector('.home27-hover').onmouseout = () =>{
            home1Fone.style.background = 'url(./assets/img/currenthome3.png) no-repeat center';
        }
        document.querySelector('.home27-hover').onmouseover = () =>{
            home1Fone.style.background = 'url(./assets/img/currenthome3.png) no-repeat center';
        }
        backStage(home1Fone,home1,stageHome,home2,stageHome2,backArrow,modalSlider);
        ShowStage ();

    }

}

HoverHome (); 
var stageBack = 0;

/*Показ схем квартир при клике на этаж */

function ShowStage () {
    let stageHomeItem = document.querySelectorAll('.home29 .stageActive');
    let stageHome = document.querySelector('.home29');
    let modalSlider = document.getElementById('home1Modal');
    let backArrow = document.querySelector('.home__back-arrow');
    let home1 = document.querySelector('.home29-hover');
    let home1Fone = document.querySelector('.home');
    let orientir1 = document.querySelector('.home__orientir1');
    let orientir2 = document.querySelector('.home__orientir2');
    let home2 = document.querySelector('.home28-hover');
    let stageHome2 = document.querySelector('.home28');
    let numberSlider = 0;
  
    $(stageHomeItem).each(function(){
        // сonsole.log(this);
        this.onclick = (event) =>{
            event.preventDefault();
            
            stageHome.style.display = 'none';
            orientir1.style.display = 'none';
            orientir2.style.display = 'none';
            // console.log(this);
           let curentNumberSlide = $(this).attr('id');
  
           $('.currentStage p').html(`${curentNumberSlide} ЭТАЖ`);
            $(modalSlider).fadeIn(500);
            $('#home1Modal-slider').css('display','block');
            $('#home2Modal-slider').css('display','none');
            $('#home3Modal-slider').css('display','none');
            // $(modalSlider).fadeIn();
            backCount = 1;
            numberSlider = 1;
            stageBack= 1;
            sliderHome(curentNumberSlide,numberSlider);
            ActionScheme ();
     
              
            }
});

$('.home28 .stageActive').each(function(){
    //  сonsole.log(this);
  
    this.onclick = (event) =>{
        event.preventDefault();
        
        stageHome2.style.display = 'none';
        orientir1.style.display = 'none';
        orientir2.style.display = 'none';
        // console.log(this);
       let curentNumberSlide = $(this).attr('id');

       $('.currentStage p').html(`${curentNumberSlide} ЭТАЖ`);
        $(modalSlider).fadeIn(500);
        $('#home1Modal-slider').css('display','none');
        $('#home2Modal-slider').css('display','block');
        $('#home3Modal-slider').css('display','none');
        // $(modalSlider).fadeIn();
        backCount = 1;
        numberSlider = 2;
        sliderHome(curentNumberSlide,numberSlider);
        stageBack= 2;
        ActionScheme ();
 
          
        }
        
});

$('.home27 .stageActive').each(function(){
    //  сonsole.log(this);

    this.onclick = (event) =>{
        event.preventDefault();
        
        document.querySelector('.home27').style.display = 'none';
        orientir1.style.display = 'none';
        orientir2.style.display = 'none';
        // console.log(this);
       let curentNumberSlide = $(this).attr('id');

       $('.currentStage p').html(`${curentNumberSlide} ЭТАЖ`);
        $(modalSlider).fadeIn(500);
        $('#home1Modal-slider').css('display','none');
        $('#home2Modal-slider').css('display','none');
        $('#home3Modal-slider').css('display','block');
        // $(modalSlider).fadeIn();
        backCount = 1;
        numberSlider = 3;
        sliderHome(curentNumberSlide,numberSlider);
        stageBack= 3;
        ActionScheme ();
 
          
        }
        
});

backStage (home1Fone,home1,stageHome,home2,stageHome2,backArrow,modalSlider);

    
}
var flagSlider = 0;
/*Cлайдер */
function sliderHome(curentNumberSlide,numberSlider) {
       
    // console.log( flagSlider );
    if(flagSlider == 1){

        $('#home1Modal-slider').slick('unslick'); 
        $('#home2Modal-slider').slick('unslick'); 
        $('#home3Modal-slider').slick('unslick'); 
        $('#home1Modal-slider').slick({
            dots: false,
            initialSlide: curentNumberSlide-1,
            prevArrow: '<button class="prevPrivate"> </button>',
            nextArrow: '<button class="nextPrivate"> </button>',
          
          
             
            });
            $('#home2Modal-slider').slick({
                dots: false,
                initialSlide: curentNumberSlide-1,
                prevArrow: '<button class="prevPrivate"> </button>',
                nextArrow: '<button class="nextPrivate"> </button>',
              
              
                 
                });
                $('#home3Modal-slider').slick({
                    dots: false,
                    initialSlide: curentNumberSlide-1,
                    prevArrow: '<button class="prevPrivate"> </button>',
                    nextArrow: '<button class="nextPrivate"> </button>',
                  
                  
                     
                    });
                // if(numberSlider == 1){
                //     $('#home2Modal-slider').slick('unslick');  
                // }
                // else if(numberSlider == 2){
                //     $('#home1Modal-slider').slick('unslick');  
                // } 
    }
    else{
    
        flagSlider = 1;
        $('#home1Modal-slider').slick({
            dots: false,
            initialSlide: curentNumberSlide-1,
            prevArrow: '<button class="prevPrivate"> </button>',
            nextArrow: '<button class="nextPrivate"> </button>',
          
          
             
            });
            $('#home2Modal-slider').slick({
                dots: false,
                initialSlide: curentNumberSlide-1,
                prevArrow: '<button class="prevPrivate"> </button>',
                nextArrow: '<button class="nextPrivate"> </button>',
              
              
                 
                });
                $('#home3Modal-slider').slick({
                    dots: false,
                    initialSlide: curentNumberSlide-1,
                    prevArrow: '<button class="prevPrivate"> </button>',
                    nextArrow: '<button class="nextPrivate"> </button>',
                  
                  
                     
                    });
                // if(numberSlider == 1){
                //     $('#home2Modal-slider').slick('unslick');  
                // }
                // else if(numberSlider == 2){
                //     $('#home1Modal-slider').slick('unslick');  
                // } 
          
    }
  


        

        $('#home1Modal-slider').on('afterChange', function(event,slick,currentSlide,nextSlide){
       
            $('.currentStage p').html(`${currentSlide+1} ЭТАЖ`);
        })
        $('#home2Modal-slider').on('afterChange', function(event,slick,currentSlide,nextSlide){
             
            $('.currentStage p').html(`${currentSlide+1} ЭТАЖ`);
        })
        $('#home3Modal-slider').on('afterChange', function(event,slick,currentSlide,nextSlide){
             
            $('.currentStage p').html(`${currentSlide+1} ЭТАЖ`);
        })
}


/*События на схеме с квартирами */
function ActionScheme (){
    let hoverSchemeElement = document.querySelectorAll('.hoverScheme');
    let schemeText = document.querySelectorAll('.home1Modal-slide .home1Modal__scheme-text');
    $('.home__header h2').html('Выберите этаж и квартиру');
        $(hoverSchemeElement).each(function(){
            this.onmouseover = (event) =>{
                let dataNumber = $(this).attr('data-number');
                let dataRoom = $(this).attr('data-room');
                let dataSquare = $(this).attr('data-square');
                let dataPrice = $(this).attr('data-price');
                $('.num_home').html(`${dataNumber}`);
                $('.room').html(`${dataRoom}`);
                $('.square').html(`${dataSquare}`);
                $('.price__home').html(`${dataPrice}`);
                $(schemeText).css('display','block');
                
            }
            this.onmouseout = (event) =>{
                $(schemeText).css('display','none');
            }
            this.onclick = (event) =>{
                event.preventDefault();
                dataNumber = $(this).attr('data-number');
                dataRoom = $(this).attr('data-room');
                dataSquare = $(this).attr('data-square');
                dataPrice = $(this).attr('data-price');
                dataSingle = $(this).attr('data-single');
                dataSrcScheme = $(this).attr('data-srcscheme');
             
                SingleScheme (dataNumber,dataRoom,dataSquare,dataPrice,dataSingle,dataSrcScheme);
                // $('.num_home').html(`${dataNumber}`);
                // $('.room').html(`${dataRoom}`);
                // $('.square').html(`${dataSquare}`);
                // $('.price__home').html(`${dataPrice}`);
            }
        });
  
    

}

/*Переход в single схему квартиры */
function SingleScheme (dataNumber,dataRoom,dataSquare,dataPrice,dataSingle,dataSrcScheme){
    let home1 = document.querySelector('.home29-hover');
    let home1Fone = document.querySelector('.home');
    let stageHome = document.querySelector('.home29');
    let backArrow = document.querySelector('.home__back-arrow');
    let modalSlider = document.getElementById('home1Modal');
    let home2 = document.querySelector('.home28-hover');
    let stageHome2 = document.querySelector('.home28');
    backCount = 2;
    $('.home__header h2').html(`КВартира №${dataNumber}`);
    $('.home1Modal-slider').fadeOut();
    $('.home1Modal__single').fadeIn();
    $('.home1Modal__single .home1Modal__scheme-text').fadeIn();
    $('.home1Modal__single .num_home').html(`${dataNumber}`);
    $('.home1Modal__single .room').html(`${dataRoom}`);
    $('.home1Modal__single .square').html(`${dataSquare}`);
    $('.home1Modal__single .price__home').html(`${dataPrice}`);
    $('.home1Modal__single-image img').attr('src',`${dataSingle}`);
    $('.home1Modal__single-scheme img').attr('src',`${dataSrcScheme}`);
    backStage (home1Fone,home1,stageHome,home2,stageHome2,backArrow,modalSlider);
}


/*Функционал стрелки назад */
function backStage (home1Fone,home1,stageHome,home2,stageHome2,backArrow,modalSlider) {
    backArrow.onclick = () =>{
    if(backCount == 0){
        $('.home__header h2').html('Выберите квартиру');
        
        backArrow.style.display = 'none';
        home1.style.display = 'block';

            stageHome.style.display = 'none';
            document.querySelector('.home28').style.display = 'none';
          
            home2.style.display = 'block';
            document.querySelector('.home27').style.display = 'none';
            document.querySelector('.home27-hover').style.display = 'block';
            
       
        // console.log('Вызов')
        home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        home1.onmouseover = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home1.png) no-repeat center'
        }
        home1.onmouseout = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        }
        home2.onmouseover = (event) =>{
            event.stopPropagation();    
            home1Fone.style.background = 'url(./assets/img/home2.png) no-repeat center'
        }
        home2.onmouseout = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        }
        document.querySelector('.home27-hover').onmouseover = (event) =>{
            event.stopPropagation();    
            home1Fone.style.background = 'url(./assets/img/home3.png) no-repeat center'
        }
        document.querySelector('.home27-hover').onmouseout = (event) =>{
            event.stopPropagation();
            home1Fone.style.background = 'url(./assets/img/home.png) no-repeat center'
        }

        backCount = 1;
    }
    else if(backCount == 1){
        $('.home__have').html(`<p>Доступных <br> квартир в ЖК </p><span>118</span>`);
        // console.log('Вызов2')
        $('.home__header h2').html('Выберите этаж');
        $(modalSlider).fadeOut(500);
        if(stageBack == 1){
            stageHome.style.display = 'block';
        }
        else if(stageBack == 2){
            stageHome2.style.display = 'block';
        }
        else if(stageBack == 3){
            document.querySelector('.home27').style.display = 'block';
        }
        document.querySelector('.home__orientir1').style.display = 'block';
        document.querySelector('.home__orientir2').style.display = 'block';
        backCount = 0;
        // console.log(backCount);
    }
    else if(backCount == 2){
        // console.log('Вызов2')
        $('.home__header h2').html('Выберите этаж и квартиру');
        $('.home1Modal__single').fadeOut();
       
        if(stageBack == 1){
            $('#home1Modal-slider').fadeIn();
        }
        else if(stageBack == 2){
            $('#home2Modal-slider').fadeIn();
        }
        else if(stageBack == 3){
            $('#home3Modal-slider').fadeIn();
        }
      
        backCount = 1;
        // console.log(backCount);
    }
}
}



