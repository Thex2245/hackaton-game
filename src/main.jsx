import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BarraNav from './components/BarraNav'
import PrimeiroConteudo from './components/PrimeiroConteudo'
import SegundoConteudo from './components/SegundoConteudo'
import TerceiroConteudo from './components/TerceiroConteudo'
import QuartoConteudo from './components/QuartoConteudo'
import QuintoConteudo from './components/QuintoConteudo'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraNav />
    <PrimeiroConteudo />
    <SegundoConteudo />
    <QuartoConteudo />
    <TerceiroConteudo />
    <QuintoConteudo />
    <Footer />
  </React.StrictMode>,
)
