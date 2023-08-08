import skills from 'assets/Json/skills.json'

export default function Skills(){
    return(
        <div>
            <h1>Meus conhecimentos</h1>
            {skills.map((skill) => (
                <div key={skill.id}>
                    <img src={skill.icon} alt={skill.nome}/>
                    <div>
                        <h2>{skill.nome}</h2>
                        <p>{skill.sobre}<a href={skill.link}>Saiba Mais</a></p>
                    </div>
                </div>
            ))}
        </div>
    )
}