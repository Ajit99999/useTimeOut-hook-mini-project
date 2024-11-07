import { useEffect, useState } from 'react';
import './App.css'
import useTimeOut from './hooks/useTimeOut'

function App() {

  const [isOpen, setIsOpen] = useState(true);

  const { start ,stop } = useTimeOut(() => setIsOpen(false), 5000)

  useEffect(() => {
  start();
  }, [start]);
  

  return (
    <>
   {isOpen && <div>Notification: This will close in 5 seconds...</div>}
    <div>
    <button onClick={stop}>Keep Open</button> {/* Clears the timeout */}
    <button onClick={start}>Restart Timer</button> {/* Restarts the timeout */}
    </div>
  
    </>
  )
}

export default App
