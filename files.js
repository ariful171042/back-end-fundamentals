const fs = require("fs");

//read
// fs.readFile("./texts/text.txt", (err, data) => {
//   if (err) console.log(err);

//   console.log(data.toString());
// });

//write
// fs.writeFile("./texts/text2.txt", "Hello None", () => {
//   console.log("file written successfully");
// });

//directory
if (!fs.existsSync("./node")) {
  //create folder
  fs.mkdir("./node", (err) => {
    if (err) console.log(err);
    console.log("folder created");
  });
} else {
  //remove folder
  fs.rmdir("./node", (err) => {
    if (err) console.log(err);
    console.log("folder removed");
  });
}
//remove
