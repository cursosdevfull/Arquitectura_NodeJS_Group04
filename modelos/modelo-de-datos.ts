// Modelo de datos
class User {
  id: number;
  name: string;
  lastname: string;

  constructor(id: number, name: string, lastname: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
  }
}

class Address {
  id: number;
  userId: number;
  location: string;
  city: string;
  country: string;

  constructor(
    id: number,
    userId: number,
    location: string,
    city: string,
    country: string
  ) {
    this.id = id;
    this.userId = userId;
    this.location = location;
    this.city = city;
    this.country = country;
  }
}

const user = new User(1, "Manuel", "Hinostroza");
const address1 = new Address(1, 1, "location1", "city1", "country1");
const address2 = new Address(2, 1, "location2", "city2", "country2");
