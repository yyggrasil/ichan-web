import { useState } from 'react'
import './index.css'
import Rotas from './routes/Rotas'
import ContextProvider from './context/ContextProvider' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextProvider>
        <Rotas/>
      </ContextProvider>
    </>
  )
}

export default App
