export function Title(props){

    let LSpacing = props.LS + "px"

    if(props.text == ""){
        props.text = "Lorem ipsum dolor sit amet."
    }
    if(props.LS == ""){
        LSpacing = "initial"
    }
    return (
        <props.type style={{fontSize: props.size + "px", color: props.color, letterSpacing: LSpacing}} className={props.class}>{props.text}</props.type>
    )
}