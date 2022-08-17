/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// import CoffeeMug from "./CoffeeMug";
import Backpack from "./Backpack";

// const myCoffeeMug = new CoffeeMug("black", 3, 16, false);
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log(everydayPack);
// console.log(myCoffeeMug);
