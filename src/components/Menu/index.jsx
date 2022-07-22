import { Title } from "../Title/"
import { useState } from "react"
import './style.css'
export function Menu(){
    const[turnMode, setturnMode] = useState()
    function changeMode(){
        let body = document.querySelector('body')
        if(!(turnMode == "button-blackMode")){
            setturnMode("button-blackMode")
            body.classList.add('dark-mode')
        }else{
            body.classList.remove('dark-mode')
            setturnMode()
        }
    }

    function activeMenu(){
        let menu = document.querySelector('.menu')
        menu.classList.toggle("menu-active")
    }
    return(

        <div className={'menu'}>
            <button className="btn-menu" onClick={activeMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <Title text="Mobile Tool" class="Logo" type="h2" size="30"/>
            <Title text="Configurations:" type="h3" size="18"/>
            <ul>
                <button className={turnMode} onClick={changeMode}>
                    <span className="circle"></span>    
                </button>   
            </ul>
        </div>
    )
}