const http = require("node:http");
const hostname = "127.0.0.1"; //localhost
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write("<h1>Lab2 - NodeJS</h1>");
  res.write("<br>");
  res.write("<p>Nội dung đoạn văn bản</p>");
  res.write(`
    <h1>Nội dung HTML5</h1>
    <img src="https://vetranhtuong.biz/wp-content/uploads/2023/05/tranh-phong-canh-bien-dep.jpg" width="100%">
    <p>Văn bản HTML 5</p>
`);

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});