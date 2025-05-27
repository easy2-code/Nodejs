const fs = require("fs");

// Read Stream ================
// const readStream = fs.createReadStream("../Streams and Buffers/largeData.txt", {
//   encoding: "utf8",
// });
// readStream.on("data", (chunk) => {
//   console.log("---- New chunk received ---");
//   //   console.log("New chunk received:", chunk.toString());
//   console.log("New chunk received:", chunk);
// });

// Write Stream ================
const readStream = fs.createReadStream("../Streams and Buffers/largeData.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream(
  "../Streams and Buffers/largeData2.txt",
  {
    encoding: "utf8",
  }
);
readStream.on("data", (chunk) => {
  console.log("---- New chunk received ---");
  console.log("New chunk received:", chunk);
  writeStream.write("\n New chunk \n");
  writeStream.write(chunk);
}); // instead of this we can use pipe method

readStream.pipe(writeStream);
