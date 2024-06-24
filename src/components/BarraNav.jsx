import './BarraNav.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

function BarraNav() {

  

  return (
      <div className='barra-nav'>
        <a href="#home-conteiner"><i class="bi bi-house"></i><h1>Início</h1></a>
        <a href='#sinopse-conteiner' id='sinopse'><i className='bi bi-journals'></i><h1>Sinopse</h1></a>
        <a href="#jogo"><i className="bi bi-controller"></i><h1>Jogar</h1></a>
        <a href="https://github.com/Thex2245/biocollapse-game" target='_blank'><i className="bi bi-github"></i><h1>Repositório GitHub</h1></a>
      </div>
  )
}

export default BarraNav
