import Projeto from 'assets/Json/projetos.json'
import styles from './FrontProjects.module.scss'

export default function FrontProjects(){
  let RandomProjetos = [...Projeto]
  RandomProjetos = RandomProjetos.sort(() => 0.5 - Math.random()).splice(0,3)

  return(
    <ul className={styles.projetos}>
      {RandomProjetos.map((projeto) => (
        <div
          style={{backgroundImage: `url(${projeto.img})`}}
          className={styles.projetos__post} 
          key={projeto.id}>

          <h2 className={styles.projetos__post__titulo}>{projeto.name}</h2>

          <a target='blank' href={projeto.url} className={styles.projetos__post__btn}>Ver No Git</a>
        </div>
      ))}
    </ul>
  )
}