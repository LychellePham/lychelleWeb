import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './components/contacts'

function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='bg-my-yellow font-kanit min-h-screen block p-4'>
        <div>
          <h1 className='text-my-navy text-6xl'>Lychelle Pham</h1>
        </div>

        <footer>
          <Contacts></Contacts>
        </footer>
      
      </div>
  )
}

export default App
