import './BarraNav.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

function BarraNav() {

  return (
      <div className='barra-nav'>
        <a href="#"><i className='bi bi-journals'></i><h1>Sinopse</h1></a>
        <a href="#"><i className="bi bi-controller"></i><h1>Como Jogar</h1></a>
      </div>
  )
}

export default BarraNav
