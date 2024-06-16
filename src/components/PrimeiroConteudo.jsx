import './PrimeiroConteudo.css'
import Preview from '../assets/banner.jpg'

const PrimeiroConteudo = () => {

    return (
        <div className='primeiro-conteudo'>
            <div className='conteiner-1'>
                <h1 className='titulo'>BioCollapse</h1>
                <p className='desc'>Em um mundo destruído por um apocalipse zumbi e um colapso ambiental, os sobreviventes precisam não apenas lutar contra os mortos-vivos, mas também reconstruir uma nova sociedade auto-sustentável e com uma governança ética.</p>
            </div>
            <div className='conteiner-2 hidden'>
                <img draggable='false' src={Preview} alt="Previw Image - BioCollapse" className='preview-photo'/>
            </div>
        </div>
    )
}

export default PrimeiroConteudo