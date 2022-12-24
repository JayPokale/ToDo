export interface payloadType {
  [key: string]: any
}

export default async function CreatePost(payload: payloadType) {
  const res = await fetch("http://localhost:8000/api/todo/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await res.json()
}
