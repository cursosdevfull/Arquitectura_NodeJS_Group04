class Animal {
  public raza: string;
  color: string;
  esMamifero: boolean;

  constructor() {
    this.raza = "siberian husky";
    this.color = "marrón";
    this.esMamifero = true;
  }

  description() {
    return `raza = ${this.raza}, color = ${this.color}, esMamifero = ${this.esMamifero}`;
  }
}

const animal = new Animal();

console.log("raza", animal.raza);
console.log("color", animal.color);
console.log("esMamifero", animal.esMamifero);
console.log("animal", animal);

console.log("description", animal.description());

animal.raza = "Samoyedo";
console.log("animal", animal);
