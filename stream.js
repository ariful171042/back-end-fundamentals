const { clear } = require("console");
const fs = require("fs");

const myReadStrem = fs.createReadStream("./texts/text3.txt", {
  encoding: "utf-8",
});

const myWriteStream = fs.createWriteStream("./texts/text4.txt");

// myReadStrem.on("data", (chunk) => {
//   // console.log(
//   //   "......................Chunk....................................................................................."
//   // );
//   myWriteStream.write(".............................chunk...............");
//   myWriteStream.write(chunk);
// });

myReadStrem.pipe(myWriteStream);
