import s from "./Button.module.css"

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
        <button className={s.button}
          onClick={onClickHandler}
                disabled={props.disabled}
                >
            {props.name}
        </button>
    )
}