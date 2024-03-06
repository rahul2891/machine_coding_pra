import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext';
import { LANG } from './utils/langConstant';

const About = () => {
  const {lang, setLang} = useContext(LanguageContext);
  console.log(lang);
  const data = LANG[lang];
  console.log(data);

  // you need to create config file for the language or it should comes from the server
  // you can create a json file for the language and import it here
  // you can also use the fetch api to get the language from the server

  return (
    <div className="m-4">
      <h1 className="font-bold text-2xl my-5">{data.title}</h1>
      <p>{data.desc}</p>
        <br />
        <br />
        <h1 className="font-bold text-2xl my-5">{data.title2}</h1>
      <p>{data.desc2}</p>
        <br />
        <h1 className="font-bold text-2xl my-5">{data.title3}</h1>
      <p>{data.desc3}</p>
        <br />
        <br />
        <h1 className="font-bold text-2xl my-5">{data.title4}</h1>
      <p>{data.desc4}</p>
        <br />
    </div>
  )
}

export default About