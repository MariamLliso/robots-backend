require("dotenv").config();
const { program } = require("commander");

program.option("-p,--port <port>", "port for theAPI");
program.parse();

const { port: userPortInput } = program.opts();

const port = userPortInput || process.env.SERVER_PORT || 4005;

module.exports = port;
