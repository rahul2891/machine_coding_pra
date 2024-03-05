import React, { useEffect, useState } from 'react'
import MemesCard from './MemesCard';

const Body = () => {
  const[items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("fetching data");
  },[])

  const fetchData = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const res = await data.json();
    console.log(res.memes);
    setItems(res.memes);
    
  }
  return (
    <div className="flex flex-wrap">
      {items.map((item,i) => (
     <MemesCard key={i} data={item} />
    ))}
    </div>
  )
}

export default Body