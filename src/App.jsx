import React, {useEffect, useState } from 'react'
import './App.css'
import Port from './Port'
// import { ThemeProvider } from './Context/ThemeContext'



function App() {

    // const [theme , setTheme] = useState("light")
    // const lightTheme = () => {
    //       setTheme("light")

    // }
    // const darkTheme = () => {
    //     setTheme("dark")
    // }


    // useEffect(() => {
    //     document.querySelector('html').classList.remove("light" , "dark");
    //     document.querySelector('html').classList.add(theme)
    // } , [theme])
    return (
      
       
            <Port />
       
    )
}

export default App
