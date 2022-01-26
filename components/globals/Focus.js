import FadeIn from "react-fade-in/lib/FadeIn"

export default function Focus(props){
    return (
        <h1 style={{
            color: "rgb(175, 175, 175)"
        }}>
            <FadeIn delay={100}>
                <h1>{props.text}</h1>
            </FadeIn>
        </h1>
    )
} 