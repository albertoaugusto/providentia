import './problems.sass'

const Problems = () => {
    
  return (
    <section className="problems">
      <div className="section-title">
        <h2 className='title container'>
          Evite problemas como esses...
        </h2>
      </div>
      <div className="boxesContainer container section">
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <h3 className='card-title'>
                Infrigir <br/> Marcas
              </h3>
            </div>
            <div className="back">
              <p className='card-text'> 
                O uso não autorizado de uma marca pode levar a <span>processos judiciais, altas indenizações</span>
                e à necessidade de <span>mudança no nome</span> da empresa. 
              </p>
            </div>
          </div>
        </div>
        {/*card 2*/}
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <h3 className='card-title'>
                Perder o direito de uso
              </h3>
            </div>
            <div className="back">
              <p className='card-text'> 
                Embora sua empresa tenha usado um nome sem registro por <span>anos</span>, 
                ao registrar, o terceiro ganha os <span>direitos sobre a marca</span>.
              </p>
            </div>
          </div>
        </div>
        {/*card 3*/}
        <div className="cardBox">
          <div className="card">
            <div className="front">
              <h3 className='card-title'>
                Marketing jogado fora
              </h3>
            </div>
            <div className="back">
              <p className='card-text'>
                <span>Tempo e capital</span> são gastos para criar uma marca forte.
                Agora imagine ter que mudar de nome porque não registrou sua marca. 
                Um <span>investimento jogado fora</span>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problems