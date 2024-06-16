import './Footer.css'
import Risco from '../assets/risco-bio.svg'

const Footer = () => {
    return (
    <footer className='footer'>
        <div className="conteiner-footer">
            <div className="conteiner-titulo">
                <img src={Risco} alt="" className='risco' />
                <h1 className='titulo'> BioCollapse</h1>
            </div>
            <p className='direitos-reservados'>Copyright © BioCollapse | Todos os direitos reservados</p>
        </div>
    </footer>
    )
}

export default Footer