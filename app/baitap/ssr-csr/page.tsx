"use client"
import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const initialPosts: Post[] = await res.json();

  return <PostList initialPosts={initialPosts} />;
}

function PostList({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const refreshPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const updatedPosts: Post[] = await res.json();
    setPosts(updatedPosts);
  };

  return (
    <div>
      <button onClick={refreshPosts}  style={{
          border:"3px solid"
        }}>
            Refresh
            </button>
      <h1>Danh sách Bài viết với Refresh </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.slice(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
