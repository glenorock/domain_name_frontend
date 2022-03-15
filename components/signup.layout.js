import styles from './styles/layout.module.css'
import Utils from '../util/utils'

export default function SignUpLayout({children}){
    return(
        <div className={styles.main_layout}>
            <div className={Utils.classes([styles.signup_box,styles.layout_container])}>
                <img
                    src="/images/logo.jpg"
                    alt="logo"
                    className={Utils.classes([styles.signup_layout_logo,styles.layout_logo])}
                />
                {children}
            </div>
        </div>
    )
}