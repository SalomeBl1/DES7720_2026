// DES7720 — EXERCICE 3 — Conditions, animations et sons
let ellipsePosX;
let ellipsePosY;
let distanceMouseElipse;
let vitesse;

// roule 1 fois au début du script         
function setup() {
canvas = createCanvas(640, 640);

ellipsePosX = width / 2;
ellipsePosY = height / 2;

}

// Dessiner en boucle.
function draw() {
background(50,150, 220);

distanceMouseElipse = dist(mouseX, mouseY, ellipsePosX, ellipsePosY);

console.log(distanceMouseElipse);

vitesse = map(distanceMouseElipse, 0, width, 5, 0.001);

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


// ellipsePosX = ellipsePosX + 1;
// ellipsePosY = ellipsePosY + 1;
ellipse(ellipsePosX, ellipsePosY, 200);

}

