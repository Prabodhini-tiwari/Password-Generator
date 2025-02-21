import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

 
 

function passwordGenerator() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [upperCase, setUppercase] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [lowerCase, setLowerCase] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator =  useCallback(()=>{
    let pass = ""

    let charSet = ""
     

    


    if(upperCase){
        charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(lowerCase){
        charSet = charSet + "abcdefghijklmnopqrstuvwxyz";
    }
    if(number) {
      charSet = charSet +"0123456789";

    }

    if(charAllowed){
     charSet = charSet +"!@#$%^&*";
    }

    for(let i = 0; i<length; i++){

      const charIndex  = Math.floor(Math.random() * charSet.length)

      pass = pass + charSet.charAt(charIndex)
    }

    setPassword(pass) 
    }, [length, number, charAllowed, upperCase,lowerCase])

  const copyPasswordToClipboard = useCallback(()=> {

    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
     

  },[password])

  useEffect(()=> {
    passwordGenerator()
  }, [length, number, charAllowed,upperCase, lowerCase, passwordGenerator])
     
  

  return (
    <>
       
      <div className = 'w-full  max-w-md mx-auto  shadow-md rounded-lg px-5 h-auto py-10 my-8 mt-40 m text-white bg-transparent shadow-black '>
        <h1 className = 'text-white text-center my-3'>Password Generator</h1>
       

        <div className = 'flex shadow rounded-lg overflow-hidden text-orange-500 mb-4'>
            <input 
            type="text" 
            value = {password}
            className = 'outline-none w-full py-1 px-3'
            placeholder = 'password'
            readOnly
            ref = {passwordRef}

            />
            <button 
            onClick = {copyPasswordToClipboard}
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>

        <div className = 'flex flex-col gap-y-2'>
           <div className = 'flex items-center gap-x-1'>
            <input 
              type="range" 
              min = {6}
              max = {50}
              value = {length}
              className = "cursor-pointer"
              onChange = {(e)=>{setLength(Number(e.target.value))}}
            />
            <label>Length:{length}</label>
           </div>

           <div className = 'flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              checked = {number}
              id = "numberInput"
              onChange = {()=>{
                setNumber((prev)=> !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
           </div> 

           <div className = 'flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              checked = {charAllowed}
              id = "charInput"
              onChange = {()=>{
                setCharAllowed((prev)=> !prev);
              }}
            />
            <label htmlFor="charInput">Special Characters</label>

           </div>

           <div className = 'flex items-center gap-x-1'>
            <input 
              type="checkbox" 
              checked = {upperCase}
              id = "upperCase"
              onChange = {()=>{
                setUppercase((prev)=> !prev);
              }}
            />

            <label htmlFor="UpperCase">UpperCase</label>
           </div>

            <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={lowerCase}
              id="lowerCase"
              onChange={() => {
                setLowerCase((prev) => !prev);
              }}
            />
            <label htmlFor="lowerCase">Lowercase</label>           
           </div>

           
        </div>
      </div>

      
      
    </>
  )
}

export default passwordGenerator
