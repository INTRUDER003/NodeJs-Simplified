const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    console.log(req.headers);
    res.write(
      "<html><head><title>Hello TRUDER</title></head><body><p>Working Dude</p></body></html>"
    );
  } else if (url === "/test" && method == "GET") {
    res.write(
      "<html><head><title>Hello TRUDER</title></head><body><p>Hello TRUDER</p></body></html>"
    );
  } else if (url === "/form") {
    res.write(
      `<html><head><title>Hello TRUDER</title></head><body>
      <form action="/test" method="POST">
      <input type="text" name="message"/>
      <button type="submit">Submit</button>
      </form></body></html>`
    );
  } else {
    res.write(
      `<html><head><title>Hello TRUDER</title></head><body>
      <p>Work Aagala baa
      </body></html>`
    );
    // res.setLocation("Location", "/");
  }

  res.end();
});

server.listen(3000);
