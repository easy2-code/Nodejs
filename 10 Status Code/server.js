const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "../9 Basic Routing/html/";
  // routing
  switch (req.url) {
    case "/home":
      path += "home.html";
      res.statusCode = 200; // OK
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200; // OK

      break;
    default:
      path += "404.html";
      res.statusCode = 404; // Not Found

      break;
  }

  // send an html file in the response
  fs.readFile(path, (err, data) => {
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
