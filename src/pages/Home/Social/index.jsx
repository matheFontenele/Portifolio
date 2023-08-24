import SocialLink from "components/SocialLinks";
import styles from './Social.module.scss'

export default function Social(){
    return(
        <section className={styles.section}>
            <h1 
                className={styles.section__title}>
                    Ou entre em contato por meio das redes sociais!
            </h1> 
            
            <SocialLink 
                classeUl={styles.ul} 
                classeLi={styles.ul__lista}
                classeIcon={styles.ul__lista__icon} 
                classeName={styles.ul__lista__name}
            />
        
        </section>
    )
}