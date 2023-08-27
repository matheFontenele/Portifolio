import { CgSearch } from 'react-icons/cg'
import styles from './Buscador.module.scss'

export default function Busca({busca, setBusca}){
    return(
        <div className={styles.busca}>
        <input 
            value={busca}
            onChange={e => setBusca(e.target.value)}
            placeholder="Buscar"/>
        <CgSearch
            size={20}
            color="#4c4d5e"
            cursor="pointer"/>
        </div>
    )
}