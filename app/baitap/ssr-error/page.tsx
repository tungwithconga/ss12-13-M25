import React from 'react';
export default async function Page() {
  let posts = null;
  let errorMessage = '';

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');
    
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    posts = await res.json();
    
    if (!Array.isArray(posts)) {
      throw new Error('Received data is not an array');
    }
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = `Xảy ra lỗi khi lấy dữ liệu: ${error.message}`;
    } else {
      errorMessage = 'Xảy ra lỗi không xác định';
    }
  }
  return (
    <div style={{ padding: '20px' }}>
      <h1>Xử lý Lỗi với SSR</h1>
      {errorMessage ? (
        <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>
      ) : (
        <ul>
          {posts.map((post: { id: number; title: string; body: string }) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body.slice(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
