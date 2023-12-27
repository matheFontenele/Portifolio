import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import styles from './Banner.module.scss'
import elipse from 'assets/imgs/circulo.png'
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoSass} from 'react-icons/bi'
const minhaFoto = 'https://github.com/matheFontenele.png'

export default function Banner(){
    return(
        <main className={styles.banner}>
            <div className={styles.banner__apresentacao}>
                <h1 className={styles.banner__apresentacao__titulo}
                style={{color: '#008000'}}>
                    Matheus
                </h1>
                <h1 className={styles.banner__apresentacao__titulo}>
                    Fontenele
                </h1>

                <p className={styles.banner__apresentacao__paragrafo}>
                    Estudante de Analise e desenvolvimento de sistemas apaixonado por designe Web, focado em entrar para a área de Front End e posteriormente me aventurar pelo mundo de Back End e me tornar Full Stack.
                </p>


                <ul className={styles.banner__apresentacao__skills}>
                    <BiLogoHtml5/>
                    <BiLogoCss3/>
                    <BiLogoJavascript/>
                    <BiLogoNodeJS/>
                    <BiLogoReact/>
                    <BiLogoSass/>
                </ul>

                <h2 className={styles.banner__apresentacao__projectsIntro}>
                    <AiOutlineLeft className={styles.banner__apresentacao__projectsIntro__icon}/>
                    Confira alguns de meus principais projetos
                    <AiOutlineRight className={styles.banner__apresentacao__projectsIntro__icon}/>    
                </h2>

            </div>

            <div className={styles.banner__imagens}>
                <img 
                    className={styles.banner__imagens__circuloColorido} 
                    src={elipse} 
                    alt='circulo' 
                    aria-hidden={true}
                />

                <img 
                    className={styles.banner__imagens__minhaFoto}
                    src={minhaFoto}
                    alt='Eu'/>
            </div>
        </main>
    )
}
