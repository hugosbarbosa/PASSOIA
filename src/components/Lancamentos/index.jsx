import { useState } from "react";
import "./lancamentos.scss";

// --- IMAGENS PRINCIPAIS 
import azul from "../../assets/imagens/azul.png";
import base from "../../assets/imagens/base.png";
import marrom from "../../assets/imagens/marrom.png";
import vermelho from "../../assets/imagens/vermelho.png";

// --- IMAGENS LATERAIS ESTÁTICAS

import thumb1 from "../../assets/imagens/batom1.png"; 
import thumb2 from "../../assets/imagens/batom 2.png"; 
import thumb3 from "../../assets/imagens/batom 3.png";

//ÍCONES E TEXTURAS
import starIcon from "../../assets/imagens/star.png";


import circuloLilas from "../../assets/imagens/LILASCIRCLE.png"; 
import circuloVermelho from "../../assets/imagens/VERMELHOCIRCLE.png"; 
import circuloMarrom from "../../assets/imagens/BORDOCICLE.png"; 
import circuloBase from "../../assets/imagens/SALMAOCIRCLE.png"; 

function Lancamentos() {
    // Estado apenas para a imagem PRINCIPAL
    
    const [imagemPrincipal, setImagemPrincipal] = useState(marrom);

    return (
        <section className="lancamentos-section" id="lancamentos">
            <h2>APROVEITE OS LANÇAMENTOS</h2>
            
            <div className="painel-conteudo">
                
               
                <div className="coluna-thumbs">
                    <img src={thumb1} alt="detalhe do batom" />
                    <img src={thumb2} alt="detalhe do batom" />
                    <img src={thumb3} alt="detalhe do batom" />
                </div>

                <div className="coluna-principal">
                    
                    <img
                    key={imagemPrincipal}
                     src={imagemPrincipal} alt="Batom Selecionado" />

                </div>

                <div className="coluna-info">

                    <div className="estrelas-container">
                        <img src={starIcon} alt="estrela" />
                    </div>
                    <h3>Matte Premium</h3>
                    

                    
                    <p className="subtitulo">Cores disponíveis</p>
                    
                    <div className="seletor-cores">
                        <button className="btn-cor-img" onClick={() => setImagemPrincipal(azul)}>
                            <img src={circuloLilas} alt="Azul/Lilás" />
                        </button>
                        <button className="btn-cor-img" onClick={() => setImagemPrincipal(vermelho)}>
                             <img src={circuloVermelho} alt="Vermelho" />
                        </button>
                        <button className="btn-cor-img" onClick={() => setImagemPrincipal(marrom)}>
                             <img src={circuloMarrom} alt="Marrom" />
                        </button>
                         <button className="btn-cor-img" onClick={() => setImagemPrincipal(base)}>
                             <img src={circuloBase} alt="Base" />
                        </button>
                    </div>

                    <div className="descricao-texto">
                        <h4>Descrição</h4>
                        <p>
                            O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default Lancamentos;