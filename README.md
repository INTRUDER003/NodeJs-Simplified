# Node.js - Simplified (Self Learning Purpose)

## Table of Contents

### 1. Introduction to Node.js

- 1.1 What is Node.js?
- 1.2 Key Features of Node.js
- 1.3 How Node.js Works: Event Loop & Non-blocking I/O
- 1.4 Setting Up Node.js Environment
- 1.5 Your First Node.js Program

### 2. Node.js Modules

- 2.1 What are Modules in Node.js?
- 2.2 Built-in Modules vs Custom Modules
- 2.3 Using `require()` and `module.exports`
- 2.4 Exploring Core Modules (e.g., `fs`, `path`, `http`, `os`)
- 2.5 Using Third-Party Modules with npm
- 2.6 Creating Custom Modules

### 3. Node.js File System (FS) Module

- 3.1 Reading Files (Synchronous vs Asynchronous)
- 3.2 Writing to Files
- 3.3 Updating and Deleting Files
- 3.4 Working with Directories
- 3.5 Handling File Errors

### 4. Node.js HTTP Module

- 4.1 Creating a Basic HTTP Server
- 4.2 Handling HTTP Requests and Responses
- 4.3 Working with Query Strings and URL Parameters
- 4.4 Serving Static Files (HTML, CSS, JS)
- 4.5 Implementing Basic Routing
- 4.6 Handling POST Requests and Parsing Request Body

### 5. Event-Driven Programming in Node.js

- 5.1 Introduction to Events in Node.js
- 5.2 EventEmitter Class
- 5.3 Creating and Handling Custom Events
- 5.4 Practical Use Cases of Events in Node.js

### 6. Asynchronous Programming in Node.js

- 6.1 Callbacks
- 6.2 Promises
- 6.3 Async/Await
- 6.4 Handling Errors in Asynchronous Code
- 6.5 Parallel vs Sequential Execution

### 7. Working with Databases in Node.js

- 7.1 Connecting Node.js with a Database (e.g., MongoDB, MySQL, PostgreSQL)
- 7.2 Performing CRUD Operations
- 7.3 Using ORM/ODM Libraries (e.g., Sequelize, Mongoose)
- 7.4 Handling Database Transactions
- 7.5 Implementing Pagination and Sorting

### 8. Express.js Framework

- 8.1 Introduction to Express.js
- 8.2 Setting Up an Express Application
- 8.3 Creating Routes in Express
- 8.4 Handling Middleware in Express
- 8.5 Serving Static Files in Express
- 8.6 Implementing Error Handling in Express
- 8.7 Routing and Controllers
- 8.8 Working with Templating Engines (e.g., EJS, Pug)
- 8.9 Using Express Router for Modular Routing

### 9. Working with APIs in Node.js

- 9.1 What are RESTful APIs?
- 9.2 Creating a RESTful API with Node.js and Express
- 9.3 HTTP Methods (GET, POST, PUT, DELETE)
- 9.4 Handling JSON Data in API Requests/Responses
- 9.5 Authentication and Authorization (e.g., JWT, OAuth)
- 9.6 Rate Limiting and API Security Best Practices

### 10. Websockets and Real-time Applications

- 10.1 Introduction to WebSockets
- 10.2 Setting Up WebSocket Server in Node.js
- 10.3 Implementing Real-Time Chat Application
- 10.4 Handling Real-Time Notifications
- 10.5 Using Socket.io for WebSockets in Node.js

### 11. Node.js Streams

- 11.1 What are Streams?
- 11.2 Types of Streams (Readable, Writable, Duplex, Transform)
- 11.3 Reading and Writing Files with Streams
- 11.4 Piping Streams
- 11.5 Handling Stream Events (data, end, error)
- 11.6 Practical Use Cases of Streams (e.g., File Uploads)

### 12. Testing in Node.js

- 12.1 Introduction to Testing
- 12.2 Unit Testing with Mocha and Chai
- 12.3 Integration Testing
- 12.4 Mocking in Tests
- 12.5 Writing End-to-End (E2E) Tests
- 12.6 Continuous Integration (CI) and Automated Testing

### 13. Deploying Node.js Applications

