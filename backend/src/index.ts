import express from "express";
import "reflect-metadata";
import cors from "cors";
import "dotenv/config";

import routes from "./index.routes";
import "./shared/typeorm/data-source";
import { PORT } from "./shared/consts";

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
