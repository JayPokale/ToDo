export default async function GetAllPosts(){
  const postList = await fetch(process.env.NEXT_PUBLIC_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await postList.json();
}