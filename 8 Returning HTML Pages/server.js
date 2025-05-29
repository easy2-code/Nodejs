const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //   set header content type
  res.setHeader("Content-Type", "text/html");

  // send an html file in the response
  fs.readFile("../8 Returning HTML Pages/html/index.html", (err, data) => {
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
  console.log("Listing for request on port 3000....");
});
