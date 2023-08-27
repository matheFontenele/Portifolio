import skills from 'assets/Json/skills.json'
import styles from './Filtros.module.scss'
import classNames from 'classnames'


export default function Filtros({filtro, setFiltro}){
    
    function selectFiltro(skill){
        if (filtro === skill.id) return setFiltro(null)
        return setFiltro(skill.id)
    }

    return(
        <div className={styles.filtros}>
            {skills.map((skill) => (
                <button 
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles.filtros__filtro__ativo]: filtro === skill.id
                    })} 
                    key={skill.id} 
                    onClick={() => selectFiltro(skill)}>
                    {skill.nome}
                </button>
            ))}
        </div>
    )
}