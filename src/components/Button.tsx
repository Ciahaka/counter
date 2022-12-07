import classes from "./Button.module.css"

type propsButton = {
    name: string
    callBack: ()=> void
    disabled: boolean
}

export const Button = (props: propsButton)=> {

    const onClickHandler = ()=> {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler} disabled={props.disabled}  className={classes.button}>
            {props.name}
        </button>
    )
}