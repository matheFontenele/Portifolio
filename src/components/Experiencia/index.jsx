import Jobs from 'assets/Json/experi.json'

export default function Experiencia(){
    return(
        <div>
            <h1>Experiencia</h1>
            {Jobs.map((job) => (
                <div key={job.id}>
                    <h3>{job.nome}</h3>
                    <p>{job.cargo}</p>
                    <p>{`${job.tempo[0]} a ${job.tempo[1]}`}</p>
                    <p>{job.func}</p>
                </div>
            ))}
        </div>
    )
}