const Greeter = module.exports = function (name) {
  this.name = name;
  this.nameCLI = process.argv[2];
};

Greeter.prototype.greet = function () {
  return "Hello " + this.name + "!";
};

function greetCLI() {
  if (process.argv[2]) {
    console.log("Hello " + process.argv[2] + "!");
  }
}

greetCLI();
