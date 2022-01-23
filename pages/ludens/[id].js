import { useRouter } from "next/router";

export default function Luden({ luden }){
    const router = useRouter()
    const {id} = router.query

    return (<>
        <h1>Você é o {luden.nomen}, certo?</h1>
    </>)
}

export async function getServerSideProps({ params }){
    const req = await fetch(`http://localhost:8000/ludens/find/${params.id}`);
    const data = await req.json();
    
    return {
        props: { luden: data }
    }
}



// export async function getStaticProps({ params }){
//     const req = await fetch(`http:localhost:8000/ludens/find/${params.id}`);
//     const data = await req.json();

//     return {
//         props: { luden: data }
//     }
// }

// export async function getStaticPaths() {
//     const
// }