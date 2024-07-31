import { useState } from 'react'
import Join from './compenents/Join/Join'
import Chat from './compenents/Chat/Chat'
import './App.css'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);
  return (
    <div className='App'>
      {
        chatVisibility ? <Chat socket={socket}/> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility}/>
      }

    </div>
  )
}

export default App
