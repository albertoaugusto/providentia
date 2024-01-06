/* eslint-disable react/no-unescaped-entities */
import './solutions.sass'

const Solutions = () => {
  return (
    <section className="solutions section container">
      <div className="section-sol-title">
        <h2 className='title-sol'>
          Do que você precisa <br /> 
          <span>HOJE</span>?
        </h2>
      </div>
      <div className="boxesContainer">
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <h3 className='card-sol-title'>
                "Não tenho registro no <span>INPI</span>, mas já utilizo a marca"
              </h3>
            </div>
            <div className="back">
              <p className='card-text'>
                Inicie o processo de registro da sua marca conosco. 
                O registro oferece <span>preoteção legal</span> e 
                <span>exclusividade</span> sobre o uso da marca.
              </p>
            </div>
          </div>
        </div>
        {/*card 2*/}
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <h3 className='card-sol-title'>
                "Preciso registrar uma <span>NOVA</span> marca"
              </h3>
            </div>
            <div className="back">
              <p className='card-text'>
                Investimos na busca certa desde o início, para lhe oferecer
                um serviço de qualidade. <span>Seu projeto é único? Nós também somos únicos!</span>
              </p>
            </div>
          </div>
        </div>
        {/*card 3*/}
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <h3 className='card-sol-title'>
                "Preciso de uma <span>LOGO/LOGOMARCA</span>"
              </h3>
            </div>
            <div className="back">
              <p className='card-text'> 
                Estamos prontos para criar uma logomarca <span>única e impactante</span>
                que represente a <span>identidade</span> da sua marca. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions