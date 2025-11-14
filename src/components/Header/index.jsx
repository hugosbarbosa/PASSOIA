
import "./header.scss";
import logomarca from "../../assets/imagens/logomarca.png";

function Header(){
    return(
        <header>
            <img src={logomarca} alt="logo marca da pagina" />
            <ul>
                <li>LOOKS</li>
                <li>LANÇAMENTOS</li>
                <li>NOVIDADE</li>
            </ul>
        </header>
    )
}
export default Header
//   header - tag
// Header componente funcional -logica