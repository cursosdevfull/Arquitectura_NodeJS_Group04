class MeseroBasico {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  servirCafeAmericano() {
    console.log("servir café americano");
  }

  servirCafeConLeche() {
    console.log("servir café con leche");
  }
}

class MeseroModerno extends MeseroBasico {
  //name = "Juan Carlos"
  lastname: string;

  constructor(name: string, lastname: string) {
    super(name);
    this.lastname = lastname;
  }

  servirCapuccino() {
    console.log("servir capuccino");
  }

  servirFrapuccino() {
    console.log("servir frapuccino");
  }
}

const meseroBasico = new MeseroBasico("Jorge");
meseroBasico.servirCafeAmericano();
meseroBasico.servirCafeConLeche();
console.log("nombre mesero", meseroBasico.name);

const meseroModerno = new MeseroModerno("Raquel", "Loayza");
meseroModerno.servirCafeAmericano();
meseroModerno.servirCafeConLeche();
meseroModerno.servirCapuccino();
meseroModerno.servirFrapuccino();
console.log("nombre mesero", meseroModerno.name + " " + meseroModerno.lastname);
