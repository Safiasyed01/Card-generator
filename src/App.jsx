import React, { useState } from 'react'

const App = () => {
  const [Name, setName] = useState('')
  const [Gmail, setGmail] = useState('')
  const [phone, setphone] = useState('')
  const [contacts, setcontacts] = useState([])
  const handleSubmit =(e)=>{
    e.preventDefault();
        const newContact = { Name, Gmail, phone };
    setcontacts([...contacts, newContact]);

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
      {/* CARDS */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{contacts.map((c,idx) =>(
    <div key={idx}  className="bg-gray-800 p-5 rounded-xl shadow-md border border-gray-700 hover:scale-105 transition-all duration-200"
> 
    <h2 className="text-xl font-bold">{c.Name}</h2>
    <p className="text-gray-300">{c.Gmail}</p>
    <p className="text-gray-300">{c.phone}</p>
     </div>
  ))}

  </div> 
    </div>
  )
}

export default App