import { useState } from "react"
import { Title } from "../Title/"
import "./style.css"

export function TextColorElement(){
    const [TextColor, setTextColor] = useState()

    return (
        <div className="testingColor">

            <Title type="p" size="30" text="Lorem ipsum dolor sit amet" color={TextColor}/>
            <label htmlFor="InputColor">
                Color:
                <input type="color" name="InputColor" onChange={(e) => setTextColor(e.target.value)}/>
            </label>

        </div>
    )
}