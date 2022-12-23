import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    deadline: Date,
    isPending: {type:Boolean, default:true},
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;
