import './TerceiroConteudo.css'

const TerceiroConteudo = () => {
    return (
    <div className='terceiro-conteudo' id='jogo'>
        <div className='textos'>
            <h1 className='titulo-jogo'>Jogo</h1>
            <p className='desc-jogo'>Vale lembrar que é apenas uma prévia, infelizmente, não consegui chegar até o final. Mas, boa experiência :).</p>
        </div>
        <iframe width="1120" height="630" allow="fullscreen; autoplay; encrypted-media" 
        src="https://games.construct.net/66467/latest?autoplay=0" frameborder="0" 
        allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" 
        webkitallowfullscreen="true" allowpaymentrequest="false" 
        referrerpolicy="unsafe-url" 
        sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" 
        scrolling="no">
        </iframe>
        <p className='atencao-jogo'>Atenção, o jogo está apenas dispositivos 'desktops'.</p>
    </div>
    )
}

export default TerceiroConteudo