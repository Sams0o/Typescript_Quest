import { Hero } from "./class_Hero";
import { HeroAxe } from "./class_HeroAxe";
import { HeroSword } from "./class_HeroSword";
import { Weapon } from "./class_Weapon";

const Avengers = new HeroAxe("Thor", 20, 120);
const walkingD = new HeroSword("Michonne", 15, 115);
//correction formateur
let i = 1;

while (Avengers.isAlive() && walkingD.isAlive()) {
  console.log("round", i);
  Avengers.attack(walkingD);
  walkingD.attack(Avengers);
  i++;
}

if (!Avengers.isAlive() && !walkingD.isAlive()) {
  console.log(`It's a draw.`); 
} else if (walkingD.isAlive()) {
  console.log(`${walkingD.getprivName()} wins !`);
} else {
  console.log(`${Avengers.getprivName()} wins !`);
}