import React from 'react';
interface PostProps {
  params: {
    id: string;
  };
}
export default async function Page({ params }: PostProps) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
