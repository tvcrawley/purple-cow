import './App.css';
import Button from './Button'
import {useState} from 'react';

function App() {
  const [hitCount, setHitCount] = useState(0);
  return (
    <div className="App">
      <h1 className="App-header">Project Purple Cow</h1>
      <Button setHitCount={setHitCount} />
      <p className="Hit-display">The hit count is {hitCount? hitCount : "..."}.</p>
    </div>
  );
}

export default App;
