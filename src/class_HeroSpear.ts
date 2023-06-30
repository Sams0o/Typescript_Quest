import { Hero } from "./class_Hero"
import { Weapon } from "./class_Weapon"
import { HeroAxe } from "./class_HeroAxe"

export class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = new Weapon("Spear");
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroAxe) {
            opponent.setprivLife(opponent.getprivLife() - this.getprivPower()*2);
        } else {
            super.attack(opponent);
        }
    }
}
 
const troll = new HeroSpear("Kojac", 10, 100, Weapon);
// console.log(troll);