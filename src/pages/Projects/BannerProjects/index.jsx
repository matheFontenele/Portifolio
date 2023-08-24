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
                    Abaixo alguns de meus projetos, alguns ainda inacabados pois sempre busco atualiza los com oque vou aprendendo
            </p>
        </section>
    )
}