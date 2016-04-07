module.exports = exports = {
  greet: function (name) {
    return "Hello " + name + "!";
  }
};

function greetCLI() {
  if (process.argv[2]) {
    console.log("Hello " + process.argv[2] + "!");
  }
}

greetCLI();
