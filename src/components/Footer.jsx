import './Footer.css'
import Risco from '../assets/risco-bio.svg'

const Footer = () => {
    return (
    <footer className='footer'>
        <div className="conteiner-footer">
            <div className="conteiner-titulo">
                <img src={Risco} alt="" className='risco risco2' />
                <h1 className='titulo titulo2'> BioCollapse</h1>
            </div>
            <p className='direitos-reservados'>Copyright © BioCollapse | Todos os direitos reservados</p>
        </div>
    </footer>
    )
}

export default Footer