import { Hero } from "./class_Hero";
import { Weapon } from "./class_Weapon";
import { HeroSpear } from "./class_HeroSpear";

export class HeroSword extends Hero{
  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("Sword");
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroSpear) {
            opponent.setprivLife(opponent.getprivLife() - this.getprivPower()*2);
        } else {
            super.attack(opponent);
        }
    }
}

const walkingD = new HeroSword("Michonne", 15, 115, Weapon);
// console.log(walkingD);
