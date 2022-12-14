import express, { json } from "express";
import cors from "cors";
import "express-async-errors";

import routes from "./routes/routesIndex";
import errorHandler from "./middleware/errorHandler";

const server = express();

server.use(cors());
server.use(json());
server.use(routes);
server.use(errorHandler);

export default server;