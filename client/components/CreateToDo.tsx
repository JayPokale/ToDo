import React from "react";

interface CreateToDo {
  create: Boolean;
  setCreate: Function;
}
const CreateToDo = ({ create, setCreate }: CreateToDo) => {
  return (
    <div
      className={`w-5/6 max-w-2xl h-4/5 max-h-[768px] duration-300 ease-in-out z-10 fixed p-4 bg-slate-100 rounded-lg flex flex-col ${
        create ? "" : "scale-50 opacity-0 -z-10"
      }`}
    >
      <div className="py-2">
        <input
          type="text"
          className="text-4xl px-2 w-full bg-transparent outline-none"
          placeholder="Title..."
        ></input>
        <input
          id="deadline"
          type="date"
          className="text-sm px-2 bg-transparent outline-none float-right text-right"
        ></input>
        <label htmlFor="deadline" className="float-right">
          Deadline:
        </label>
      </div>
      <hr className="pb-4" />
      <textarea
        className="text-left text-xl px-2 overflow-y-auto h-full w-full bg-transparent outline-none"
        placeholder="Type something..."
      ></textarea>
      <div className="text-xl text-white py-2 text-right">
        <span className="bg-green-500 rounded-xl py-2 px-4 drop-shadow-md cursor-pointer">
          Submit
        </span>
      </div>
    </div>
  );
};

export default CreateToDo;
