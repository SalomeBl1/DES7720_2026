// DES7720 — EXERCICE 3 — Conditions, animations et sons
let ellipsePosX;
let ellipsePosY;

let distanceMouseElipse;
let vitesse;

//son

let osc;
let enveloppe;
let reverb;
let frequency;

//image
let refletImage;

function preload() {
refletImage = loadImage("./assets/images/reflet.jpg"); 
}



// function setup() {

//    //image(refletImage,0,0);
// }

// function draw() {
//    background(0);
// copy(refletImage,mouseX,mouseY,100,100, mouseX, mouseY,100,100);

//  //image(refletImage,150,150);
//   //noFill();
//   //stroke(255,0,255);
//   //rect(mouseX,mouseY,100,100);

// }


// roule 1 fois au début du script         
function setup() {
  
createCanvas(refletImage.width, refletImage.height);

// canvas = createCanvas(640, 640);

ellipsePosX = width / 2;
ellipsePosY = height / 2;

demarrerMain();

// set up synth
enveloppe = new p5.Envelope();
reverb = new p5.Reverb(5);
enveloppe.setADSR(0.05, 1.0, 1.0, 1.0);

osc = new p5.Oscillator('sawtooth');
osc.disconnect();
osc.connect(enveloppe);
reverb.wet(0.5);

enveloppe.disconnect();
enveloppe.connect(reverb);
osc.amp(0.3);
osc.start();

}


// Dessiner en boucle.
function draw() {

background(50,150, 220);
//copy(refletImage,mouseX,mouseY,100,100, mouseX, mouseY,100,100);





  distanceMouseElipse = dist(doigtX, doigtY, ellipsePosX, ellipsePosY);


vitesse = map(distanceMouseElipse, 0, width, 5, 0.001);


if (doigtX > ellipsePosX) {
    ellipsePosX = ellipsePosX - vitesse;
    }

else if (doigtX < ellipsePosX) {
    ellipsePosX = ellipsePosX + vitesse;
    }

if (doigtY > ellipsePosY) {
    ellipsePosY = ellipsePosY - vitesse;
    }

else if (doigtY < ellipsePosY) {
    ellipsePosY = ellipsePosY + vitesse;
    }

if (pince) {

ellipsePosX = lerp(ellipsePosX, doigtX, 0.2);
ellipsePosY = lerp(ellipsePosY, doigtY, 0.2);

 push(); 
  
  // Définit la zone de découpe en ellipse (centrée sur la souris)
  beginClip();

  ellipse(doigtX, doigtY, 200, 200);

  endClip();
  
  // Dessine l'image (seule la partie dans l'ellipse sera visible)
  image(refletImage, 0, 0); 
  
  // Restaure le canvas normal pour la suite du dessin
  pop(); 



    push();
    fill (255,0,0);
    rect(0,0,width,height);
    pop();
    }
noFill();

 push(); 
  
  // Définit la zone de découpe en ellipse (centrée sur la souris)
  beginClip();

  ellipse(ellipsePosX, ellipsePosY, 200, 200);

  endClip();
  
  // Dessine l'image (seule la partie dans l'ellipse sera visible)
  image(refletImage, 0, 0); 
  
  // Restaure le canvas normal pour la suite du dessin
  pop(); 
// noStroke();
// ellipsePosX = ellipsePosX + 1;
// ellipsePosY = ellipsePosY + 1;

// ellipse(ellipsePosX, ellipsePosY, 200);

dessinerMain();

}

function mousePressed() {
//     // console.log('clic!');
//     // ellipsePosX = random(100, width - 100);
//     // ellipsePosY = random(100, height - 100);
    

}

function mouseReleased() {

}


function doigtPressed() {



    frequency = map(distanceMouseElipse, 0, width, 820, 60);
   osc.freq(frequency);
    enveloppe.play();
}

function doigtReleased() {
        osc.freq(280);
    enveloppe.play();
  
}   