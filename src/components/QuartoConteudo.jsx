import './QuartoConteudo.css'
import Photo from '../assets/eu.jpg'

const QuartoConeudo = () => {
    return (
        <div className='quarto-conteudo'>
            <img className='profile-photo' src={Photo} alt="Profile-Photo" />
            <div className='sobre-mim'>
                <h1 className="sobre-mim-titulo"><b>Olá</b>, meu nome é Théo</h1>
                <p className='sobre-mim-desc'>Sou desenvolvedor Front-End, e desenvolvi esta página com a biblioteca 'React'. Tenho 16 anos, e amo a programação, e estou em constante evolução.</p>
            </div>
        </div>
    )
}

export default QuartoConeudo