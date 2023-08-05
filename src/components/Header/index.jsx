import NavBar from 'components/NavBar'
import styles from './Header.module.scss'

export default function Header(){


    return(
        <header className={styles.header}>
            <span className={styles.header__nameMe}>
                <h1 className={styles.header__nameMe__matheus}>MATHEUS</h1>
                <h1 className={styles.header__nameMe__fontenele}>FONTENELE</h1>
            </span>

            <NavBar/>
        
            <ul className={styles.header__listContac}>
                <a href="https://www.linkedin.com/in/matheus-fontenele-2a40a4175/">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/matheFontenele">
                    <i className="fa-brands fa-github"></i>
                </a>
            </ul>
        </header>
    )
}