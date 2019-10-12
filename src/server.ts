import http from "http";

const { PORT = 3000 } = process.env;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json"
  });
  res.end("Nice Time");
});

server.listen(PORT, () =>
  console.log(`development:server`, `App started on PORT ${PORT}`)
);