- 13.1 Preparing for Production: Best Practices
- 13.2 Deployment Options (e.g., Heroku, AWS, DigitalOcean)
- 13.3 Using PM2 for Process Management
- 13.4 Setting Up Load Balancing
- 13.5 Environment Variables and Config Management
- 13.6 Monitoring and Logging in Production

### 14. Security Best Practices in Node.js

- 14.1 Securing Node.js Applications
- 14.2 Preventing SQL Injection and XSS Attacks
- 14.3 Using HTTPS and SSL/TLS in Node.js
- 14.4 Managing Authentication and Session Security
- 14.5 Protecting Against Brute Force and DDOS Attacks
- 14.6 Handling Sensitive Data (e.g., Password Hashing, Encryption)

### 15. Node.js Performance Optimization

- 15.1 Optimizing Event Loop Performance
- 15.2 Using Clustering to Scale Applications
- 15.3 Memory Leaks and Garbage Collection
- 15.4 Profiling and Debugging Node.js Applications
- 15.5 Implementing Caching Strategies (e.g., Redis)

### 16. Advanced Topics in Node.js

- 16.1 Building Native Addons with C++
- 16.2 Working with Child Processes
- 16.3 Using Worker Threads for Parallelism
- 16.4 Building and Publishing npm Packages
- 16.5 Integrating with External APIs and Services

### 17. Appendix

- 17.1 Useful Node.js Tools and Libraries
- 17.2 Node.js Best Practices and Coding Standards
- 17.3 Recommended Learning Resources
- 17.4 Common Node.js Interview Questions

# Introduction to Node.js

## 1.1 What is Node.js?

Node.js is a platform that allows you to run JavaScript on the server side, outside of a web browser. Traditionally, JavaScript was used to make websites interactive by running in the user's browser. However, with Node.js, you can use JavaScript to build full applications, from the backend (the part of the website or app that users don’t see) to the frontend (the part that users interact with).

Think of Node.js as the engine that powers JavaScript on the server. It's built on top of the Chrome V8 engine, which makes it fast and efficient.

**Key points:**

- **JavaScript on the server**: With Node.js, JavaScript is not limited to the browser anymore.
- **Powered by Chrome V8 engine**: This engine is responsible for running JavaScript very quickly.

