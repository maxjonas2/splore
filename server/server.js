const http = require("http");
const app = require('./app');

const PORT = 8000;
const HOSTNAME = "localhost";

const server = http.createServer(app);

server.listen(PORT, HOSTNAME, () => {
  console.log("listening on port " + PORT);
});


