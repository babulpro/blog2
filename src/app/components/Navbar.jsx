'use client';

import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';

const Navbar = () => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);
     
    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const response = await fetch("/api/category", { cache: "force-cache" });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setData(data.data); // Ensure data has correct structure
            } catch (err) {
                setError(err.message);
            }
        };

        fetchHeroData();
    }, []);

             
  
    return (
        <div className="navbar bg-base-100">
             
            <div className="">
                <ul className=" flex gap-4">    
                <li><a>Item 1</a></li>
                {error && <p className="text-red-500">{error}</p>}
                 {Data.length>0 && Data.map((value)=>
                 
                 {return <li key={value.id}><Link href={`/dashboard/category/${value.id}`}>{value.name}</Link></li>}
                
                )}
                 
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;