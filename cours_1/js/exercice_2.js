let refletImage;

function preload() {
refletImage = loadImage("./assets/images/reflet.jpg"); 
}



function setup() {
   createCanvas(refletImage.width, refletImage.height);
   // createCanvas(refletImage.width, refletImage.height);

    background(0);
   //image(refletImage,0,0);
}

function draw() {
   background(0);
copy(refletImage,mouseX,mouseY,100,100, mouseX, mouseY,100,100);

 //image(refletImage,150,150);
  //noFill();
  //stroke(255,0,255);
  //rect(mouseX,mouseY,100,100);

}

// function mouseDragged(){
//    // copy(refletImage,mouseX,mouseY,100,100, mouseX + refletImage.width, mouseY,100,100);
//    mousePressed();
// }

// function mousePressed(){
//     copy(refletImage,mouseX,mouseY,100,100, mouseX + refletImage.width, mouseY,100,100);

//     }
/*


Pistes d’exploration — choisissez une idée ou suivez la vôtre.

- Changez la photo pour dessiner avec une image de votre choix.
- Changez la taille du fragment que vous prélevez dans la photo. Essayez un carré de 20 × 20 pixels, puis de 100 × 100 pixels.
- Dessinez avec un GIF animé pour prélever des fragments à différents moments.
- Remplacez la photo par une vidéo et dessinez avec des fragments de cette vidéo.
- Dessinez avec des formes au clic ou au glisser.
- Ajoutez deux états au sketch : un double-clic (doubleClicked()) pourrait faire passer de la photo aux formes.
*/


// 