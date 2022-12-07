import React from 'react'
import s from './App.module.css'
import {Counter} from './components/Counter';


function App() {
  return (
    <div className={s.App}>
      <Counter number={1} callBackHandlerReset={() => {alert('Reset')}} callBackHandlerIncrement={()=>{alert('Ap')}} startValue={0} maxValue={10}/>
    </div>
  )
}

export default App