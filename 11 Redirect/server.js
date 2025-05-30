const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method); // log the request URL and method in terminal

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let filePath = path.join(__dirname, "../9 Basic Routing/html/");

  switch (req.url) {
    case "/":
      filePath = path.join(filePath, "home.html");
      res.statusCode = 200; // OK
      break;
    case "/about":
      filePath = path.join(filePath, "about.html");
      res.statusCode = 200; // OK
      break;
    case "/about-me":
      res.statusCode = 301; // Moved Permanently
      res.setHeader("Location", "/about"); // redirect to /about
      res.end();
    default:
      filePath = path.join(filePath, "404.html");
      res.statusCode = 404; // Not Found
      break;
  }

  // send an html file in the response
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000...");
});
