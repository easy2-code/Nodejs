// File FileSystem (fs)

const fs = require("fs");

// read file==================
// fs.readFile("../File System/file.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Buffer : ", data); // buffer
//   console.log("String : ", data.toString()); // string
// });
// console.log("Reading file...");

// writing file================-
// fs.writeFile("../File System/file.txt", "Hello World!", () => {
//   console.log("File written successfully");
// });

// if file does not exist this will create another file
// fs.writeFile("../File System/file1.txt", "Hello World!", () => {
//   console.log("File written successfully");
// });

// make directory================
// fs.mkdir("../File System/newDir", (err) => {
//   if (err) {
//     console.log("Directory already exists or error occurred:", err);
//   }
//   console.log("Directory created successfully");
// }); // if we run this again it will throw an error because the directory already exists

// For that we need to check if the directory exists before creating it
// if (!fs.existsSync("../File System/newDir")) {
//   fs.mkdir("../File System/newDir", (err) => {
//     if (err) {
//       console.log("Directory already exists or error occurred:", err);
//     } else {
//       console.log("Directory created successfully");
//     }
//   });
// } else {
//   fs.rmdir("../File System/newDir", (err) => {
//     if (err) {
//       console.log("Error occurred while deleting directory:", err);
//     } else {
//       console.log("Directory deleted successfully");
//     }
//   });
// }

//deleting file================
if (fs.existsSync("../File System/deleteMe.txt")) {
  fs.unlink("../File System/deleteMe.txt", (err) => {
    if (err) {
      console.log("Error occurred while deleting file:", err);
    } else {
      console.log("File deleted successfully");
    }
  });
} else {
  console.log("File does not exist, nothing to delete");
}
