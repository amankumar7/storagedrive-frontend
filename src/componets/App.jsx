import {useState} from "react";
import Auth from "./Auth.jsx";


function App() {
  const [count, setCount] = useState(0);


  return (
      <div>
          <Auth/>
      </div>
  )
}

export default App
