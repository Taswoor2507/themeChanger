import { createContext, useState } from "react";

const ThemeStore =  createContext({})  

const ThemeProvider =  ({children})=>{
    const [theme , setTheme]=  useState("light")
    function themeToggler(){
        setTheme(theme === "light"? "dark" : "light")  // toggle theme
    }

    return (
        <ThemeStore.Provider value={{theme , themeToggler}}>
                 {children}
        </ThemeStore.Provider>
    )
}

export { ThemeStore, ThemeProvider }