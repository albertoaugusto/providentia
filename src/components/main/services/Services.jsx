import "../services/services.sass";

const Services = () => {
  return (
    <section className="services" id="services">
      <h3 className="services-title">
          Serviços
      </h3>
      <div className="grid-services container">
        {/*card 1*/}
        <div className="card-services">
          <span className="icon">
            <i className="fa-regular fa-copyright"></i>
          </span>
          <h4>Registro de Marcas</h4>
          <p>
            O registro de marcas é um procedimento legal que protege o nome,
            símbolo ou design exclusivo de uma empresa ou produto, garantindo direitos exclusivos de uso comercial. 
          </p>
        </div>
        {/*card 2*/}
        <div className="card-services">
          <span className="icon">
            <i className="fa-regular fa-lightbulb"></i>
          </span>
          <h4>Registro de Patentes</h4>
          <p>
            O registro de patentes é um processo legal que concede ao titular o direito exclusivo de produzir, 
            usar e vender uma invenção por um período determinado, em troca da divulgação pública do conhecimento técnico.
          </p>
        </div>
      {/*card 3*/}
        <div className="card-services">
          <span className="icon">
            <i className="fa-solid fa-desktop"></i>
          </span>
          <h4>Registro de Softwares</h4>
          <p>
            O registro de software é um procedimento que confere proteção legal aos programas de computador,
            garantindo direitos autorais sobre seu código fonte e prevenindo cópias não autorizadas. 
          </p>
        </div>
        {/*card 4*/}
        <div className="card-services">
          <span className="icon">
            <i className="fa-solid fa-globe"></i>
          </span>
          <h4>Registro de Domínios</h4>
          <p>
            O registro de domínios é o processo de garantir o direito exclusivo de usar um nome na internet, 
            como um site ou endereço de e-mail, através de um serviço de registro autorizado.
          </p>
        </div>
      </div>  
    </section>
  );
};

export default Services;
