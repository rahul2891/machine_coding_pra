import React from 'react'

const MemesCard = ({data}) => {
    const {url, author} = data;
  return (
    <div className="p-5 m-5 border border-black ">
        <img className="w-64 h-64" src={url} />
        <p>{author}</p>
        
      </div>
  )
}

export default MemesCard