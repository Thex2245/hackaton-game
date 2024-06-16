import './PrimeiroConteudo.css'
import Preview from '../assets/banner.jpg'
import Risco from '../assets/risco-bio.svg'

const PrimeiroConteudo = () => {

    return (
        <div className='primeiro-conteudo'>
            <div className='conteiner-1'>
                <div className="conteiner-titulo">
                    <img src={Risco} alt="" className='risco' />
                    <h1 className='titulo'> BioCollapse</h1>
                </div>
                <p className='desc'>Em um mundo destruído por um <b>apocalipse zumbi</b> e um <b>colapso ambiental</b>, os sobreviventes precisam não apenas lutar contra os mortos-vivos, mas também reconstruir uma nova sociedade auto-sustentável e com uma governança ética.</p>
            </div>
            <div className='conteiner-2 hidden'>
                <img draggable='false' src={Preview} alt="Previw Image - BioCollapse" className='preview-photo'/>
            </div>
        </div>
    )
}

export default PrimeiroConteudo