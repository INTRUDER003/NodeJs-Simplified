const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url == "/check") {
    res.write(`
        <html>
        <head>
        <title>My First Web Server</title>
        </head>
        <body>
        <h1>Hello, World!</h1>
        </body>
        </html>
        `);
    return res.end();
  } else if (url == "/test" && method == 'POST') {
    let data = `
        <html>
        <head>
        <title>My First Web Server</title>
        </head>
        <body>
        <h1>Vanakkam da mapla</h1>
        </body>
        </html>
        `
    fs.writeFileSync('sample.txt', data);
    res.setHeader('location', "/check");
    res.statusCode = 302;
    return res.end();
  } else if (url == "/") {
    res.write(`
      <html>
      <head>
      <title>Hi Dude</title>
      </head>
      <body>
      <form action="/test" method="POST">
      <input type="text" name="name" placeholder="Enter your name">
      <button type="submit">Enter</button>
      </form>
      `);
    return res.end();
  }
});

server.listen(5000);
