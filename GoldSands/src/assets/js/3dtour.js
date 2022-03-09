const panoramaImage = new PANOLENS.ImagePanorama("assets/img/pano5.jpg");
const imageContainer = document.querySelector(".image-container");
const imageContainer2 = document.querySelector(".image-container2");
const panoramaImage2 = new PANOLENS.ImagePanorama("assets/img/pano5.jpg");



const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);




// const viewer2 = new PANOLENS.Viewer({
//     container: imageContainer2,
//     autoRotate: true,
//     autoRotateSpeed: 0.3,
//     controlBar: false,
//   });
  
//   viewer2.add(panoramaImage2);