
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';

const Navbar = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
       (async()=> fetch("http://localhost:3000/api/category",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    }).then((res)=>res.json())
    .then((data)=>{
        setData(data.data); }))()
        
        },[])
             
  
    return (
        <div className="navbar bg-base-100">
             
            <div className="">
                <ul className=" flex gap-4">    
                <li><a>Item 1</a></li>
                 {data.length>0 && data.map((value)=>
                 
                 {return <li key={value.id}><Link href={`/dashboard/category/${value.id}`}>{value.name}</Link></li>}
                
                )}
                 
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;