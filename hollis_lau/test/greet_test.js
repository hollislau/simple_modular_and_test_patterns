const chai = require("chai");
const expect = chai.expect;
const Greeter = require(__dirname + "/../lib/greet");

const greeter = new Greeter("Maverick");

describe("greeter", function () {
  it("should have a name", function () {
    expect(greeter.name).to.eql("Maverick");
  });
  it("should return hello to somebody", function () {
    expect(greeter.greet()).to.eql("Hello Maverick!");
  });
});

describe("greetCLI", function () {
  const process = {
    "argv": ["node", "greet.js", "Goose"]
  };
  it("should check if a name argument is provided", function () {
    expect(process.argv).to.have.ownProperty(2);
  });
  it("should capture and use a provided name", function () {
    expect(process.argv[2]).to.eql("Goose");
  });
});
