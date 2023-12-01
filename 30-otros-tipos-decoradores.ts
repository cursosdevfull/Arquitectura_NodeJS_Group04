function Log01(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

function Log02(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accesor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log03(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log04(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log01
  title: string;

  private _price: number;

  @Log02
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw "Invalid price - it should be positive";
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log03
  getPriceWithTax(tax01: number, @Log04 tax: number) {
    return this._price * (1 + tax / 100);
  }
}

const product = new Product("Televisor", 2000);
//product.price = -10
console.log("price with tax", product.getPriceWithTax(100, 10));
