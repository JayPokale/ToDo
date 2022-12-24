import React, { useState } from "react";
import CreatePost from "../services/CreatePost";

interface CreateToDo {
  create: Boolean;
  setCreate: Function;
  setIsActive: Function;
  allPosts: any;
  setAllPosts: Function;
}

const CreateToDo = ({ create, setCreate, setIsActive, allPosts, setAllPosts }: CreateToDo) => {
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload: { [key: string]: any } = {};
    const data = new FormData(e.target);
    for (let key of data) {
      payload[key[0]] = key[1];
    }

    const res = await CreatePost(payload);
    setCreate(false);
    setIsActive(false);
    e.target.reset();
    !res.error && setAllPosts([res.todo,...allPosts])
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-5/6 max-w-2xl h-4/5 max-h-[768px] duration-300 ease-in-out z-10 fixed p-4 bg-slate-100 rounded-lg flex flex-col ${
        create || "scale-50 opacity-0 -z-10"
      }`}
    >
      <div className="py-2">
        <input
          type="text"
          name="title"
          className="text-4xl px-2 w-full bg-transparent outline-none"
          placeholder="Title..."
        />
      </div>
      <hr className="pb-4" />
      <textarea
        name="content"
        className="text-left text-xl px-2 overflow-y-auto h-full w-full bg-transparent outline-none"
        placeholder="Type something..."
      />
      <div className="flex justify-start px-2">
        <label htmlFor="deadline" className="text-gray-500">
          Deadline (Optional):
        </label>
        <input
          id="deadline"
          type="date"
          name="deadline"
          className=" text-sm px-2 bg-transparent outline-none text-right"
        />
      </div>

      <div className="text-xl text-white py-2 text-right">
        <input
          type="submit"
          className="bg-green-500 rounded-xl py-2 px-4 drop-shadow-md cursor-pointer"
        />
      </div>
    </form>
  );
};

export default CreateToDo;
