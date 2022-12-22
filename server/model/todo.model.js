import mongoose from "mongoose";

const reqStr = { type: String, required: true };
const todoSchema = new mongoose.Schema(
  {
    title: reqStr,
    content: reqStr,
    status: {type:Boolean, default:false},
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;
