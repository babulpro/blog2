 
import React from 'react';
import Navbar from '../components/Navbar';

const getData=async()=>{
    let data = await(await fetch("http://localhost:3000/api/category",{ cache : 'force-cache' } )).json(); 
    return data;
}

 
 
const page = async() => { 
    let data = await getData()
    return (
        <div>
            <Navbar data = {data.data}/>
            hello babul
        </div>
    );
};

export default page;