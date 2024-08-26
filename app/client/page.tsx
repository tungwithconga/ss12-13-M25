"use client"
import React, { useEffect, useState } from 'react'

export default function page() {
    // đi call Api để lấy dư liệu để đi Render
    const [users, setUsers] = useState([]);
    useEffect ( ()=>{
        //đi gọi Api 
        const getData= async ()=>{
            const res =await fetch("https://jsonplaceholder.typicode.com/users")
            const data= await res.json();
            setUsers(data)
        }
       getData();
    },[])
  return (
    <div>
      render dữ liệu phía client
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      {users.map((item:any)=>{
        return <li key={item.id}>{item.name}</li>
      })}
    </div>
  )
}