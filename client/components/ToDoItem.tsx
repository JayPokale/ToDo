import React from "react";

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
  task: {
    _id: string;
    title: string;
    content: string;
    date: Date;
  };
}
const ToDoItem = ({ task }: ToDoItem) => {
  console.log(typeof task);
  return (
    <div className={`w-5/6 max-w-2xl h-4/5 max-h-[768px] duration-300 ease-in-out z-10 fixed p-4 bg-slate-100 flex flex-col ${task ? "" : "scale-50 opacity-0 -z-10"}`}>
      <div className="pb-2">
        <h1 className="text-left text-4xl px-2">{task?.title}</h1>
        <p className="text-right text-sm px-2">{ddmmyyyy(task?.date)}</p>
      </div>
      <hr className="pb-4"/>
      <p className="text-left text-xl px-2 overflow-y-auto h-full">{task?.content}</p>
    </div>
  );
};

export default ToDoItem;
