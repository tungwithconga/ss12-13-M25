import React from 'react'
//Ham đi lấy dữ liệu bằng cách call API
async function getUser(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users")
    const data=await res.json();
    return data;
}
export default async function page() {
    const users=await getUser();

  return (
    <div>server
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        {users.map((item:any)=>{
            return <li>{item.name}</li>;
        })}
    </div>
  )
}
