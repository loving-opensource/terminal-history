const fs = require("fs");
const hashmap = {};

const array = fs.readFileSync("history.txt").toString().split("\n");
for (historyCom in array) {
  const command = array[historyCom].split(" ");
  // console.log(command.slice(3).toString());
  const spliceC = command.slice(3).toString();

  if (!(spliceC in hashmap)) {
    hashmap[spliceC] = 1;
  } else {
    hashmap[spliceC] += 1;
  }
}
// const hashmapM = Object.values(hashmap);
// const max = Math.max(...hashmapM);
// const returnArray = [];
// console.log(max);

const sortedhash = Object.fromEntries(
  Object.entries(hashmap).sort(([, a], [, b]) => a - b)
);

console.log(sortable);
for (const [key, value] of Object.entries(sortedhash)) {
  // console.log(`${key}: ${value}`);
  // if (value == max) {
  //   returnArray.push(key);
  // }
}

// console.log(returnArray);
