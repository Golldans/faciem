import { Mundus, Logo, Dummy, Center, Universe, Bidu } from "./PrincipiumStyles"
import React, { Component, useEffect, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";


export default function Principium(){

    const init = ""
    const [logo, setLogo] = useState("");
    const [nomen, setNomen] = useState("");
    const [me, setMe] = useState("");
    const [universe, setUniverse] = useState("");

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
        if (nomen.substring(0, 7) == "cognito")
            setLogo(<FadeIn><Logo /></FadeIn>);

        if (nomen.substring(8, 12) == "est")
            setMe(<FadeIn><h1>Cristiano Henrique Ferreira</h1></FadeIn>)

        if (nomen.substring(12, 18) == "chuchu")
            setUniverse(<Universe><Bidu></Bidu></Universe>)

        console.log(nomen.substring(9, 12));

    }, [nomen])

    React.useEffect(() => {
        document.addEventListener('keyup', mudaNome)
    }, [ ]);



    return(
        <>
            <Mundus>
                <Dummy >
                    {logo}
                </Dummy>
                <Dummy >
                
                </Dummy>
                <Dummy >
                
                </Dummy>
                <Center>
                {me}
                    <br />
                <div>{nomen}</div>
                </Center>
                <Dummy >
                
                </Dummy>
                <Dummy >
                
                </Dummy>
                <Dummy >
                
                </Dummy>
                {/* {nomen} */}
            </Mundus>
            {universe}
        </>
    )
}