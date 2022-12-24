export default async function DeleteTodo(_id: string | undefined) {
  const res = await fetch("http://localhost:8000/api/todo/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: _id,
    }),
  });
  const responce = await res.json();
  return await responce;
}
