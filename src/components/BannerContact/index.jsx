import work from 'assets/imgs/work.png'
import Formulario from 'components/Contato/Formulario'
import styles from './BannerContact.module.scss'

export default function BannerContact(){
    return(
        <section className={styles.section}>
            <div className={styles.section__div}>
                <h2 className={styles.section__div__title}>Entre em contato, vamos trabalhar juntos!</h2>
                <img className={styles.section__div__img} src={work} alt='work'/>
            </div>
            
            <div className={styles.section__formulario}>
                <Formulario/>
            </div>
            
        </section>
    )
}