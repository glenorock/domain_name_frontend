import Header from "./header"
import Footer from "./footer"
import Head from 'next/head'
import styles from '../styles/main.module.css'

export default function Layout({children}){
    return(
        <div>
            <div className="container">
                <Head>
                    <title>Antic</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <Header/>
            <div className={styles.main}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}