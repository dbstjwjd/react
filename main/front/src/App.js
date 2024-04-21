import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [num, setNum] = useState(1);

  const [numList, setNumList]= useState([]);

  return (
    <div className="App">
        <div>{num}</div>
        <button onClick={() => {setNum(num+1)}}>+1</button>
        <button onClick={() => {setNum(num-1)}}>-1</button>
    </div>
  );
}

export default App;
