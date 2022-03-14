console.log('home')


$(document).ready(function(){

    if ($(window).width() > '868') {

        $('.home__header').addClass('hed-hov')
       document.querySelector('.hed-hov').addEventListener('mouseover', myclick)
       
       function myclick (){
           console.log('head-home')
       }
        document.querySelector('.compas').onclick = () =>{
            document.querySelector('.hed-hov').removeEventListener('mouseover', myclick)
        }
        
    }
    else{

    }

});