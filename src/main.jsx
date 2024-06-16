import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BarraNav from './components/BarraNav'
import PrimeiroConteudo from './components/PrimeiroConteudo'
import SegundoConteudo from './components/SegundoConteudo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraNav />
    <PrimeiroConteudo />
    <SegundoConteudo />
  </React.StrictMode>,
)
