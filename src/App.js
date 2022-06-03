import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Test from './Test.js'
import Counter from './Counter.js'
import { Provider } from 'react-redux'
import store from './store'


const globalData = {a: 1, b: 2};

function App() {
  const [c, setC] = useState(0)

  return (
    <Provider store={store}>
      <div className="App">
        </div>
        <Test x={c}></Test>
        <button onClick={() => {
          setC(c + 1)
        }}>click</button>
      <Counter globalData={globalData}/>
    </Provider>
  );
}

export default App;
