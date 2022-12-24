import express from "express";
import model from "../model/todo.model.js";

const todo = express.Router();

// Get ToDo
todo.get("/", async (req, res) => {
  const posts = await model.find();
  res.status(200).send({ posts, error: false });
  console.log("Success");
});

// Create ToDo
todo.post("/create", async (req, res) => {
  const { title, content, deadline=null } = req.body;

  if (!title || !content) {
    res.status(204).send({
      message: "All fields are required",
      error: true,
    });
    console.log("Error");
    return;
  }

  const create = await model.create({
    title,
    content,
    deadline,
  });
  res.status(200).send({
    message: "Added to database",
    todo: create,
    error: false,
  });
  console.log("Added");
});

// Delete ToDo
todo.delete("/delete", async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    res.status(204).send({
      message: "ID is Empty",
      error: true,
    });
    console.log("Error");
    return;
  }

  const remove = await model.deleteOne({ _id });
  res.status(200).send({
    message: "Deleted Successfully",
    removed: remove,
    error: false,
  });
  console.log("Deleted");
});

export default todo;
