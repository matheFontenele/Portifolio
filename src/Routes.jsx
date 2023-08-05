import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from 'components/Header/index'
import Home from "pages/Home";
import Footer from "components/Footer";
import Sobre from "pages/Sobre";
import Projetos from "pages/Projects";
import Contact from "pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobremim" element={<Sobre/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
        <Route path="/contato" element={<Contact/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>

  );
}

export default App;