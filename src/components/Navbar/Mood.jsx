import React, { useEffect, useState } from 'react';
import { IoMoon,  IoSunny } from "react-icons/io5";

const Mood = () => {
  //   const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );

  const [isDarkMood, setIsDarkMood] = useState(false);

  const element = document.documentElement; // html element
  console.log(element)

    useEffect(()=>{
      if (isDarkMood === "true") 
       {element.classList.add("dark"),
       localStorage.setItem("theme", "dark")} 
       else {element.classList.remove("dark"),
      localStorage.setItem("theme","light")}
    },[isDarkMood]);

    const changeMood = () => {
      setIsDarkMood(!isDarkMood)
    }
  return (
    <div >
      { !isDarkMood ?  <IoMoon className='text-xl text-gray-500 hover:scale-125 cursor-pointer drop-shadow-[10px
          _1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ' onClick={changeMood}/> :
      <IoSunny className='text-xl text-white hover:scale-125 cursor-pointer drop-shadow-[1px
      _1px_1px_rgba(0, 0, 0, 0.1)] transition-all duration-300 ' onClick={changeMood}/>
      }
    </div>
  )
}

export default Mood
