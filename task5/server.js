// Import the built-in http module
const http = require("http");

// Define the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status code and content type
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body
  // Option1:
  // res.end('Hello, World!');

  // Option2:
  // res.end('Welcome to My Custom Server!');

  // Option3:
  // Route handling logic
  if (req.url === "/") {
    res.end("Welcome to the Homepage!");
  } else if (req.url === "/about") {
    res.end("This is the About Page!");
  } else if (req.url === "/contact") {
    res.end("Contact us at: contact@example.com");
  } else {
    // For unmatched routes, ensure a single response
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404: Page Not Found");
  }
});

// Define the port and host
// port for option1 and 3:
const PORT = 3000;

// Custom port for option2:
// const PORT = 5000

const HOST = "localhost";

// Start the server
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});

// For option3 output

// Start the server:
// node server.js
// Access the routes in your browser:
// http://localhost:3000/ → Homepage
// http://localhost:3000/about → About Page
// http://localhost:3000/contact → Contact Page
// Any other route → "404: Page Not Found"
