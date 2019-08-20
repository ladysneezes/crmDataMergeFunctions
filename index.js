const table1 = require("./testData1.json");
const table2 = require("./testData2.json");

const fs = require("fs");

makeRefArray = (input1, input2) => {
  let referenceArray = [];
  if (input1 && input2) {
    const table1Keys = Object.keys(input1[0]);
    const table2Keys = Object.keys(input2[0]);
    referenceArray = [...table1Keys, ...table2Keys];
  }
  let uniqueArray = [...new Set([...referenceArray])];
  return uniqueArray;
};

mergeJsons = (refArray, input1, input2) => {
  outputJsonArray = [];
  input1.forEach(row => {
    let rowObj = {};
    refArray.forEach(heading => {
      if (row[heading]) {
        rowObj[`${heading}`] = row[heading];
      } else {
        rowObj[`${heading}`] = "";
      }
    });
    outputJsonArray.push(rowObj);
  });
  input2.forEach(row => {
    let rowObj = {};
    refArray.forEach(heading => {
      if (row[heading]) {
        rowObj[`${heading}`] = row[heading];
      } else {
        rowObj[`${heading}`] = "";
      }
    });
    outputJsonArray.push(rowObj);
  });
  return outputJsonArray;
};

const data = mergeJsons(makeRefArray(table1, table2), table1, table2);

fs.writeFile("temp.json", JSON.stringify(data), err => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});
