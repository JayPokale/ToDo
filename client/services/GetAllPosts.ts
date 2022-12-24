export default async function GetAllPosts(){
  const postList = await fetch("http://localhost:8000/api/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await postList.json();
}