import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header/header'
import IndexMenu from '../components/indexMenu/indexMenu'

export default function Home() {
  return ( <>
    {/* <Header /> */}
    <Head>
      <title>Golldan</title>
    </Head>
    <IndexMenu>

    </IndexMenu>
  </>)
}
