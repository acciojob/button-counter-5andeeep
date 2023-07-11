
import React from "react";
import './../styles/App.css';

const App = () => {
  const [time, setTime] = useState(0);

  return (
    <div>
      <p>Button clicked {time} times</p>
      <button onClick={() => {setTime(time+1)}}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
