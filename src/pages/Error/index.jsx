import imgErro from 'assets/imgs/error.png'
import styles from './Error.module.scss'
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <main className={styles.error}>
            <img className={styles.error__img} src={imgErro} alt='error'/>
            <h1 className={styles.error__404}>404</h1>
            <p className={styles.error__text}>Pagina não encontrada, verifique o endereço URL ou <Link className={styles.error__text__link} to='/'>clique aqui</Link> para voltar para o menu principal</p>
        </main>
    )
}