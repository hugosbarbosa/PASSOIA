import "./looks.scss";
// Seus imports continuam aqui...
import labiosImg from '../../assets/imagens/LABIOS.png';
import olhosImg from '../../assets/imagens/OLHOS.png';
import rostoImg from '../../assets/imagens/ROSTO.png';
import tendenciasImg from '../../assets/imagens/TENDENCIAS.png'; 

function Looks(){
    return(
        <section className="looks-section" id="looks-sectionid">
            <h2>LOOKS E DICAS DE MAQUIAGEM</h2>

            <div className="cards">
               <img src={labiosImg} alt="Imagem de Lábios" />
               <img src={olhosImg} alt="Imagem de Olhos" />
               <img src={rostoImg} alt="Imagem de Rosto" />
               <img src={tendenciasImg} alt="Imagem de Tendências" />
            </div>
        </section>
    )
}
export default Looks;