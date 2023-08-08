import Apresenta from "components/Apresentacao";
import Certificado from "components/Certificados";
import Experiencia from "components/Experiencia";
import Formacao from "components/Formacao";

export default function Sobre(){
    return(
        <main>
            <Apresenta/>
            <section>
                <Experiencia/>
                <Formacao/>
                <Certificado/>
            </section>
        </main>
    )
}