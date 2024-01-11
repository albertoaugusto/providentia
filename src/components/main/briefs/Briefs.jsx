import './briefs.sass'
import CtdoFrango from '../../../assets/ct-do-frango.jpg'
import Prime from '../../../assets/prime.jpg'
import Rock from '../../../assets/rock-trends.jpg'

const Briefs = () => {
  return (
    <section className='briefs section container' id='about'>
        <h3 className="briefs-title">
            Depoimentos            
        </h3>
        <div className="cards container">
          {/*card 1*/}
          <div className="card-briefs">
              <img className="img" src={CtdoFrango} alt="user" />
              <h4 className='name'>
                Angélica Silva
              </h4>
              <h6 className='business'>
                Central do Frango
              </h6>
              <p>Empresa com ótimo atendimento, nos deu total esclarecimentos sobre o assunto tratado. 
                Super atenciosos comigo, agradeço pela dedicação.</p>
          </div>
          {/*card 2*/}
          <div className="card-briefs">
              <img className="img" src={Prime} alt="user" />
              <h4 className='name'>
                Vera 
              </h4>
              <h6 className='business'>
                Prime Piscinas
              </h6>
              <p>
                Muito boa consultoria, nota 10! <br />
                Sou de outro estado, até acionei minha advogada para esclarecer algumas dúvidas 
                e voltei para conversar com vocês. 
              </p>
          </div>
          {/*card 3*/}
          <div className="card-briefs">
              <img className="img" src={Rock} alt="user" />
              <h4 className='name'>
                Eliana
              </h4>
              <h6 className='business'>
                Contabilidade Rock Trends
              </h6>
              <p>
                  Equipe muito atenciosa, sempre fazem questão de me manter atualizada. <br />
                  Só tenho a elogiar até o momento!
              </p>
          </div>
        </div>    
    </section>  
  )
}

export default Briefs