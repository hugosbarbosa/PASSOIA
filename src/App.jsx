// aqui importamos os arquivos
import Header from "./components/Header"
import Lancamentos from "./components/Lancamentos"
import Banner from "./components/Banner"
import Looks from "./components/Looks"
import Novidades from "./components/Novidades"
import Footer from "./components/Footer"

// Arquivo principal
//para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
    <Header/>
    <Banner/>
    <Looks/>
    <Lancamentos/>
    <Novidades/>
    <Footer/>
    </>
  )
}
export default App