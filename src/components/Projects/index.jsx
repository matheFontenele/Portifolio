import { BsPersonWorkspace } from 'react-icons/bs'
import Projetos from 'assets/Json/projetos.json'
import styles from './Projects.module.scss'

export default function Projects(){
    return(
        <section className={styles.section}>
            <h1 className={styles.section__title}>
                <BsPersonWorkspace/>
                Projetos
            </h1>
            
            <div className={styles.section__projetos}>
                {Projetos.map((projeto) => (
                    <div className={styles.projeto} 
                        key={projeto.id}>
                        
                        <img 
                            className={styles.projeto__img} 
                            src={projeto.img} 
                            alt={projeto.name}/>
                        
                        <h3 className={styles.projeto__title}>
                            {projeto.name}
                        </h3>
                        
                        <p className={styles.projeto__descri}>
                            {projeto.descri}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}