import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path"
dotenv.config();
import todo from "./routes/todo.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/todo", todo);
app.use(express.static(".next/server/pages"))
app.get("*", (req, res) => {
  res.render(path.dirname + "/.next/server/pages/index.html");
});

mongoose.connect(process.env.MONGO_URL, (err) => {
  err ? console.log(err.message) : console.log("connected");
  err ||
    app.listen(port, (error) => {
      error
        ? console.log(error.message)
        : console.log("Server is running on:", port);
    });
});
