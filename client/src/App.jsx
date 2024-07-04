import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:5000/api/todos");
      const todos = await res.json();

      setMessage(todos.msg);          
    }
    getTodos();
  }, [])

  return (
   <main className="container">
      <h1>Awesome Todos</h1>
      <p>{message}</p>
   </main>
  );
}
