/* eslint-disable react/jsx-key */
import { memo, useState } from "react"
import { HeroMain, Me, Faciem, Fabula } from "./heroStyles"
import { Nomen } from "../titles/nomen"
import { withTheme } from "styled-components"

export default function Hero(){

    function testing(){
        console.log('oi');
    }

    return (
        <HeroMain>
            <Me>
                <Nomen />
            </Me>
            <Faciem onClick={testing}>
                
            </Faciem>
            <Fabula>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis rhoncus consequat. Donec et est non erat vestibulum semper vel a tellus. Sed sed euismod nisi, non commodo leo. Phasellus ac nunc vel mi tristique dapibus. Maecenas aliquam, sem a ultrices gravida, justo sem interdum est, a sagittis erat velit quis mauris. Nullam sed quam volutpat quam dapibus rutrum. Sed ultricies eu lectus hendrerit aliquet. Donec pellentesque mauris id lectus finibus, non euismod purus eleifend. Sed laoreet viverra arcu ut rhoncus. In quis quam quis nibh rutrum hendrerit at sit amet erat. <br/>
            </Fabula>
        </HeroMain>
    )
}