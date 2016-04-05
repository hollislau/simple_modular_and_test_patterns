const chai = require("chai");
const expect = chai.expect;
const Greeter = require(__dirname + "/../lib/greet");

const greeter = new Greeter("Maverick");

describe("greeter", function () {
  it("should have a name", function () {
    expect(greeter.name).to.eql("Maverick");
  });
  it("should say hello to somebody", function () {
    expect(greeter.greet()).to.eql("Hello Maverick!");
  });
});
