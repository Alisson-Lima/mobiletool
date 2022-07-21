import "./style.css"
export function Button(props){
    return(
        <button className={props.class} 
        style={{
            maxWidth: props.wSize + 'px',
            height: props.hSize + 'px',
            border: props.border + 'px',
            borderRadius: props.borderR + 'px'
        }}
        >{props.value}</button>
    )
}