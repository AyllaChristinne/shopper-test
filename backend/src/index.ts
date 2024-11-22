import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import cors from "cors";
import "dotenv/config";

import routes from "./index.routes";
import "./shared/typeorm/data-source";
import { PORT } from "./shared/consts";
import { errorHandler } from "./shared/error/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
