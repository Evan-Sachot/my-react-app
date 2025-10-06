import React , { useState, useEffect} from 'react';


function Fetch(){
    const [data, setData]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((Response)=> Response.json())
        .then((json)=> setData(json));
    }, []);
    return (
        <ul>
            {data.map((user,index)=>(
                <li key={index}>{user.id} | {user.name}</li>
            ))}
        </ul>
    )
}
export default Fetch;