import React from 'react'

const AccItems = ({item, isOpen, setIsOpen}) => {
    const {id, question, ans} = item
  return (
    <div className="border" onClick={() => {setIsOpen((isOpen) => !isOpen)}}>
    <div className="flex flex-row justify-between p-2 bg-slate-200" >
    <span >{question}</span>
    <span>⬇️</span>

    </div>
    {isOpen && <div className="p-2">{ans}</div>}
  </div>
  )
}

export default AccItems