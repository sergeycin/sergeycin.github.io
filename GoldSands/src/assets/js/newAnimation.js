// const animItems = document.querySelectorAll('._anim-items');

// if(animItems.length > 0){

//     window.addEventListener('scroll', animOnScroll)
//     function animOnScroll(params){
//         for(let i=0; i < animItems.length; i++){
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;

//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if(animItemHeight > window.innerHeight){
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;

//             }

//             if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
//                 animItem.classList.add('_active');

//             }
//             else{
//                 animItem.classList.remove('_acitve');
                
//             }
//         }
//     }

//     function offset(el){
//         const rect = el.getBoundingClientRect(),
//             scrollLeft = window.pageYOffset || document.documentElement.scrollLeft,
//             scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//             return {top:rect.top + scrollTop,left:rect.left + scrollLeft}
//     }
// }



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }