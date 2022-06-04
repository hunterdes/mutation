import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Test from './Test.js'
import Counter from './Counter.js'
import Tank from './Tank.js'
import { Provider } from 'react-redux'
import store from './store'


const money = {unit: 'USD', amount: 200};
const tank = {brand: 'tiger', version: '2'}

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
      <Counter money={money}/>
      <Tank tank={tank} />
    </Provider>
  );
}

export default App;
