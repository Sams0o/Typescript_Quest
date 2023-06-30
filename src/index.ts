import { Hero } from "./class_Hero";
import { HeroAxe } from "./class_HeroAxe";
import { HeroSword } from "./class_HeroSword";
import { Weapon } from "./class_Weapon";

const Avengers = new HeroSword
("Thor", 20, 120, Weapon);
const walkingD = new HeroSword("Michonne", 20, 120, Weapon);

while (Avengers.isAlive() && walkingD.isAlive()) {
  Avengers.attack(walkingD);
  walkingD.attack(Avengers);
}

if (!Avengers.isAlive() && !walkingD.isAlive()) {
  console.log(`It's a draw.`); 
} else if (walkingD.isAlive()) {
  console.log(`${walkingD.getprivName()} wins !`);
} else {
  console.log(`${Avengers.getprivName()} wins !`);
}