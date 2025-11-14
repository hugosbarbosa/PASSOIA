//hooks são funçãos especiais do react que permitem o uso de recursos como estado e ciclo de vida em componentes funcionais

//useState controla os estados de algo na interface

import { useState } from "react";

//importando imagens
import azul from "../../assets//imagens/azul.png";
import base from "../../assets//imagens/base.png";
import marrom from "../../assets//imagens/marrom.png";
import vermelho from "../../assets//imagens/vermelho.png";

function Lancamentos() {
    //antes do return podemos fazer toda a logica que quisermos

    //cor = variavel inicial
    //setCor = função que atualiza a variavel
    const [cor, setCor] = useState(marrom)

    return (

        <section>
            <h2> APROVEITE OS LANÇAMENTOS </h2>
            <img src={cor} alt="lançamento de produto" />

            <button onClick={()=>setCor(azul)}>Azul</button>
            <button onClick={()=>setCor(base)} >Base</button>
            <button onClick={()=>setCor(marrom)}>Marrom</button>
            <button onClick={()=>setCor(vermelho)}>Vermelho</button>
            
        </section>
    );
} 

export default Lancamentos;