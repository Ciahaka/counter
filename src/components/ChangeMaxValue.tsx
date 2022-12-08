import React, {ChangeEvent, useState} from 'react';
import s from './Counter.module.css';


export type ValuePropsType = {
  number: number
  maxValue:number
  activationChangeValue:(addMax:number)=>void
}

export const ChangeMaxValue = (props:ValuePropsType) => {
  const [valueMax,setValueMax]=useState(false)
  const [addMax,setAddMax] =useState(0)

  const magicSpanHandler = () => {
    setValueMax(true)
    setAddMax(props.maxValue)
  }
const backToSpanHandler = () => {

  setValueMax(false)
  props.activationChangeValue(addMax)
}
const changMaxHandler =(e:ChangeEvent<HTMLInputElement>)=>setAddMax(e.currentTarget.valueAsNumber)

  return valueMax
    ? <input type="number" value={addMax} onChange={changMaxHandler} onBlur={backToSpanHandler} autoFocus/>
    : <span className={props.number === props.maxValue ? s.numberRed : ''} onDoubleClick={magicSpanHandler}>{props.number} </span>

};
