const { expect } = require("chai");
const { mergeJsons, makeRefArray } = require("./index.js");

const table1 = require("./testData1.json");
const table2 = require("./testData2.json");

const refArray = ["headerA", "headerB", "headerC", "headerD"];

describe("makeRefArray", () => {
  it("should create a new array", () => {
    expect(makeRefArray()).to.be.an("array");
  });
  it("should make an array that contains the first tables values", () => {
    expect(makeRefArray(table1, table2)).to.contain("headerA");
  });
  it("should add the second tables values to the ouput", () => {
    expect(makeRefArray(table1, table2)).to.contain("headerD");
  });
});

describe("mergeJsons", () => {
  it("should return an array", () => {
    expect(mergeJsons(refArray, table1, table2)).to.be.an("array");
  });
  it("should contain first obj with correct headings and values", () => {
    const actualResult = mergeJsons(refArray, table1, table2);
    expect(actualResult[0]).to.eql({
      headerA: "1A",
      headerB: "1B",
      headerC: "1C",
      headerD: ""
    });
  });
});
