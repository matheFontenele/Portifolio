import Banner from 'pages/Home/Banner';
import FrontProjects from 'pages/Home/FrontProjects';
import Contato from 'components/Contato';

export default function Home(){
    return(
        <main>
            <Banner/>
            <FrontProjects/>
            <Contato/>
        </main>
    )
}