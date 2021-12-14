document.addEventListener('DOMContentLoaded', () =>{
    let gretTxt = document.querySelector('.grH');
    let gretTxtP = document.querySelector('.grT');
    let gretImage = document.querySelector('.gret_image');
    let gretImageBefore = document.querySelector('.greeting__image');
    let PrivateHead = document.querySelector('.private__text-head');
    let PrivateImage = document.querySelector('.private__image');
    let DemImage = document.querySelector('.demonstration__image-big');
    let IncludeHead = document.querySelector('.include__header');
    let IncludeImage = document.querySelector('.include__image');
    let scrollGret = 200;
    let scrollGretImage = 650;
    let scrollPrivateImage = 1500;
    let scrollDemImage = 3500;
    let scrollInclude = 6800;

    window.addEventListener('scroll', () =>{
        let scrollTop = window.scrollY;
        
        // console.log(scrollTop);
        
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
        if(scrollTop > scrollPrivateImage) {
            PrivateImage.classList.add('demonstration__image-big-animate'); 
            PrivateHead.classList.add('greeting__animate'); 
            scrollPrivateImage= 0;
    
        }
        if(scrollTop > scrollDemImage) {
            DemImage.classList.add('demonstration__image-big-animate'); 
         
            scrollDemImage= 0;
    
        }
        if(scrollTop > scrollInclude ) {
            IncludeHead.classList.add('greeting__animate'); 
            IncludeImage.classList.add('include__image-animate'); 
            scrollDemImage= 0;
    
        }
    })
})