"use client"
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: User[] = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Danh sách Người dùng</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
