const information = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `I'am ${information.name} and study at the ${information.campus} campus.`,
    e: "oO",
    T: "U ",
  })
);
