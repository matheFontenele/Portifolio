import styles from './TopProjects.module.scss'
import Projeto from 'assets/Json/projetos.json'

export default function TopProjects(){
    return(
        <section className={styles.projetos}>
              <ul className={styles.projetos__posts}>
                {Projeto.map((projeto) => (
                    <div className={styles.post} key={projeto.id}>
                        <img 
                            className={styles.post__img}
                            src={projeto.img} 
                            alt={projeto.name}
                        />

                        <h2 className={styles.post__titulo}>{projeto.name}</h2>
                        <p className={styles.post__texto}>{projeto.descri}</p>

                        <a target='blank' href={projeto.url} className={styles.post__btn}>Ver No Git</a>
                    </div>
                ))}
            </ul>

        </section>
    )
}