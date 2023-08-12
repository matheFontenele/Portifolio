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
        
        </header>
    )
}