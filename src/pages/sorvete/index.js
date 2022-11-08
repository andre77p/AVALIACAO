import { useState } from "react";





 function sorvete(gramas) {
    try {

        if (gramas <= 0) throw new Error("Valor inválido")

        let r = 0;
        if (gramas < 1000)
            r = (3.50 * (gramas / 100)).toFixed(2)
        else
            r = (3 * (gramas / 100)).toFixed(2)

        return r;
    } catch (err) {
        return err.message
    }

}
export default function Index() {

    const [gramas, setGramas] = useState(0);
    const [resposta, setResposta] = useState('');

    function Preco () {
        const resp = sorvete(gramas);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`O total a se pagar é R$ ${resp}`.replace('.', ','))
        console.log(resposta)
    }
 
    return(
        <div>
            <h1>Sorveteria</h1>
            <p>Insira a Quantidade de Gramas: <input type="number" value={gramas} onChange={e => setGramas(e.target.value)} /></p>
            <button onClick={Preco}>Calcular</button>
            {resposta}
        </div>
    );
}