import React, {ChangeEvent, useState} from 'react';
import classes from './Counter.module.css';


export type ValuePropsType = {
  number: number
  maxValue:number
  activationRenderingCallback:(addMax:number)=>void
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
  props.activationRenderingCallback(addMax)
}
const changMaxHandler =(e:ChangeEvent<HTMLInputElement>)=>setAddMax(e.currentTarget.value)

  return valueMax
    ? <input value={addMax} onChange={changMaxHandler} onBlur={backToSpanHandler} autoFocus/>
    : <span className={props.number === props.maxValue ? classes.numberRed : ''} onDoubleClick={magicSpanHandler}>{props.number} </span>

};
