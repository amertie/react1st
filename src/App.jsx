import react from 'react'
import Button from './Button'
import Navbar from './Navbar'
import { useState } from 'react'

const App = ()=>{
  const [number, setNumber] = useState(0)
  const [name, setName] = useState("Amerti");
  function handleClick() {
    setNumber(number + 1)
    setName("Rediet");
  }

const names=["amerti", "rediet","fenet","lidya","gelila"]
 
  
  return(
    <div className='h-screen'>
     <Navbar/>
         
      <button onClick={handleClick} className='bg-orange-400 flex flex-col items-center justify-center'>click here</button>
      <p>{number}</p>
      <p>{name}</p>
      
     
 
        <Button friendsName={names}></Button>
       



    </div>
  )
}

export default App