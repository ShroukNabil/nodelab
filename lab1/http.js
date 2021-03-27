const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    res.write("<h1>Hello</h1>");
    res.end()
});

server.listen(3000);
