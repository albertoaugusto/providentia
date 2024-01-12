import './form.sass'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => { 

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlpoko9', 'template_nu91958', form.current, 'lXL8ye_bq9KWLD8_U')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
           e.target.reset()
           alert("Mensagem enviada com sucesso!")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="form-section section container" id="contact">
      <h3 className="cont-title-section">Contate-nos</h3>
      <div className="form-container container grid">
        <div className="form-content">
          <h3 className="form-title">
            Entre em Contato
          </h3>
          {/*left cards*/}
          <div className="form-info">
            {/*card 1*/}
            <div className="contact-card">
                <i className="bx bx-mail-send contact-icon"></i>

                <h3 className="contact-card-title">
                    Email
                </h3>
                <span className="contact-card-data">contatoprovidentia@gmail.com</span>
                <a href="mailto:contatoprovidentia@gmail.com" rel="noreferrer" target="_blank" className="contact-button">
                  Escreva-me <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
            </div>
            {/*card 2*/}
            <div className="contact-card">
                <i className="bx bxl-whatsapp contact-icon"></i>

                <h3 className="contact-card-title">
                    WhatsApp
                </h3>
                <span className="contact-card-data">+55 11 94887-2447</span>
                <a href="https://wa.me/5511948872447" rel="noreferrer" target="_blank" className="contact-button">
                  Escreva-me <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
            </div>
            {/*card 3*/}
            <div className="contact-card">
                <i className="bx bxl-linkedin contact-icon"></i>

                <h3 className="contact-card-title">
                    LinkedIn
                </h3>
                <span className="contact-card-data">linkedin.com/company/providentia-consultoria/</span>
                <a href="https://www.linkedin.com/company/providentia-consultoria/" rel="noreferrer" target="_blank" className="contact-button">
                    Escreva-me <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
            </div>
          </div>
        </div>
        <div className="contact-content">
            <h3 className="form-title">
              Escreva uma mensagem!
            </h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                {/*input 1*/}
                <div className="contact-form-div">
                  <label className="contact-form-tag">Nome</label>
                  <input type="text" name="user_name" className="contact-form-input" placeholder="Insira seu nome"/>
                </div>  
                {/*input 2*/}
                <div className="contact-form-div">
                  <label className="contact-form-tag">Email</label>
                  <input type="email" name="user_email" className="contact-form-input" placeholder="Insira seu email"/>
                </div>  
                {/*input 3*/}
                <div className="contact-form-div contact-form-area">
                  <label className="contact-form-tag">Mensagem</label>
                  <textarea name="message" cols="30" rows="10" className="contact-form-input" placeholder="Escreva sua mensagem">
                  </textarea>
                </div>

                <button className="button-form button-flex" value="Send">
                    Enviar Mensagem
                </button>  
            </form>
        </div>
      </div>
    </section>
  )
}

export default Form