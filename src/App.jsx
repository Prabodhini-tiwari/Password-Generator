import React from 'react';
import { useState } from "react"

 

function App() {
  const [color, setColor] = useState("olive")

  return (
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}> 
        <h1 className=' flex justify-center text-2xl font-semibold font-sans '>Background Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-2"> 
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button  onClick = {()=> setColor("red")} 

            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"red"}}>Red</button>

            <button onClick = {()=> setColor("blue")} 

             className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"blue"}}>Blue</button>

            <button onClick = {()=> setColor("green")}  
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"green"}}>Green</button>

            <button onClick = {()=> setColor("yellow")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"yellow"}}>yellow</button>

            <button onClick = {()=> setColor("pink")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"pink"}}>pink</button>

            <button onClick = {()=> setColor("orange")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"orange"}}>orange</button>

            <button onClick = {()=> setColor("purple")}  
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
            style={{backgroundColor:"purple "}}>purple</button>
          </div>
        </div>

     </div>
  )
}

export default App
