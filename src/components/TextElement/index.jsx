import { useState } from "react"
import { Title } from "../Title/"
import "./style.css"
export function TextElement(){ 
    const [titleSize, settitleSize] = useState(40)
    const [text, settext] = useState("Lorem ipsum dolor sit amet.")
    const [spacing, setspacing] = useState()
    const [TextColor, setTextColor] = useState()
    
    if(titleSize < 8){
        settitleSize(8)
    }
    if(text == ""){
        settext("Lorem ipsum dolor sit amet.")
    }

    return (
    <div className="textElement">
        <Title type="h1" size={titleSize} text={text} class="text" LS={spacing} color={TextColor}/>
        <label htmlFor="inputText">
            Text content:
            <input type="text" name="inputText" onChange={(e) => settext(e.target.value)} placeholder="type something..."/>
        </label>
        <label htmlFor="inputSize">
            Text size:
            <input type="number" name="inputSize" min={8} onChange={(e) => settitleSize(e.target.value)} placeholder="40px"/>
        </label>
        <label htmlFor="InputLetterSpacing">
            Letter spacing:
            <input type="number" name="InputLetterSpacing" placeholder="default" onChange={(e) => setspacing(e.target.value)} />
        </label>
        <label htmlFor="InputColor">
                Color:
                <input type="color" name="InputColor" onChange={(e) => setTextColor(e.target.value)}/>
        </label>
        
    </div>
    )
}