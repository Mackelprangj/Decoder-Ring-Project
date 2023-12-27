// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return the decoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"; 
        expect(actual).to.eql(expected);
  });
  it("should return the encoded message depending on the given shift value", () => {
        const actual = caesarModule.caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
  });
   it("should leave spaces and special characters as is", () => {
        const actual = caesarModule.caesar("abc !", 8);
        const expected = "ijk !"
        expect(actual).to.equal(expected);
  });
    it("should wrap around characters at the end of alphabet", () => {
        const actual = caesarModule.caesar("Arizona", 3);
        const expected = "dulcrqd";
        expect(actual).to.equal(expected);
    });
  it("should ignore capitalization of letters", () => {
    const actual = caesarModule.caesar("HELLO", 2);
    const expected = "jgnnq";
    expect(actual).to.eql(expected);
  });
  it("should return false if the shift parameter is not present", () => {
    const actual = caesarModule.caesar("error");
    expect(actual).to.be.false;
it("should return false if the shift is greater than 25", () => {
        const actual = caesarModule.caesar("error", 26);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is less than -25", () => {
        const actual = caesarModule.caesar("error", -49);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("error", 0);
        expect(actual).to.be.false; 
    });
  });
});