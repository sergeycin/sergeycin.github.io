console.log('home')


$(document).ready(function(){

    if ($(window).width() > '868') {

        $('.home__header').addClass('hed-hov')
       document.querySelector('.hed-hov').onmouseover = (event) =>{
            console.log('home-head')
        }

        
    }
    else{

    }

});