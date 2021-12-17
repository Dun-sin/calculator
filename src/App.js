import './App.css';
import React, { useState } from 'react';

// Components
import Keys from './Components/Keys/Keys';
import DisplayResult from './Components/DisplayResult/DisplayResult';

function App() {
  const [result, setResult] = useState('');

  const allClear = () => {
    setResult('')
  }

  const clear = () => {
    setResult(result.slice(0, -1))
  }

  const equal = () => {
    let answer = eval(result) + "";
    if (answer === 14) {
      setResult(answer.slice(answer.length, -1))
    } else {
      setResult(answer)
    }
  }

  const whenClicked = (button) => {
    try {
      switch (button) {
        case 'AC':
          allClear();
          break;
        case 'C':
          clear();
          break;
        case '=':
          equal();
          break;
        default:
          if (result.length === 14) {
            setResult(result)
          } else {
            setResult(result + button)
          }
      }
    } catch (e) {
      console.log(e)
      setResult('')
    }
  }

  return (
    <div className="App">
      <div>
        <DisplayResult result={result} />
        <Keys whenClicked={whenClicked} />
      </div>
    </div>
  );
}

export default App;
