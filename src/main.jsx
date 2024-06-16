import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BarraNav from './components/BarraNav'
import PrimeiroConteudo from './components/PrimeiroConteudo'
import SegundoConteudo from './components/SegundoConteudo'
import Footer from './components/Footer'
import GoOnTop from './components/GoOnTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraNav />
    <PrimeiroConteudo />
    <SegundoConteudo />
    <Footer />
    <GoOnTop />
  </React.StrictMode>,
)
