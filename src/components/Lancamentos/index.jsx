import { useState } from "react";
import "./lancamentos.scss";

// --- IMAGENS ---
import azul from "../../assets/imagens/azul.png";
import base from "../../assets/imagens/base.png";
import marrom from "../../assets/imagens/marrom.png";
import vermelho from "../../assets/imagens/vermelho.png";

// --- THUMBS (Miniaturas) ---
import thumb1 from "../../assets/imagens/batom1.png"; 
import thumb2 from "../../assets/imagens/batom 2.png"; 
import thumb3 from "../../assets/imagens/batom 3.png";

// --- ÍCONE ---
import starIcon from "../../assets/imagens/star.png";

import circuloLilas from "../../assets/imagens/LILASCIRCLE.png"; 
import circuloVermelho from "../../assets/imagens/VERMELHOCIRCLE.png"; 
import circuloMarrom from "../../assets/imagens/BORDOCICLE.png"; 
import circuloBase from "../../assets/imagens/SALMAOCIRCLE.png"; 

function Lancamentos() {
    const [imagemPrincipal, setImagemPrincipal] = useState(marrom);

    return (
        <section className="lancamentos-section" id="lancamentos">
            
            {/* Essa DIV vira o CARD com borda APENAS no celular */}
            <div className="wrapper-card-mobile">
                
                {/* O Título fica aqui para entrar no card do celular */}
                <h2>APROVEITE OS LANÇAMENTOS</h2>
                
                {/* Essa DIV organiza as 3 colunas no Desktop */}
                <div className="conteudo-desktop">
                    
                    {/* COLUNA 1: THUMBS (Só aparece no Desktop) */}
                    <div className="coluna-thumbs">
                        <img src={thumb1} alt="thumb" />
                        <img src={thumb2} alt="thumb" />
                        <img src={thumb3} alt="thumb" />
                    </div>

                    {/* COLUNA 2: FOTO PRINCIPAL */}
                    <div className="coluna-principal">
                        <img 
                            key={imagemPrincipal}
                            src={imagemPrincipal} 
                            alt="Batom Selecionado" 
                        />
                    </div>

                    {/* COLUNA 3: INFO (Vira card no Desktop, funde no Mobile) */}
                    <div className="coluna-info">
                        
                        <div className="estrelas-container">
                            <img src={starIcon} alt="Avaliação 5 estrelas" />
                        </div>

                        <h3>Matte Premium</h3>
                        
                        <p className="subtitulo">Cores disponíveis</p>
                        
                        <div className="seletor-cores">
                            <button className="btn-cor-img" onClick={() => setImagemPrincipal(azul)}>
                                <img src={circuloLilas} alt="Azul" />
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
                                O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 

export default Lancamentos;