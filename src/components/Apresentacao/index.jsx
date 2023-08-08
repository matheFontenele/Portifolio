const minhaFoto = 'https://github.com/matheFontenele.png'

export default function Apresenta(){
    return(
        <section>
            <img src={minhaFoto} alt="eu"/>
            <div>
                <h1>Óla, Sou Matheus Fontenele</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus voluptatibus atque, quidem laborum dicta quisquam corrupti tempora adipisci nesciunt repellendus sunt esse corporis, architecto ad tenetur, doloremque quod blanditiis.<br/>
                Atualmente busco minha primeira oportunidade como desenvolvedor Front End</p>
            </div>
        </section>
    )
}