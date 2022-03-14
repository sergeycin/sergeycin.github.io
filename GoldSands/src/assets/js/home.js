console.log('home')


var korpus = 0;
var stage = 1;
var scheme = 2;
var  room = 3;


var state = korpus; // Текущее состояние 

$(document).ready(function(){

    if ($(window).width() > '868') {


        
    //     $('.home__header').addClass('hed-hov')
    //    document.querySelector('.hed-hov').addEventListener('mouseover', ()=>{
    //     console.log('head-home')
    //    })
       
    // //    function myclick (){
    // //        console.log('head-home')
    // //    }
    //     document.querySelector('.compas').onclick = () =>{
    //         document.querySelector('.hed-hov').removeEventListener('mouseover',()=>{})
    //     }
        
    }
    else{

    }

});




function hoverHome (homeObject,numberHone){
    homeObject.addEventListener('mouseover', ()=>{
        console.log('head-home')
       })
}