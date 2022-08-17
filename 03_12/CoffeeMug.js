class CoffeeMug {
  constructor(color, height, volume, hasCoffee, coffeeRoast, coffeeBrand) {
    this.color = color;
    this.height = height;
    this.volume = volume;
    this.hasCoffee = hasCoffee;
    this.coffee = {
      roast: coffeeRoast,
      brand: coffeeBrand,
    };
  }
  fillMug(newRoast, newBrand) {
    if (this.hasCoffee) {
      console.log("Mug already filled with coffee");
    } else {
      this.coffee.roast = newRoast;
      this.coffee.brand = newBrand;
      this.hasCoffee = true;
    }
  }
}

export default CoffeeMug;
