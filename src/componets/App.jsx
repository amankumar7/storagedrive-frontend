import {LoginForm} from "./LoginForm.jsx";
import {useState} from "react";
import Pagee from "./Pagee.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <Pagee></Pagee>

      </div>
  )
}

export default App
