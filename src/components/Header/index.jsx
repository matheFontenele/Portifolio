import NavBar from 'components/NavBar'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header(){


    return(
        <header className={styles.header}>
            <Link className={styles.header__nameMe} to='/'>
                <h1 className={styles.header__nameMe__matheus}>MATHEUS</h1>
                <h1 className={styles.header__nameMe__fontenele}>FONTENELE</h1>
            </Link>

            <NavBar/>
        
        </header>
    )
}
