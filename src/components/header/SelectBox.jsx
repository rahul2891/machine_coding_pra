import React, { useContext } from 'react'
import { LanguageContext } from '../LanguageContext';

const SelectBox = () => {
  const {lang, setLang} = useContext(LanguageContext);

  return (
    <select className="text-black text-sm p-2" value={lang} onChange={(e) => {setLang(e.target.value)}}>
        <option value = "en">English</option>
        <option value = "hi">Hindi</option>
        <option value = "sp">Spanish</option>
        <option value = "ru">Russian</option>
        <option value = "fe">French</option>

    </select>
  )
}

export default SelectBox