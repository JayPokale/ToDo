import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CreateToDo from "../components/CreateToDo";
import Overlay from "../components/Overlay";
import ToDoItem from "../components/ToDoItem";
import ToDoList from "../components/ToDoList";

const Home: NextPage = () => {
  const [isActive, setIsActive] = useState(true);
  const [task, setTask] = useState(null);
  const [create, setCreate] = useState(true);
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>ToDo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center py-8 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Next.ToDo!</span>
        </h1>

        <p className="mt-3 text-2xl flex items-center gap-2">
          Add new task here{" "}
          <code
            className="rounded-md bg-gray-100 p-3 font-mono text-lg cursor-pointer"
            onClick={() => {
              setIsActive(true);
              setCreate(true);
            }}
          >
            Create
          </code>
        </p>

        <Overlay
          isActive={isActive}
          setIsActive={setIsActive}
          setTask={setTask}
          setCreate={setCreate}
        />
        <ToDoItem task={task} />
        <CreateToDo create={create} setCreate={setCreate} />

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <ToDoList
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022, 11, 23)}
            setIsActive={setIsActive}
            setTask={setTask}
          />

          <ToDoList
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022, 11, 24)}
            setIsActive={setIsActive}
            setTask={setTask}
          />
          <ToDoList
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022, 11, 22)}
            setIsActive={setIsActive}
            setTask={setTask}
          />
          <ToDoList
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022, 11, 30)}
            setIsActive={setIsActive}
            setTask={setTask}
          />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="text-blue-600 font-bold">Jay Pokale</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
