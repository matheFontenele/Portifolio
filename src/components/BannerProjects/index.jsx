import capa from 'assets/imgs/capa.jpg'
import styles from './BannerProjects.module.scss'

export default function BannerProject(){
    return(
        <section 
            className={styles.banner} 
            style={{backgroundImage: `url(${capa})`}}>

            <h1 
                className={styles.banner__title}>
                    Confira abaixo meus projetos
            </h1>
            
            <p 
                className={styles.banner__text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nam dolor dolorum, labore voluptatum facilis. Quaerat commodi aliquid vel doloribus reiciendis ratione quisquam, doloremque, libero, nostrum expedita officia! Praesentium, libero.
            </p>
        </section>
    )
}