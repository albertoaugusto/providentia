import './about.sass'

const About = () => {
  return (
    <section className='about section container' id='about'>
        <h3 className="about-subtitle">
            Um pouco sobre nós...
        </h3>
        <h3 className="about-title">
            Quem somos nós:            
        </h3>
        <div className="about-container">
            <div className="row">
                <div className="card-about">
                    <div className="item-in">
                        <h4 className='card-title-about'>Nossa equipe</h4>
                        <div className="seperator"></div>
                        <p className='card-text'>
                            Nossa esquipe altamente qualificada possui <b>ampla experiência</b> no ramo e 
                            está pronta para auxiliá-lo(a) em todos os aspectos do processo de registro,
                            desde a pesquisa até o acompanhamento junto aos órgãos competentes.
                        </p>
                    </div>
                </div>
                <div className="card-about">
                    <div className="item-in">
                        <h4 className='card-title-about'>Nosso diferencial</h4>
                        <div className="seperator"></div>
                        <p className='card-text'>
                            Garantimos atendimento personalizado, agilidade nos processos e 
                            compromisso com a excelência. 
                            Proteja sua marca e inovações com a Providentia Consultoria.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About