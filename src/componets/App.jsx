import {LoginForm} from "./LoginForm.jsx";
import {useState} from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
        <LoginForm></LoginForm>

      </div>
  )
}

export default App
