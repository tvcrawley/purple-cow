import './App.css';
import Button from './Button'
import {useState} from 'react';

function App() {
  const [hitCount, setHitCount] = useState(0);
  return (
    <div className="App">
      <Button setHitCount={setHitCount} />
      <p>The hit count is {hitCount}.</p>
    </div>
  );
}

export default App;
