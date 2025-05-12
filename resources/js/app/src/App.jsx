import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import UserFormUpdate from './views/user/UserFormUpdate'
import UserFormDestroy from './views/user/UserFormDestroy'
import Rotas from './routes/Rotas'
import DefaultLayout from './components/DefaultLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rotas/>
    </>
  )
}

export default App
