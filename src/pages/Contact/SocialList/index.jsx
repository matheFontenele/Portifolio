import social from 'assets/Json/social.json'
import styles from './SocialList.module.scss'
import { Link } from 'react-router-dom'

export default function SocialList(){
    return(
        <section className={styles.social}>
            <h2 className={styles.social__title}>Entre em contato tambem por meio das redes sociais!</h2>
            <div className={styles.social__links}>
            {social.map(link => (
                <Link 
                    to={link.link}
                    key={link.id} 
                    className={styles.link}>
                    
                    <img className={styles.link__img} src={link.img} alt={link.id}/>
                    <p className={styles.link__name}>{link.name}</p>
                </Link>
            ))}
            </div>
        </section>
    )
}