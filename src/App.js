import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar.jsx';
import Footer from './Components/footer/Footer.jsx';
import Contact from './pages/contact/contact';
import Projets from './pages/projets/projets';
import Error from './pages/error/error';
import Home from './pages/home/home';
import Profil from './pages/monProfil/monProfil.jsx';


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/projets" element={<Projets />}/>
        <Route path="/monprofil" element={<Profil />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
