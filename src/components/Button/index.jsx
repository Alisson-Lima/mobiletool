import "./style.css"
export function Button(props){

    let w = props.wSize
    let h = props.hSize
    let b = props.border
    let bR = props.borderR

    if(props.wSize == ""){
        w = 100 + '%'
    }else{
        w = w + 'px' 
    }
    if(props.hSize == ""){
        h = 70 + 'px'
    }else{
        h = h + 'px' 
    }
    if(props.border == ""){
        b = 'none'
    }else{
        b = b + 'px' 
    }
    if(props.borderR == ""){
        bR = 10 + 'px'
    }else{
        bR = bR + 'px' 
    }
            
    return(
        <button className={props.class} 
        style={{
            maxWidth: w,
            height: h,
            border: b +' solid' +' rgb(197, 197, 197)',
            borderRadius: bR
        }}
        >{props.value}</button>
    )
}