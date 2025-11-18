import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ListaAlunos from './pages/listaAlunos';
import DetalesAlunos from './pages/detalesAlunos';
import { Container, Navbar } from 'react-bootstrap';


export default function App() {

  return (
    <>
    <Navbar bg="dark" variant="dark" classNome="mb-3"> 
      <Container>
        <Navbar.Brand as={Link} to="/">Meu Estudo de Caso</Navbar.Brand>
      </Container>
    </Navbar>

    <Container>
      <Routes>
        <Route path='/' element={<ListaAlunos />} />
        <Route path='/alunos/:id' element={<DetalesAlunos />} />
        <Route path='*' element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
     </Container> 
    </>
  );
}

