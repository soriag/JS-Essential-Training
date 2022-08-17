/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const mug = {
  color: "black",
  height: 4,
  coffee: {
    roast: "medium",
    brand: "dolce",
  },
};

const drawer = {
  volume: 8,
  open: "False",
  size: {
    lenght: 15,
    height: 5,
  },
};

console.log(mug.coffee.roast);
