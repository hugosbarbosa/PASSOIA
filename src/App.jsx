// aqui importamos os arquivos
import Header from "./components/Header"
import Lancamentos from "./components/Lancamentos"

// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
    <Header/>
    <Lancamentos/>
    </>
  )
}
export default App