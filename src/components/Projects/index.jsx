import { BsPersonWorkspace } from 'react-icons/bs'
import Projetos from 'assets/Json/projetos.json'
import styles from './Projects.module.scss'
import classNames from 'classnames'

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

                        <div className={styles.tec}>
                            {projeto.tecnologias.map((tec) =>
                            <p className=
                                {classNames({
                                [styles.tec__item] : true,
                                [styles[`tec__item__${tec.id}`]] : true
                            })}>
                                {tec.label}
                            </p>)}
                        </div>

                        <a className={styles.projeto__btn} href={projeto.url}>Ver projeto no Git</a>
                    </div>
                ))}
            </div>
        </section>
    )
}