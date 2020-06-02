const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const projRouter = require("../projects/projRouter");

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/projects', projRouter );

module.exports = server;