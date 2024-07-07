import React, { useEffect, useState } from 'react'
import MemesCard from './MemesCard';
import Shimmer from './shimmer/Shimmer';

const Body = () => {
  const[items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);

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
      {!items ? <Shimmer /> : items.map((item,i) => (
     <MemesCard key={i} data={item} />
    ))}
    </div>
    
  )
}

export default Body

//A Higher-Order Component (HOC) in React is a pattern used to share common functionality between components without repeating the code.