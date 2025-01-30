class Animal {
  constructor(name) {
    this.name = name;
  }
  present() {
    return "I Have beutiful pet name is " + this.name;
  }
}

class Breed extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bre() {
    return this.present() + " Breed of the dog is " + this.breed;
  }
}

const dog = new Breed("Rocky", "Rotwheler");
let re = dog.bre();
console.log(re);
