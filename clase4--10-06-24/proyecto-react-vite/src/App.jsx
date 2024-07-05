import { useState } from 'react'
import './App.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Section from './componentes/section/Section'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ListaCasas from './componentes/casas/ListaCasas'
import Menu from './componentes/menu/Menu'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <div className='container'>
    <Header />
    <Menu />
    <main>
      <Routes>
        <Route path='/' element={<Section />} />
        <Route path='/casas' element={<ListaCasas />} />
      </Routes>
    </main>
    <Footer />
    </div>
    </Router>
    </>
  )
}

export default App
