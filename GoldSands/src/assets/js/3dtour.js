const panoramaImage = new PANOLENS.ImagePanorama("assets/img/pano5.jpg");
const imageContainer = document.querySelector(".image-container");
const panorama2 = new PANOLENS.ImagePanorama("assets/img/pano10.jpg");

var lookAtPositions = [
  new THREE.Vector3(2871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];


var infospotPositions = [
  new THREE.Vector3(9136.06, 616.30, -3690.14),
  new THREE.Vector3(1258.81, -295.50, 3771.13)
];



panoramaImage.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );



panoramaImage.link( panorama2, infospotPositions[0] );
panorama2.link( panoramaImage, infospotPositions[1] );



var countEnable = 0;

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
  // autoRotateSpeed: 0.3,
  controlBar: true,
  
});


let controlItemCube = {
  style: {
    backgroundImage: 'url(assets/img/rotate.svg)',float: 'right'
  },

  onTap: function(){
    if(countEnable == 0){
      viewer.enableAutoRate();
      countEnable = 1;
    }else{
      viewer.disableAutoRate();
      countEnable = 0;

    }

    
  }
};

let createFullscreenButton ={
  style: {
    backgroundImage: 'url(assets/img/rotate.svg)',float: 'right',
  },
  onTap: function(){

      viewer.onWindowResize();
   
   

    
  }
}





viewer.add(panoramaImage, panorama2);
viewer.appendControlItem(controlItemCube); 
viewer.appendControlItem(controlScheme);

// panoramaImage.add( infospot );
// panorama2.add( infospotBack );

viewer.addUpdateCallback(function(){
  
});
let button1 = document.querySelector( '#room1' );
let  button2 = document.querySelector( '#room2' );

let elipse1 = document.getElementById('elipse1');
let elipse2 = document.getElementById('elipse2');


function onButtonClick( targetPanorama ) {

  viewer.setPanorama( targetPanorama );
}




window.addEventListener('load', function() {
if(button1){
  button1.addEventListener( 'click', onButtonClick.bind( this, panoramaImage) );

}
if(elipse1){
  elipse1.addEventListener( 'click', onButtonClick.bind( this, panorama2) );
}
if(elipse2){
  elipse2.addEventListener( 'click', onButtonClick.bind( this, panoramaImage) );
}


if(button2){
  button2.addEventListener( 'click', onButtonClick.bind( this, panorama2 ) );
}

// setTimeout(()=>{
//   let changeThis = 0;
//   $('.image-container  span').each(function(){
//     console.log(this)
//     if(changeThis >9){
//       changeThis++;
//     }
//     if(changeThis == 6  ){
//       $(this).css('display','background-image: url(../img/settings.svg)')
//     }
//     else{
//       changeThis++;
      
//       // $(this).css('display','none')
//     }
   
//   })




// },2500)



/*Открытие блока с картинками */



$('.footerPano').on('click',function(event){
  $('.footerPano').toggleClass('new');
  $('.bottomInfo').toggleClass('expand');
  $('.icon-room').toggleClass('icon-room-active');


})

/*Подсвечивание названия комнаты */
$('.room').each(function(){

  this.onmouseover = (event) =>{	
       let nameRoom = $(this).attr('data-name');
       $('#footerContent').html(`${nameRoom}`);
	    }
})


})











/*2 панорама */

const imageContainernew = document.querySelector(".pano-container");
const panoramaImagenew = new PANOLENS.ImagePanorama("assets/img/pano2.jpg");



const basein = new PANOLENS.Viewer({
  container: imageContainernew,
  autoRotate: false,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

basein.add(panoramaImagenew);










/*3 панорама */
const imageContainelast = document.querySelector(".lastimage-container");
const panoramaImagelast = new PANOLENS.ImagePanorama("assets/img/pano4.jpg");



const lastimage = new PANOLENS.Viewer({
  container: imageContainelast,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});


panoramaImagelast.link( panorama2, infospotPositions[0] );

lastimage.add(panoramaImagelast);
