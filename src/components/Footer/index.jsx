import './footer.scss';

import mastercardImg from '../../assets/imagens/mastercard.png';
import visaImg from '../../assets/imagens/visa.png';
import pixImg from '../../assets/imagens/pix.png'; 
import boletoImg from '../../assets/imagens/boleto.png'; 

import instagramImg from '../../assets/imagens/instagram.png';
import facebookImg from '../../assets/imagens/facebook.png';
import twitterImg from '../../assets/imagens/twitter.png';
import youtubeImg from '../../assets/imagens/youtube.png';

function Footer() {
    return (

        <footer className='footer'> 
            

            <div className='atendimento'>
                <h4>ATENDIMENTO</h4>
                <p>Fale Conosco</p>
                <p>Perguntas Frequentes</p>
                <p>Meus Pedidos</p>
                <p>Nossa Loja</p>
            </div>

            <div className='pagamento'>
                <h4>FORMAS DE PAGAMENTO</h4>
                    <div className="icones-pagamento">
                    <img src={mastercardImg} alt="Mastercard" />
                    <img id='visa' src={visaImg} alt="Visa" />
                    <img src={pixImg} alt="Pix" />
                    <img src={boletoImg} alt="Boleto" />
                </div>
            </div>


            <div className='redes-sociais'>
                <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
                <a href="#" ><img src={instagramImg} alt="Instagram" /></a>
                <a href="#"><img src={facebookImg} alt="Facebook" /></a>
                <a href="#"><img src={twitterImg} alt="Twitter" /></a>
                <a href="#"><img src={youtubeImg} alt="YouTube" /></a>
            </div>

        </footer>
    )
}

export default Footer;