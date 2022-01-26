import { useState } from "react"

export function Nomen(){

    const [nomen, setNomen] = useState([
        "Golldan"
    ])

    function changeNomen(){
        if(nomen == 'Cristiano')
        setNomen(["Golldan"])
        else
        setNomen(["Cristiano"])
    }

    return (
        <div  
        onClick={changeNomen}
        onMouseLeave={changeNomen}
        style={{ 
            color: "white",
            fontSize: "2rem",
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end"
        }}>
            {nomen}
        </div>
    )
}