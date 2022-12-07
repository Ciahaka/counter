import React, {useState} from 'react'
import s from './App.module.css'
import {Counter} from './components/Counter';


function App() {

  const [stateCounter, setStateCounter] = useState(0)
  let maxValue = 5
  const startValue = 0

  const Increment = () => {

    if (maxValue) {
    }
    setStateCounter(stateCounter +1)
  }

  const resetCounter = () => setStateCounter(0)


  return (
    <div className={s.App}>
      <Counter number={stateCounter} callBackHandlerReset={resetCounter} callBackHandlerIncrement={Increment}
               startValue={startValue} maxValue={maxValue}/>
    </div>
  )
}

export default App