![Node.js Explanation](https://via.placeholder.com/600x300.png)

## 1.2 Key Features of Node.js

Some of the main features that make Node.js popular include:

- **Asynchronous and Event-driven**: Node.js allows multiple things to happen at once (like multitasking), which makes it great for handling many requests at the same time.
- **Non-blocking I/O**: Input/output operations (like reading a file or accessing a database) do not block the main process, meaning Node.js can handle other tasks in the meantime.
- **Single-threaded**: Node.js uses a single thread to handle all operations, but because of its asynchronous nature, it can still manage many operations efficiently.
- **Cross-platform**: Node.js runs on Windows, Linux, macOS, and more.

![Node.js Features](https://via.placeholder.com/600x300.png)

## 1.3 How Node.js Works: Event Loop & Non-blocking I/O

Node.js uses an event loop to handle multiple operations. The event loop is like a manager that keeps track of all tasks that need to be done and ensures that none of them block others.

- **Event Loop**: This is what allows Node.js to perform non-blocking I/O. Instead of waiting for a task to complete, Node.js moves on to the next task and returns to the first one later.
- **Non-blocking I/O**: Operations like reading files, sending network requests, or accessing databases are non-blocking. This means Node.js doesn’t wait for these tasks to finish; it keeps processing other things.

Imagine a restaurant: the event loop is like a waiter who takes orders and serves food. The waiter doesn’t wait by the kitchen until the food is ready; they continue serving other customers and only come back when the food is ready.

![Node.js Event Loop](https://via.placeholder.com/600x300.png)

## 1.4 Setting Up Node.js Environment

To start working with Node.js, you need to set up your development environment:

1. **Install Node.js**: Go to the [Node.js website](https://nodejs.org) and download the latest version.
2. **Check Installation**: After installation, open your terminal or command prompt and type `node -v` to check the version of Node.js installed.
3. **Set Up a Project Folder**: Create a folder for your Node.js project and open it in a code editor (like Visual Studio Code).

```bash
# Example of checking Node.js version
$ node -v
v18.0.0
```

## 1.5 Your First Node.js Program

Let’s write a simple Node.js program that prints "Hello, World!" to the console.

1. Create a new file called `app.js` in your project folder.
2. Write the following code in `app.js`:

```javascript
console.log("Hello, World!");
```

3. Open your terminal, navigate to your project folder, and run the program using the following command:

```bash
$ node app.js
```

You should see the text `Hello, World!` printed on the screen.

![Hello World Example](https://via.placeholder.com/600x300.png)

# Node.js Modules

## 2.1 What are Modules in Node.js?

Modules in Node.js are reusable blocks of code that can be included in other parts of your application. Each module in Node.js has its own context, meaning variables and functions defined in one module are not accessible in another unless explicitly exported. This modular design helps in organizing code, making it more manageable and reusable.

### Example:

Suppose you have a file `mathOperations.js` where you define some mathematical functions:

```javascript
// mathOperations.js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
```

You can then use these functions in another file by importing the module:

```javascript
// app.js
const math = require("./mathOperations");

console.log(math.add(5, 3)); // Outputs: 8
console.log(math.subtract(5, 3)); // Outputs: 2
```

## 2.2 Built-in Modules vs Custom Modules

- **Built-in Modules**: These are modules provided by Node.js out of the box. Examples include `fs` for file system operations, `http` for creating servers, and `path` for handling file paths.
- **Custom Modules**: These are user-defined modules created to encapsulate specific functionality. You define these modules in separate files and then use `require()` to include them in your application.

### Example:

Using a built-in module:

```javascript
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello, world!");
console.log("File created successfully");
```

Creating and using a custom module:

```javascript
// greeting.js
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;
```

```javascript
// app.js
const greet = require("./greeting");

console.log(greet("John")); // Outputs: Hello, John!
```

## 2.3 Using `require()` and `module.exports`

- **`require()`**: This function is used to include modules in your application. You can use it to load both built-in and custom modules.
- **`module.exports`**: This is an object that is returned as the result of a `require()` call. You can attach functions, objects, or variables to `module.exports` to make them available in other files.

### Example:

```javascript
// calculator.js
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

module.exports = { multiply, divide };
```

```javascript
// app.js
const calculator = require("./calculator");

console.log(calculator.multiply(10, 2)); // Outputs: 20
console.log(calculator.divide(10, 2)); // Outputs: 5
```

## 2.4 Exploring Core Modules

Node.js comes with several core modules that provide essential functionalities:

- **`fs` (File System)**: Allows interacting with the file system, reading, writing, and manipulating files.
- **`path`**: Provides utilities for working with file and directory paths.
- **`http`**: Used to create servers and handle HTTP requests and responses.
- **`os`**: Provides information about the operating system, such as CPU architecture, memory, and network interfaces.

### Example:

```javascript
const os = require("os");
const path = require("path");
const fs = require("fs");

console.log(`Operating System: ${os.platform()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Home Directory: ${os.homedir()}`);

const filePath = path.join(os.homedir(), "hello.txt");
fs.writeFileSync(filePath, "Hello, Node.js!");
console.log("File created at:", filePath);
```

## 2.5 Using Third-Party Modules with npm

Node.js has a rich ecosystem of third-party modules that can be installed using npm (Node Package Manager). These modules provide additional functionality that isn't included in Node.js by default.

### Example:

Let's say you want to use the `axios` library to make HTTP requests.

1. Install the module using npm:

```bash
npm install axios
```

2. Use the module in your application:

```javascript
const axios = require("axios");

axios
  .get("https://api.github.com/users/octocat")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

## 2.6 Creating Custom Modules

Creating custom modules in Node.js is straightforward. You just define your functions or objects in a file, then export them using `module.exports`.

### Example:

Let's create a module for basic string operations.

```javascript
// stringOperations.js
function toUpperCase(str) {
  return str.toUpperCase();
}

function toLowerCase(str) {
  return str.toLowerCase();
}

module.exports = { toUpperCase, toLowerCase };
```

You can then use these functions in another file:

```javascript
// app.js
const stringOps = require("./stringOperations");

console.log(stringOps.toUpperCase("hello")); // Outputs: HELLO
console.log(stringOps.toLowerCase("WORLD")); // Outputs: world
```


## Node.js File System (FS) Module

The File System (FS) module in Node.js allows you to work with the file system on your computer. It provides functions to read, write, update, delete, and manage files and directories.

### 3.1 Reading Files (Synchronous vs Asynchronous)

- **Synchronous Reading**: Blocks the execution of code until the file is read completely. It’s straightforward but can slow down the program if the file is large.

  ```javascript
  const fs = require('fs');

  try {
      const data = fs.readFileSync('example.txt', 'utf8');
      console.log(data);
  } catch (err) {
      console.error('Error reading file:', err);
  }
  ```

  *Example*: Suppose you want to read a file containing a list of items. This approach will read the file and then proceed to the next operation only after reading is complete.

- **Asynchronous Reading**: Allows other code to run while the file is being read. It’s non-blocking and more efficient for larger files.

  ```javascript
  const fs = require('fs');

  fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
          console.error('Error reading file:', err);
          return;
      }
      console.log(data);
  });
  ```

  *Example*: This approach is useful when you're reading large files or performing operations that shouldn't block the execution of other code, such as reading a log file on a web server.

### 3.2 Writing to Files

You can write to files using both synchronous and asynchronous methods.

- **Synchronous Writing**:

  ```javascript
  const fs = require('fs');

  try {
      fs.writeFileSync('output.txt', 'This is a synchronous write.');
      console.log('File written successfully');
  } catch (err) {
      console.error('Error writing to file:', err);
  }
  ```

  *Example*: Writing user data to a file right after user registration.

- **Asynchronous Writing**:

  ```javascript
  const fs = require('fs');

  fs.writeFile('output.txt', 'This is an asynchronous write.', (err) => {
      if (err) {
          console.error('Error writing to file:', err);
          return;
      }
      console.log('File written successfully');
  });
  ```

  *Example*: Saving a configuration file after user settings are updated, without blocking other operations.

### 3.3 Updating and Deleting Files

- **Updating Files**: You can append content to a file using `fs.appendFile()` or `fs.appendFileSync()`.

  ```javascript
  const fs = require('fs');

  fs.appendFile('output.txt', '
Appending this line.', (err) => {
      if (err) {
          console.error('Error appending to file:', err);
          return;
      }
      console.log('File updated successfully');
  });
  ```

  *Example*: Logging application events or errors to a log file.

- **Deleting Files**: Use `fs.unlink()` or `fs.unlinkSync()` to delete files.

  ```javascript
  const fs = require('fs');

  fs.unlink('output.txt', (err) => {
      if (err) {
          console.error('Error deleting file:', err);
          return;
      }
      console.log('File deleted successfully');
  });
  ```

  *Example*: Removing temporary files or clearing user-generated content.

### 3.4 Working with Directories

- **Creating a Directory**:

  ```javascript
  const fs = require('fs');

  fs.mkdir('new_directory', (err) => {
      if (err) {
          console.error('Error creating directory:', err);
          return;
      }
      console.log('Directory created successfully');
  });
  ```

  *Example*: Creating a folder to store user-uploaded files.

- **Reading a Directory**:

  ```javascript
  const fs = require('fs');

  fs.readdir('.', (err, files) => {
      if (err) {
          console.error('Error reading directory:', err);
          return;
      }
      console.log('Files in directory:', files);
  });
  ```

  *Example*: Listing all files in a directory to display on a web page.

- **Deleting a Directory**:

  ```javascript
  const fs = require('fs');

  fs.rmdir('new_directory', (err) => {
      if (err) {
          console.error('Error deleting directory:', err);
          return;
      }
      console.log('Directory deleted successfully');
  });
  ```

  *Example*: Removing a folder when a user deletes their account.

### 3.5 Handling File Errors

Handling errors when working with the file system is crucial to avoid unexpected crashes.

- **Example**:

  ```javascript
  const fs = require('fs');

  fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
      if (err) {
          console.error('File read error:', err.message);
          return;
      }
      console.log(data);
  });
  ```

  *Example*: Attempting to read a non-existent file should be handled gracefully to inform the user without crashing the program.
