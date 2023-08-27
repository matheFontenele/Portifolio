import BannerProject from "pages/Projects/BannerProjects";
import Projects from "pages/Projects/Projects";
import { useState } from "react";
import Busca from "./Buscador";
import Filtros from "./Filtros";

export default function Projetos(){
    const [busca, setBusca] = useState('');
    const [filtro, setFiltro] = useState(null)

    return(
        <main>
            <BannerProject/>
            <Busca busca={busca} setBusca={setBusca}/>
            <div>
            <Filtros filtro={filtro} setFiltro={setFiltro}/>

            </div>
            <Projects busca={busca}/>
        </main>
    )
}