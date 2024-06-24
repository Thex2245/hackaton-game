import './QuartoConteudo.css'

const QuartoConteudo = () => {
    return (
        <div className='quarto-conteudo'> 
            <div className="praticas-esg">
                <div className="conteiner-titulo-esg">
                    <h1 className='titulo-esg'>Boas práticas de ESG</h1>
                </div>
                <div className="o-que-e">
                    <h1 className="o-que-e-titulo">O que é ESG?</h1>
                    <p className="o-que-e-desc">ESG é uma sigla em inglês para <b>E</b>nvironmental, <b>S</b>ocial e <b>G</b>overnance e se refere a critérios <b>A</b>mbientais, <b>S</b>ociais e de <b>G</b>overnança. <br /><br /> <i>Eles são utilizados para avaliar o desempenho de uma empresa ou organização em áreas além das financeiras, visando medir seu impacto e responsabilidade social e ambiental.</i></p>
                </div>
                <div className="onde-aplicado">
                    <h1 className="onde-aplicado-titulo">Onde ele é usado no jogo?</h1>
                    <li className='lista'><b>E</b>nvironmental (ambiental): sobreviventes devem explorar a floresta cuidadosamente, colentando recursos, mas de forma sustentável.</li>
                    <li className="lista"><b>S</b>ocial: sobreviventes devem fortalecer sua comunidade, promover a educação, ética e união.</li>
                    <li className="lista"><b>G</b>overnance (governança): sobreviventes devem se reunir para tomada de decisões do acampamento e gestão de conflitos.</li>
                </div>
            </div>
        </div>
    )
}

export default QuartoConteudo