import React, { useState } from 'react'
import AccItems from './AccItems'

const data = [
  {
    id: 1,
    question: 'What is React?',
    ans: 'React is a front-end JavaScript library developed by Facebook in 2011.'
  },
  {
    id: 2,
    question: 'What is JSX?',
    ans: 'JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.'
  },
  {
    id: 3,
    question: 'What is Virtual DOM?',
    ans: 'The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.'
  },
  {
    id: 4,
    question: 'What is Babel?',
    ans: 'Babel is a JavaScript compiler. Babel is a popular tool for using the newest features of the JavaScript programming language.'
  }
]
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="m-auto w-[50%] mt-5">
      {data.map((item, i) => {
        return (
        <AccItems 
        key={i} 
        item={item} 
        isOpen={i === openIndex} 
        setIsOpen={()=>{
          i === openIndex ? setOpenIndex(null) : setOpenIndex(i)
        }} 
        />
        )
      })}
    </div>
  )
}

export default Accordion