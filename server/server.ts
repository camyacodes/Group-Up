import express, { Request, Response } from "express";
import connectDB from "./config/connection";
import bodyParser from "body-parser";
import userRoutes from "./routes/user";

const app = express();

const PORT = 5000;

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB();
});
