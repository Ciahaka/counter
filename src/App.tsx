import React, {useState} from 'react'
import s from './App.module.css'
import {Counter} from './components/Counter';


function App() {

  const [stateCounter,setStateCounter]=useState(0)

  const Increment=()=> {

    if (stateCounter === 5) {

      return
    }
    setStateCounter(stateCounter+1)
  }

  const resetCounter=()=>{
    setStateCounter(0)

  }


  return (
    <div className={s.App}>
      <Counter number={stateCounter} callBackHandlerReset={resetCounter} callBackHandlerIncrement={Increment} startValue={0} maxValue={5}/>
    </div>
  )
}

export default App