import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Antic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
