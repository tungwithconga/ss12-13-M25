import React from 'react'

export default async function page() {
    const res= await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await res.json();
  return (
    <div>
    <h1>Danh sách Bài viết</h1>
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.slice(0, 100)}...</p>
        </li>
      ))}
    </ul>
  </div>
  )
}
