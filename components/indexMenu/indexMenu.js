import { useEffect, useRef } from "react"
import { Index, Container, Carousel, Item, Info, Title, Memo, Image } from "./indexMenuStyles"
export default function IndexMenu(){

    useEffect(() => {
        
    });

    const carousel = useRef(null);
    const img = useRef(null);
    
    function testing(){
        console.log('oi')
    }

    const back = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= (img.current.offsetWidth + 20);
    }

    const forward = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += (img.current.offsetWidth + 20);
    }

    return(
        <>
        <Index>
            <Container>
                <div className="logo">
                    
                </div>
                <Carousel  ref={carousel}>
                    <Item ref={img} onClick={testing}>
                        <div className="image">
                            <Image src="/greek.jpg" alt="Item" layout="fill"/>
                        </div>
                        <Info>
                            <Title>Item 1</Title>
                            <Memo>Item 2</Memo>
                        </Info>
                    </Item>
                    <Item>
                        <div className="image">
                            <Image src="/greek.jpg" alt="Item" layout="fill"/>
                        </div>
                        <Info>
                            <Title>Item 1</Title>
                            <Memo>Item 2</Memo>
                        </Info>
                    </Item>
                    <Item>
                        <div className="image">
                            <Image src="/greek.jpg" alt="Item" layout="fill"/>
                        </div>
                        <Info>
                            <Title>Item 1</Title>
                            <Memo>Item 2</Memo>
                        </Info>
                    </Item>
                    <Item>
                        <div className="image">
                            <Image src="/greek.jpg" alt="Item" layout="fill"/>
                        </div>
                        <Info>
                            <Title>Item 1</Title>
                            <Memo>Item 2</Memo>
                        </Info>
                    </Item>
                    <Item>
                        <div className="image">
                            <Image src="/greek.jpg" alt="Item" layout="fill"/>
                        </div>
                        <Info>
                            <Title>Item 1</Title>
                            <Memo>Item 2</Memo>
                        </Info>
                    </Item>
                    <Item>
                        <div className="image">
                            <Image src="/greek.jpg" alt="Item" layout="fill"/>
                        </div>
                        <Info>
                            <Title>Item 1</Title>
                            <Memo>Item 2</Memo>
                        </Info>
                    </Item>
                </Carousel>
                <div className="buttons">
                    <button onClick={back}>
                        Trás
                    </button>
                    <button onClick={forward}>
                        Frente
                    </button>
                </div>
            </Container>
        </Index>
        </>
    )
}