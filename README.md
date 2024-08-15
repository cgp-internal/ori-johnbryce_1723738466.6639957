Hello World Application
=======================

This is a basic Node.js application that returns a 'Hello World' message. It utilizes the Express.js framework to expose a single endpoint that returns the message.

## Dependencies

This project relies on the following files:

* `app.js`: Main entry point for the Hello World application. Sets up the Express server, defines a single endpoint, and starts the server.
* `routes/index.js`: Defines a single route to return a 'Hello World' message. Exposes `helloWorldRouter`.
* `controllers/helloWorld.js`: Handles the logic for the 'Hello World' endpoint. Exposes `helloWorldController`.
* `package.json`: Node.js project file with necessary dependencies (Express.js).
* `run.sh`: bash run script, should: install Node, init a project, install Express.
* `.gitignore`: .gitignore with node-modules and cache files.

## How to Run

1. Run `bash run.sh` to install Node.js, initialize a new project, and install Express.
2. Start the server by running `node app.js`
3. Open a web browser and navigate to `http://localhost:3000/` to see the 'Hello World' message.