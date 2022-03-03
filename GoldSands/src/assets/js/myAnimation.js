
    $(document).ready(function(){
    if ($(window).width() > '768') { 
        $('.main').addClass('main-animate');
    
    }

    setTimeout(()=>{
        $('.main-black').css('background','none')
    },3500)
})
  
document.addEventListener('DOMContentLoaded', () =>{
    let gretTxt = document.querySelector('.grH');
    let gretTxtP = document.querySelector('.grT');
    let gretImage = document.querySelector('.gret_image');
    let gretImageBefore = document.querySelector('.greeting__image');
    let PrivateHead = document.querySelector('.private__text-head');
    let PrivateImage = document.querySelector('.private__image');
    let DemImage = $('.demonstration__image-big');
    let IncludeHead = document.querySelector('.include__header');
    let IncludeImage = document.querySelector('.include__image');
    let scrollGret = 200;
    let scrollGretMobile = 0;
    let scrollGretImage = 620;
    let scrollPrivateImage = 1500;
    let scrollDemImage = 3500;
    // let scrollKomercial = 5871;
    let scrollInclude = 6000 ;

/*Главный экран */



    if ($(window).width() < '999') { 
     
            gretTxt.classList.add('greeting__animate'); 
            gretTxtP.classList.add('greeting__animate'); 
            gretImageBefore.classList.add('greeting__image-animate'); 


            PrivateImage.classList.add('demonstration__image-big-animate'); 
            PrivateHead.classList.add('greeting__animate'); 
            $(DemImage).addClass('demonstration__image-big-animate'); 
            $('.gret_image').addClass('greeting__image-animate'); 
            IncludeHead.classList.add('greeting__animate'); 
            IncludeImage.classList.add('include__image-animate'); 
   
    
        
    }

    window.addEventListener('scroll', () =>{
        let scrollTop = window.scrollY;
         
        // console.log(scrollTop);
         if ($(window).width() > '768') { 
        if(scrollTop > scrollGret) {
            gretTxt.classList.add('greeting__animate'); 
            gretTxtP.classList.add('greeting__animate'); 
            gretImageBefore.classList.add('greeting__image-animate'); 
            scrollGret = 0;
    
        }
        if(scrollTop > scrollGretImage) {
            gretImage.classList.add('greeting__image-animate'); 
           
            scrollGretImage = 0;
    
        }
    }
  
        
            
        if(scrollTop > scrollPrivateImage) {
            PrivateImage.classList.add('demonstration__image-big-animate'); 
            PrivateHead.classList.add('greeting__animate'); 
            scrollPrivateImage= 0;
    
        }
        if(scrollTop > scrollDemImage) {
            $(DemImage).addClass('demonstration__image-big-animate'); 
         
            scrollDemImage= 0;
    
        }
        if(scrollTop > scrollInclude ) {
            IncludeHead.classList.add('greeting__animate'); 
            IncludeImage.classList.add('include__image-animate'); 
            scrollDemImage= 0;
    
        } 
    })
})



