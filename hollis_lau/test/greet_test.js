const chai = require("chai");
const expect = chai.expect;
const greeter = require(__dirname + "/../lib/greet");

describe("greeter", function () {
  it("should return hello to somebody", function () {
    expect(greeter.greet("Maverick")).to.eql("Hello Maverick!");
  });
});

describe("greetCLI", function () {
  const process = {
    "argv": ["node_path", "greet.js_path", "Goose"]
  };

  it("should check if a name argument is provided", function () {
    expect(process.argv).to.have.ownProperty(2);
  });

  it("should capture and use a provided name", function () {
    expect(process.argv[2]).to.eql("Goose");
  });
});
