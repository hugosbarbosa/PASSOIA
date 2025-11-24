import './news.scss';
import newsBanner from '../../assets/imagens/Banner2.png';

function Novidades() {
    return (
        <section className="news-section" id="novidade">
            <h2>NOVIDADES PARA VOCÊ</h2>
            <div className="newsbanner">
                <img src={newsBanner} alt="Banner de novidades" />
            </div>
        </section>
    )
}
export default Novidades;