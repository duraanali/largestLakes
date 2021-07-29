import React, {useState} from 'react';
import './App.css';
import Lakes from './components/Lakes';

import { largestLakes } from "./data"

function App() {

  const [lakes, setLakes] = useState(largestLakes)

  return (
    <div className="App-header">
        <Lakes magacaPropka={lakes} />
    </div>
  );
}

export default App;



