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
  servirCapuccino() {
    console.log("servir capuccino");
  }

  servirFrapuccino() {
    console.log("servir frapuccino");
  }
}

const mesero = new MeseroModerno("Martha");
mesero.servirCafeAmericano();
