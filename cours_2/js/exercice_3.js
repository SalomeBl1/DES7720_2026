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

distanceMouseElipse = dist(mouseX, mouseY, ellipsePosX, ellipsePosY);

// console.log(distanceMouseElipse);

vitesse = map(distanceMouseElipse, 0, width, 5, 0.001);

// ellipsePosX = constrain (ellipsePosX, 100, width - 100);
// ellipsePosY = constrain (ellipsePosY, 100, height - 100);

if (mouseX > ellipsePosX) {
    ellipsePosX = ellipsePosX - vitesse;

    }
else if (mouseX < ellipsePosX) {
    ellipsePosX = ellipsePosX + vitesse;
    }

    if (mouseY > ellipsePosY) {
    ellipsePosY = ellipsePosY - vitesse;

    }
else if (mouseY < ellipsePosY) {
    ellipsePosY = ellipsePosY + vitesse;
    }
if (mouseIsPressed) {
    ellipsePosX = lerp(ellipsePosX, mouseX, 0.2);
    ellipsePosY = lerp(ellipsePosY, mouseY, 0.2);

    push();
    fill (255,0,0);
    rect(0,0,width,height);
    pop();
}

noStroke();
// ellipsePosX = ellipsePosX + 1;
// ellipsePosY = ellipsePosY + 1;
ellipse(ellipsePosX, ellipsePosY, 200);

}

function mousePressed() {
//     // console.log('clic!');
//     // ellipsePosX = random(100, width - 100);
//     // ellipsePosY = random(100, height - 100);
    
frequency = map(distanceMouseElipse, 0, width, 820, 60);
 osc.freq(frequency);
    enveloppe.play(osc);
}

function mouseReleased() {
    osc.freq(280);
    enveloppe.play();
}