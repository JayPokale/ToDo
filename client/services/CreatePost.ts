export interface payloadType {
  [key: string]: any
}

export default async function CreatePost(payload: payloadType) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  return await res.json()
}
