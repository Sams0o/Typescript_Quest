import { Hero } from "./class_Hero"
import { HeroSword } from "./class_HeroSword"
import { Weapon } from "./class_Weapon";

export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("Axe");
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroSword) {
            opponent.setprivLife(opponent.getprivLife() - this.getprivPower()*2);
        } else {
            super.attack(opponent);
        }
    }
}

const Avengers = new HeroAxe("Thor", 20, 120, Weapon);
// console.log(Avengers);
