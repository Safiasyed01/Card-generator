import React, { useState } from 'react'

const App = () => {
  const [Name, setName] = useState('')
  const [Gmail, setGmail] = useState('')
  const [phone, setphone] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault();
 console.log("Name:",Name)
 console.log("Gmail:",Gmail)
 console.log("phone:",phone)
 setName("")
 setGmail("")
 setphone("")
  }
  return (
    <div className='p-14'>
      <h1 className='text-2xl  font-bold'>Contact Card Generator</h1>
      <form onSubmit={handleSubmit}  className='flex flex-col gap-4 items-start border border-gray-200 shadow-sm p-4 p-9 rounded-lg  h-70  w-90'>
        <input type="text"
         placeholder='Name' 
         value={Name} onChange={(e) => setName(e.target.value)} 
         className='h-13 w-full font-light text-xl'/>
        <input type="email" 
        placeholder='Gmail'
         value={Gmail} onChange={(e)=> setGmail(e.target.value)}
          className='h-13 w-full font-light text-xl'/>
        <input type="tell" 
        placeholder='phone'
        value={phone} onChange={(e)=> setphone(e.target.value )} 
        className='h-13 w-full font-light text-xl'/>
         <button className=' bg-gray-300 h-13 rounded-xl active:scale-99 w-full'>Add contacts</button>

      </form> 

    </div>
  )
}

export default App