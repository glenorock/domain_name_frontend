import Head from 'next/head'
import Header from '../components/header'
import LogIn from './login'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Antic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        //<Header/>
      }
      <LogIn/>
    </div>
  )
}
