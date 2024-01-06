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
        <div className="about-container grid">
            <div className="about-info">
                <p className='about-description'>
                    Nossa esquipe altamente qualificada possui <span className='orange'> 
                    ampla experiência</span> no ramo e está pronta
                    para auxiliá-lo(a) em todos os aspectos do processo 
                    de registro, desde a pesquisa até o acompanhamento junto 
                    aos órgãos competentes.     
                </p> 
            </div>
            <div className="about-info">
                 <p className="about-description">
                    Garantimos atendimento <span className='orange'>personalizado</span>, <span className='orange'> agilidade nos processos </span> e <span className='orange'>compromisso</span> com 
                    a excelência. Proteja sua marca e inovações com a <b className='providentia'>Providentia Consultoria.</b>
                </p>      
            </div>   
        </div>
    </section>
  )
}

export default About