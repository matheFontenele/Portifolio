import skills from 'assets/Json/skills.json'
import styles from './Skills.module.scss'
import { BsCodeSlash } from 'react-icons/bs'

export default function Skills(){
    return(
        <section className={styles.section}>
            <h1 className={styles.section__title}><BsCodeSlash/>Meus conhecimentos</h1>  
        
            <div className={styles.skills}>
            {skills.map((skill) => (
                <div className={styles.skill} key={skill.id}>
                    <img className={styles.skill__img} src={skill.icon} alt={skill.nome}/>
                    <div className={styles.skill__div}>
                        <h2 className={styles.skill__div__name}>{skill.nome}</h2>
                        <p className={styles.skill__div__info}>{skill.sobre}<a className={styles.link} href={skill.link}>Saiba Mais</a></p>
                    </div>
                </div>
            ))}
            </div>
        </section>
    )
}