export function Title(props){

    let size = props.size + "px"
    return (
        <props.lv style={{fontSize: size}} className={props.class}>{props.text}</props.lv>
    )
}