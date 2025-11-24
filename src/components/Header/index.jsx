
import "./header.scss";
import logomarca from "../../assets/imagens/logomarca.png";

function Header(){
    return(
        <header>
            <img src={logomarca} alt="logo marca da pagina" />
            <ul>
                <li><a href="#looks-sectionid">LOOKS</a></li>
                <li><a href="#lancamentos">LANÇAMENTOS</a></li>
                <li><a href="#novidade">NOVIDADE</a></li>
            </ul>
        </header>
    )
}
export default Header
//   header - tag
// Header componente funcional -logica