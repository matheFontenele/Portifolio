import Jobs from 'assets/Json/experi.json'
import Formacoes from 'assets/Json/formacao.json'
import Certificados from 'assets/Json/certifica.json'
import styles from './Informacoes.module.scss'
import { MdWork, MdSchool } from 'react-icons/md'
import { PiCertificateBold } from 'react-icons/pi'

export default function Informacao(){
    return(
        <section className={styles.infor}>
            <div className={styles.infor__tag}>
                <h1 className={styles.infor__tag__title}>
                    <MdWork/>
                    Experiencia
                </h1>
                
                {Jobs.map((job) => (
                    <div className={styles.div} key={job.id}>
                        <h3 className={styles.div__title}>
                            {job.nome}
                        </h3>
                        
                        <p className={styles.div__cargo}>
                            {job.cargo}
                        </p>
                        
                        <p className={styles.div__tempo}>
                            {`${job.tempo[0]} a ${job.tempo[1]}`}
                        </p>
                        
                        <p className={styles.div__func}>
                            {job.func}
                        </p>
                    </div>))}
            </div>

            <div className={styles.infor__tag}>
                <h1 className={styles.infor__tag__title}>
                    <MdSchool/>
                    Formações
                </h1>
                {Formacoes.map((forme) => (
                    <div className={styles.div} key={forme.id}>
                        <h3 className={styles.div__title}>
                            {forme.curso}
                        </h3>
                        
                        <p className={styles.div__local}>
                            {forme.insti}
                        </p>
                        
                        <p className={styles.div__tempo}>
                            {`${forme.perido[0]} a ${forme.perido[1]}`}
                        </p>
                    </div>))}
            </div>

            <div className={styles.infor__tag}>
                <h1 className={styles.infor__tag__title}>
                    <PiCertificateBold/>
                    Certificados
                </h1>
                {Certificados.map((item) => (
                    <div className={styles.div} key={item.id}>
                        <h3 className={styles.div__title}>
                            {item.nome}
                        </h3>
                        <p className={styles.div__local}>
                            {item.de}
                        </p>
                        <p className={styles.div__tempo}>
                            {item.data} - <a target='blank' href={item.credencial}>Credencial</a>
                        </p>
                    </div>))}
            </div>
        </section>

    )
}