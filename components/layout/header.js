import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.name}>Agence Nationale des Technologies de L'information et de la Communication</div>
            <div className={styles.header_logo}>
                <Image
                    src="/images/logo.jpg"
                    alt="logo"
                    width={90}
                    height={90}
                />
            </div>
            <div className={styles.name}>National Agency for Information and Communication Technologies</div>
        </div>
    )
}