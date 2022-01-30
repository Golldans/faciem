import { Mundus } from "./PrincipiumStyles"
import React, { Component, useEffect, useState } from "react";


export default function Principium(){

    const init = ""
    const [nomen, setNomen] = useState("")

    var nome = '';
    function mudaNome(e){
        if(e.key == 'Backspace'){
            nome = nome.slice(0, -1);
        } else if (e.key == 'Shift') {

        }else {
            nome += e.key;
        }
        setNomen(nome);
    } 

    React.useEffect(() => {
        document.addEventListener('keyup', mudaNome)
    }, []);



    return(
        <>
            <Mundus>
                {nomen}
            </Mundus>
        </>
    )
}