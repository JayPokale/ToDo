import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CreateToDo from "../components/CreateToDo";
import Overlay from "../components/Overlay";
import ToDoItem from "../components/ToDoItem";
import ToDoList from "../components/ToDoList";
import GetAllPosts from "../services/GetAllPosts";

const Home: NextPage<any> = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState(null);
  const [create, setCreate] = useState(false);
  const [allPosts, setAllposts] = useState(data.posts);

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
        <ToDoItem
          task={task}
          setTask={setTask}
          setIsActive={setIsActive}
          allPosts={allPosts}
          setAllPosts={setAllposts}
        />
        <CreateToDo
          create={create}
          setCreate={setCreate}
          setIsActive={setIsActive}
          allPosts={allPosts}
          setAllPosts={setAllposts}
        />

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {allPosts.map((post: any) => {
            return (
              <ToDoList
                key={post._id}
                _id={post._id}
                title={post.title}
                content={post.content}
                date={post.deadline}
                setIsActive={setIsActive}
                setTask={setTask}
              />
            );
          })}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <h1 className="flex items-center justify-center gap-2">
          Created by <span className="text-blue-600 font-bold">Jay Pokale</span>
        </h1>
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await GetAllPosts();
  return {
    props: { data },
    revalidate: 60,
  };
}
