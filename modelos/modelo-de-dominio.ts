// Modelo de dominio
class Address {
  location: string;
  city: string;
  country: string;

  constructor(location: string, city: string, country: string) {
    if (location.length < 3) throw "Location must be at least 3";
    if (city.length < 3) throw "City must be at least 3";
    if (country.length < 3) throw "Country must be at least 3";

    this.location = location;
    this.city = city;
    this.country = country;
  }
}

class User {
  id: number;
  name: string;
  lastname: string;
  addresses: Array<Address>;

  constructor(
    id: number,
    name: string,
    lastname: string,
    addresses: Array<Address>
  ) {
    if (id < 0) throw "ID must be a positive number";
    if (name.length < 3) throw "Name must be at least 3";
    if (lastname.length < 3) throw "Lastname must be at least 3";
    if (addresses.length < 1) throw "Addresses must be at least 1";

    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.addresses = addresses;
  }
}

const user = new User(1, "Raquel", "Loayza", [
  new Address("location1", "city1", "country1"),
  new Address("location2", "city2", "country2"),
]);
console.log(user);
