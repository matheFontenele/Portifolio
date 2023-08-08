import Formacoes from 'assets/Json/formacao.json'

export default function Formacao(){
    return(
        <div>
        <h1>Formações</h1>
        {Formacoes.map((forme) => (
            <div key={forme.id}>
                <h3>{forme.curso}</h3>
                <p>{forme.insti}</p>
                <p>{`${forme.perido[0]} a ${forme.perido[1]}`}</p>
            </div>
        ))}
    </div>
    )
}