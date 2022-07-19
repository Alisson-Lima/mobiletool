import { useState } from "react"
import { Title } from "../Title/"
import "./style.css"
export function TextElement(){ 
    const [titleSize, settitleSize] = useState(40)
    const [text, settext] = useState("Lorem ipsum dolor sit amet.")
    
    if(titleSize < 8){
        settitleSize(8)
    }
    if(text == ""){
        settext("Lorem ipsum dolor sit amet")
    }

    return (
    <div className="textElement">
        <Title lv="h1" size={titleSize} text={text} class="text"/>
        <label htmlFor="inputText">
            Text content:
            <input type="text" name="inputText" onChange={(e) => settext(e.target.value)} placeholder="type something..."/>
        </label>
        <label htmlFor="inputSize">
            Text size:
            <input type="number" name="inputSize" onChange={(e) => settitleSize(e.target.value)} placeholder="40px"/>
        </label>
    </div>
    )
}