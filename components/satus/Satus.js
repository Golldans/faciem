import { useEffect, useState } from "react";
import Focus from "../globals/Focus";
import { Mundus, Persona, Urbs } from "./SatusStyles";



export default function Satus(props){

    const jooj = "a"
    const [nomen, setNomen] = useState ([
        jooj
    ])

    function handleKeyDown (e) {
    const jooj = e.key;
    console.log(e.key)
    setNomen(nomen + jooj);
    }

document.addEventListener('keydown', handleKeyDown);


    return (
        
        <Mundus>
            
            {nomen}
            {/* <Urbs>
                <Persona>
                    <Persona>
                        <Focus text={jooj}>
                            <h1>oi</h1>
                        </Focus>
                    </Persona>
                </Persona>
            </Urbs> */}
        </Mundus>

    )
}