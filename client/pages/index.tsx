import type { NextPage } from "next";
import Head from "next/head";
import ToDoItem from "../components/ToDoItem";

const Home: NextPage = () => {
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

        <p className="mt-3 text-2xl">
          Add new task here{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg cursor-pointer">
            Create
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <ToDoItem
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022,11,23)}
          />

          <ToDoItem
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022,11,24)}
          />
          <ToDoItem
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={new Date(2022,11,22)}
          />
          <ToDoItem
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, alias."
            date={undefined}
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
