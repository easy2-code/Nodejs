const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //   set header content type
  res.setHeader("Content-Type", "text/html");

  res.write('<head><link rel="styleseet" href="#"></head>');
  res.write("<p>Hello World...</p>");
  res.write("<p>I am learning Nodejs...</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("Listing for request on port 3000....");
});
