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
                    Estudante de Analise e desenvolvimento de sistemas, iniciei minha jornada em TI ainda no ensino medio, onde conheci e me apaixonei pela area de desenvolvimento Web, apesar de ter me afastado da area por um periodo, retornei a um tempo e me atualizei com todas as novidades (Na minha epoca Front End se resumia no bom e velho, HTML, CSS e JavaScript).<br/>
                    Com conhecimento em HTML, CSS3, JavaScript, React e SASS e estudando React NAtive e Angula, busco minha primeira oportunidade na area de desenvolvimento Web Front End.
                </p>
            </div>
        </section>
    )
}