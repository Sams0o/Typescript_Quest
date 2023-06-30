import { Hero } from "./class_Hero"
import { HeroSword } from "./class_HeroSword"
import { Weapon } from "./class_Weapon";

export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("Axe", 10);
    }

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword) {
            opponent.setprivLife(opponent.getprivLife() - this.getprivPower()*2 - this.weapon.damage);
        } else {
            super.attack(opponent);
        }
    }
}

// const Avengers = new HeroAxe("Thor", 20, 120, Weapon);
// console.log(Avengers);
