import './QuintoConteudo.css'
import Photo from '../assets/eu.jpg'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const QuintoConteudo = () => {
    return (
        <div className='quinto-conteudo'>
            <div className="conteiner-sobremim">
                <img className='profile-photo' src={Photo} alt="Profile-Photo" />
                <div className='sobre-mim'>
                    <h1 className="sobre-mim-titulo"><b>Olá</b>, meu nome é Théo</h1>
                    <p className='sobre-mim-desc'>Sou desenvolvedor Front-End, e desenvolvi esta página com a biblioteca 'React'. Tenho 16 anos, e amo a programação, e estou em constante evolução.</p>
                </div>
                <div className='redes-sociais'>
                    <a href="https://github.com/Thex2245" target='_blank'><i className="bi bi-github"></i></a>
                    <a href="https://www.linkedin.com/in/devthex" target='_blank'><i class="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    )
}

export default QuintoConteudo