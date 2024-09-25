import React, { useContext } from 'react'
import { ThemeStore } from './context/ThemeCotext'
import Button from './components/Button';

const App = () => {
  const {theme , themeToggler} = useContext(ThemeStore);
  // console.log(theme)
  return (
    <>
       <div>
     <h1 style={theme === "light" ? {backgroundColor:'lightgreen' , color:"black"}: {backgroundColor:'black' , color:"white"}}>App</h1> 
     <button  onClick={()=>{themeToggler()}}> {theme==="light" ? <span>💡</span>: <span>🌜</span>}</button>  

    </div>
    <h1>Button COmponent</h1>
    <Button/>
    </>
 
  )
}

export default App
