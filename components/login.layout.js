import styles from './styles/login.layout.module.css'

export default function LogInLayout({children}){
    return(
        <div className={styles.main_layout}>
            <div className={styles.login_box}>
                <img
                    src="/images/logo.jpg"
                    alt="logo"
                    className={styles.login_layout_logo}
                />
                {children}
            </div>
        </div>
    )
}