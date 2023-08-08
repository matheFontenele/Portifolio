import styles from './Apresentacao.module.scss'

const minhaFoto = 'https://github.com/matheFontenele.png'

export default function Apresenta(){
    return(
        <section className={styles.apresentacao}>
            
            <img 
                className={styles.apresentacao__img} 
                src={minhaFoto} 
                alt="eu"/>
            
            <div className={styles.apresentacao__sobre}>
                
                <h1 className={styles.apresentacao__sobre__title}>
                    Óla, Sou Matheus Fontenele
                </h1>

                <p className={styles.apresentacao__sobre__text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus voluptatibus atque, quidem laborum dicta quisquam corrupti tempora adipisci nesciunt repellendus sunt esse corporis, architecto ad tenetur, doloremque quod blanditiis.<br/>
                Atualmente busco minha primeira oportunidade como desenvolvedor Front End
                </p>
            </div>
        </section>
    )
}