import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
    .then((res) => res.json())
    .then((data) => setStatus(data.status))
    .catch(() => setStatus("server not reachable"));
  }, []);

  return(
    <div>
      <h1>DoubtBox</h1>
      <p>Server Status: {status}</p>
    </div>
  )
}

export default App
