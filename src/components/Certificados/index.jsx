import Certificados from 'assets/Json/certifica.json'

export default function Certificado(){
    return(
        <div>
            <h1>Certificados</h1>
            {Certificados.map((item) => (
                <div key={item.id}>
                    <h3>{item.nome}</h3>
                    <p>{item.de}</p>
                    <p>{item.data}<a target='blank' href={item.credencial}>Credencial</a></p>
                </div>
            ))}
        </div>
    )
}