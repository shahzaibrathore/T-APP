import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const add = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  return (
    <div className="todo-box">
      <h1>My Tasks ✅</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Kya kaam hai?" />
      <button onClick={add}>Add</button>
      <ul>
        {tasks.map(t => <li key={t.id}>{t.text}</li>)}
      </ul>
    </div>
  )
}

export default App
