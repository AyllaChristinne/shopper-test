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

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error_code: "ROUTE_NOT_FOUND",
    error_description: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
