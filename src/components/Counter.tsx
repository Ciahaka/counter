import React from 'react';
import {Button} from './Button';
import classes from './Counter.module.css'
import {ChangeMaxValue} from './ChangeMaxValue';

export type propsType = {
  number: number
  callBackHandlerReset: () => void
  callBackHandlerIncrement: () => void
  startValue: number
  maxValue: number

}

export const Counter = (props: propsType) => {

  return (
    <div className={classes.count}>
      <div className={classes.number}>
        <ChangeMaxValue
          number={props.number}
          maxValue={props.maxValue}
          activationRenderingCallback={()=>{}}


        />
      </div>
      <div className={classes.buttons}>
        <Button name="inc"
                callBack={props.callBackHandlerIncrement}
                disabled={props.number === props.maxValue}


        />
        <Button name="reset"
                callBack={props.callBackHandlerReset}
                disabled={props.number === props.startValue}
        />
      </div>
    </div>
  )

}