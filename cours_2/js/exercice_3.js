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




// roule 1 fois au début du script         
function setup() {

canvas = createCanvas(640, 640);

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

distanceMouseElipse = dist(doigtX, doigtY, ellipsePosX, ellipsePosY);

// console.log(distanceMouseElipse);

vitesse = map(distanceMouseElipse, 0, width, 5, 0.001);

// ellipsePosX = constrain (ellipsePosX, 100, width - 100);
// ellipsePosY = constrain (ellipsePosY, 100, height - 100);

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
    fill (255,0,0);
    rect(0,0,width,height);
    pop();
    }

noStroke();
// ellipsePosX = ellipsePosX + 1;
// ellipsePosY = ellipsePosY + 1;
ellipse(ellipsePosX, ellipsePosY, 200);

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