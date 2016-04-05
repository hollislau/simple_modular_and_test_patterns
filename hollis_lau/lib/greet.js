const Greeter = module.exports = function (name) {
  this.name = name;
};

Greeter.prototype.greet = function () {
  return "Hello " + this.name + "!";
};
