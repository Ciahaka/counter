import React, {useState} from 'react'
import s from './App.module.css'
import {Counter} from './components/Counter';


function App() {

  const [stateCounter, setStateCounter] = useState<number>(0)
  let maxValue = 5
  const startValue = 0

  const Increment = () => maxValue ? setStateCounter(stateCounter + 1) : ''
  const resetCounter = () => setStateCounter(0)

  const newMaxValueHandler = (newValue:number) => {
    if (newValue) {
      maxValue = newValue
      setStateCounter(newValue)
    }
    return 0
  }

  return (
    <div className={s.App}>
      <Counter number={stateCounter}
               callBackHandlerReset={resetCounter}
               callBackHandlerIncrement={Increment}
               startValue={startValue}
               maxValue={maxValue}
               newMaxValue={newMaxValueHandler}

      />
    </div>
  )
}

export default App