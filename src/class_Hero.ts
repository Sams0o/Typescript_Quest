import { Weapon } from "./class_Weapon";

export class Hero {
    private name: string;
    private power: number;
    private life: number;
    weapon!: Weapon;

    constructor(name: string, power: number, life: number) {
        this.name = name;
        this.power = power;
        this.life = life
    }

    getprivName(): string {
      return this.name;
    }
    
    getprivPower(): number {
        return this.power;
    }
    
    getprivLife(): number {
      return this.life
    }
    setprivLife(value: number) {
        this.life = value;
    } 

    attack(opponent: Hero): void {
      if (!this.weapon) {
    opponent.life -= this.power;
      } else {
        opponent.life -= this.power + this.weapon.damage;
      }
    console.log(`${this.name} attaque ${opponent.name}.`);
    console.log(`Il reste ${opponent.life} à ${opponent.name}.`);
    console.log(`${opponent.name} attaque ${this.name}.`);
    console.log(`Il reste ${this.life} à ${this.name}.`);
}
  isAlive(): boolean {
    return this.life > 0
  }

}