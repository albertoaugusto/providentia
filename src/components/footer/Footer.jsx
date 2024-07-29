import './footer.sass'
import Logo from '../../assets/logo-PROVIDENTIA.png'

const Footer = () => {
  return (
		<footer id="footer">
            <div className="container">
                <div className="columns">
                    <div className="logo column">
                        <img className='logo-footer' src={Logo} alt="logo providentia 2" />
                        <p>Oferecemos soluções personalizadas e de alta qualidade
                           para proteger sua propriedade intelectual. 
                        </p>
                    </div>
                    <div className="services-footer column">
                        <h3>Serviços</h3>
                        <ul>
                            <li>
                                <p>Registro de marcas</p>
                            </li>
                            <li>
                                <p>Criação de identidade visual</p>
                            </li>
                            <li>
                                <p>Propriedade Intelectual</p>
                            </li>
                        </ul>
                    </div>
                    <div className="column">
                        <ul className='social-media'>
                            <li>
                                <a href="https://www.linkedin.com/company/providentia-consultoria/" target='_blank' rel='noreferrer'>
                                    <i className="icon fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/providentiaconsultoria/" target='_blank' rel='noreferrer'>
                                    <i className="icon fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pay">
                    <ul>
                        <li>
                            <i className="fa-brands fa-cc-visa"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-cc-mastercard"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-paypal"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-pix"></i>
                        </li>
                        <li>
                            <i className="fa-solid fa-barcode"></i>
                        </li>
                    </ul>
                </div>

                <hr />

                <div className="copy">
                    <p>© Copyright 2023 – todos os direitos reservados – Providentia Consultoria CNPJ: 51.123.423/0001-30</p>
                </div>
            </div>
		</footer>
  )
}

export default Footer