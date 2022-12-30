import React, { useState } from "react";
import DeleteTodo from "../services/DeletePost";

const ddmmyyyy = (date: Date) => {
  let dt = new Date(date);
  let yyyy = dt.getFullYear().toString();
  let mm = (dt.getMonth() + 1).toString();
  let dd = dt.getDate().toString();

  if (dt.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0))
    return "Today";
  if (dt.setHours(0, 0, 0, 0) === new Date().setHours(24, 0, 0, 0))
    return "Tommarow";
  if (dt.setHours(0, 0, 0, 0) === new Date().setHours(-24, 0, 0, 0))
    return "Yesterday";

  if (parseInt(dd) < 10) dd = "0" + dd;
  if (parseInt(mm) < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
};

interface ToDoItem {
  task: null | {
    _id: string;
    title: string;
    content: string;
    deadline: Date | undefined;
  };
  setTask: Function;
  setIsActive: Function;
  allPosts: any;
  setAllPosts: Function;
}
const ToDoItem = ({ task, setTask, setIsActive, allPosts, setAllPosts }: ToDoItem) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const HandleDelete = async (id: string | undefined) => {
    setIsDeleting(true)
    const res = await DeleteTodo(id);
    setIsDeleting(false)
    if (!res.error) {
      setTask(null);
      setIsActive(false);
      setAllPosts(allPosts.filter((item: any) => item._id !== id));
    }
  };

  return (
    <div
      id={task?._id}
      className={`w-5/6 max-w-2xl h-4/5 max-h-[768px] duration-300 ease-in-out z-10 fixed p-4 bg-slate-100 rounded-lg flex flex-col ${
        task?._id || "scale-50 opacity-0 -z-10"
      }`}
    >
      <div className="py-2">
        <h1 className="text-left text-4xl px-2">{task?.title}</h1>
        {task?.deadline && (
          <p className="text-right text-sm px-2">{ddmmyyyy(task?.deadline)}</p>
        )}
      </div>
      <hr className="pb-4" />
      <p className="text-left text-xl px-2 overflow-y-auto h-full">
        {task?.content}
      </p>
      <div className="text-xl text-white py-2 text-right">
        <span
          className="bg-red-500 rounded-xl py-2 px-4 drop-shadow-md cursor-pointer"
          onClick={() => HandleDelete(task?._id)}
        >
          Delete
        </span>
      </div>
      {isDeleting && <div className="w-full h-full bg-black/30 z-10 absolute inset-0 grid place-items-center">
        <div className="w-36 h-36 bg-transparent rounded-full border-[6px] border-white/30 border-b-[6px] border-b-white animate-spin"></div>
      </div>}
    </div>
  );
};

export default ToDoItem;
