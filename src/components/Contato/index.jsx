import Formulario from "./Formulario";
import Social from "../SocialLinks";
import styles from './Contato.module.scss'
import cafe from 'assets/imgs/coffee.svg'

export default function Contato(){
    return(
        <section className={styles.contato}>
            <div className={styles.contato__social}>
                <div className={styles.div}>
                    <h2 className={styles.div__h2}>Entre em contato, vamos trabalhar juntos</h2>

                    <p className={styles.div__p}>Entre em contato pelas redes sociais ou deixe uma mensagem!</p>
                </div>
        
                <Social 
                    classeUl={styles.social} 
                    classeIcon={styles.social__icons}
                    classeName={styles.social__name}/>
                
                <img className={styles.contato__cafe} src={cafe} alt='cafe'/>
            
            </div>
            
            <Formulario/>
        </section>
    )
}