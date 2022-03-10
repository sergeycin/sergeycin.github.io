const panoramaImage = new PANOLENS.ImagePanorama("assets/img/pano5.jpg");
const imageContainer = document.querySelector(".image-container");
const panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );

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





const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  // autoRotate: true,
  // autoRotateSpeed: 0.3,
  controlBar: true,
});
var cube = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshNormalMaterial());
cube.position.set(-300, 100, 100);
viewer.addUpdateCallback(function(){
  cube.rotation.y += 0.05;
  cube.rotation.x += 0.02;
});
panoramaImage.add( cube );

var controlItemCube = {
  style: {
    backgroundImage: 'url(http://i40.tinypic.com/1531w79.jpg)'
  },
  
  onTap: function(){
    viewer.tweenControlCenterByObject( cube );
  }
};
viewer.appendControlItem(controlItemCube);


viewer.add(panoramaImage, panorama2);
// panoramaImage.add( infospot );
// panorama2.add( infospotBack );

viewer.addUpdateCallback(function(){
  
});














const imageContainernew = document.querySelector(".pano-container");
const panoramaImagenew = new PANOLENS.ImagePanorama("assets/img/pano2.jpg");



const basein = new PANOLENS.Viewer({
  container: imageContainernew,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

basein.add(panoramaImagenew);











const imageContainelast = document.querySelector(".lastimage-container");
const panoramaImagelast = new PANOLENS.ImagePanorama("assets/img/pano4.jpg");



const lastimage = new PANOLENS.Viewer({
  container: imageContainelast,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: true,
});

lastimage.add(panoramaImagelast);