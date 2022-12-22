import express from "express";
import model from "../model/todo.model.js";

const todo = express.Router();

// Get ToDo
todo.get("/", async (req, res) => {
  const posts = await model.find();
  res.status(200).send({ posts });
  console.log("Success");
});

// Create ToDo
todo.post("/create", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(204).send({
      error: true,
      message: "All fields are required",
    });
    console.log("Error");
    return;
  }

  const create = await model.create({
    title,
    content,
  });
  res.status(200).send({
    error: false,
    message: "Added to database",
    todo: create,
  });
  console.log("Added");
});

// Delete ToDo
todo.delete("/delete", async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    res.status(204).send({
      error: true,
      message: "ID is Empty",
    });
    console.log("Error");
    return;
  }

  const remove = await model.deleteOne({ _id });
  res.status(200).send({
    error: false,
    message: "Deleted Successfully",
    removed: remove,
  });
  console.log("Deleted");
});

export default todo;
