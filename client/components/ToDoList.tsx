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

interface myType {
  _id: string;
  title: String;
  content: String;
  date: Date | undefined;
  setIsActive: Function;
  setTask: Function;
}

const ToDoList = ({
  _id,
  title,
  content,
  date,
  setIsActive,
  setTask,
}: myType) => {
  const task = {
    _id: _id,
    title: title,
    content:content,
    deadline: date,
  };

  return (
    <div
      className="relative mt-6 w-96 h-48 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 cursor-pointer peer"
      onClick={() => {
        setIsActive(true);
        setTask(task);
      }}
    >
      <h3
        className="text-2xl font-bold"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: "1",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </h3>
      <p
        className="mt-4 text-xl"
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          WebkitLineClamp: "3",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
      >
        {content}
      </p>
      {date && (
        <p className="absolute text-xs tracking-widest bottom-2 right-8">
          {ddmmyyyy(date)}
        </p>
      )}
    </div>
  );
};

export default ToDoList;
