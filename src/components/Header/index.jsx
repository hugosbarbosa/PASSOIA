// 1. IMPORTAR O USESTATE
import { useState } from "react"; 
import "./header.scss";
import logomarca from "../../assets/imagens/logomarca.png";
import burguerMenuOpen from "../../assets/icons/burguer-icon.png";
import burguerMenuClose from "../../assets/icons/close.png";

function Header(){
    // 2. A LÓGICA VEM AQUI (ANTES DO RETURN)
    const [menuOpen , setMenuOpen] = useState(false);

    return(
        <header>
            <img className="logomarca" src={logomarca} alt="logo marca da pagina" />

            {/* Botão Hambúrguer */}
            <div className="burguer" onClick={() => setMenuOpen(!menuOpen)}>
                <img 
                    src={menuOpen ? burguerMenuClose : burguerMenuOpen} 
                    alt="icone de menu hamburguer" 
                />
            </div>

            {/* 3. CORREÇÃO DAS CRASES NA CLASSE */}
            {/* Note as crases ` ` envolvendo tudo dentro das chaves { } */}
            <nav className={`menu-navegacao ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#looks-sectionid">LOOKS</a></li>
                    <li><a href="#lancamentos">LANÇAMENTOS</a></li>
                    <li><a href="#novidade">NOVIDADE</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header