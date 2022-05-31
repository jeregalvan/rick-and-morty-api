import React from 'react';
import GlobalStyle from './globalStyle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Characters from './pages/Personajes/index';
import CharacterDetail from './pages/Personajes/name';
import Contact from './pages/Contact';
import Home from './pages/Home';



function App() {


  return (

      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Personajes" element={<Characters />} />
          <Route path="/Personajes/:name" element={<CharacterDetail />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
