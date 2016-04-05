const chai = require("chai");
const expect = chai.expect;
const Greeter = require(__dirname + "/../lib/greet");

const greeter = new Greeter("Maverick");
const process = {
  "argv": ["node", "greet.js"]
};

describe("greeter", function () {
  it("should have a name", function () {
    expect(greeter.name).to.eql("Maverick");
  });
  it("should return hello to somebody", function () {
    expect(greeter.greet()).to.eql("Hello Maverick!");
  });
});

describe("greetCLI", function () {
  it("should check if a name argument is provided", function () {
    process.argv.push("name");
    expect(process.argv.hasOwnProperty(2)).to.eql(true);
  });
  it("should capture and use a provided name", function () {
    process.argv[2] = "Goose";
    expect(process.argv[2]).to.eql("Goose");
  });
});
