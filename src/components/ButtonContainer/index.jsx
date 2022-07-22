import { useState } from "react"
import { Button } from "../Button/"
import './style.css'
export function ButtonContainer(){
    const [width, setwidth] = useState("")
    const [height, setheight] = useState("")
    const [border, setborder] = useState("")
    const [borderRadius, setborderRadius] = useState("")

    return(
        <div className="buttons-container">
            <Button class="button-modify" value="Normal size" wSize={width} hSize={height} border={border} borderR={borderRadius}/>
            <label htmlFor="width">
                Width:
                <input type="number" name="width" placeholder="px" onChange={(e) => setwidth(e.target.value)}/>
            </label>
            <label htmlFor="height">
                Height:
                <input type="number" name="width" placeholder="px" onChange={(e) => setheight(e.target.value)}/>
            </label>
            <label htmlFor="border">
                Border:
                <input type="number" name="border" placeholder="px" onChange={(e) => setborder(e.target.value)}/>
            </label>
            <label htmlFor="borderR">
                Border-radius:
                <input type="number" name="borderR" placeholder="px" onChange={(e) => setborderRadius(e.target.value)}/>
            </label>
        </div>
    )
}