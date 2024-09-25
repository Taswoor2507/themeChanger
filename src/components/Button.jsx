import React, { useContext } from 'react'
import { ThemeStore } from '../context/ThemeCotext';
const Button = () => {
    const {theme} = useContext(ThemeStore);
    console.log("button comp" , theme)
  return (
    <div>
     <button style={theme === "light" ? {backgroundColor:"lightcoral" ,color:"black"}:{backgroundColor:"black" , color:"white"}}>Login</button>
    </div>
  )
}

export default Button
