import { useEffect, useState } from "react"

export default function Index() {

    const [entrada, setEntrada] = useState();
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [resposta, setResposta] = useState([]);

    function jurosCompostos (entrada, capital, taxa, periodo) {
        try {
            let ca = capital - entrada;
            let ma = ca*Math.pow(1 + taxa/100, periodo);
            let ju = ma - ca;
            let pe = ma/(periodo*12);
            let array = `${ju.toFixed(2).replace('.', ',')}, ${pe.toFixed(2).replace('.', ',')}, ${ma.toFixed(2).replace('.',',')}`;

            return array;

        } catch (err) {
            return err.message
        }
    }

    function Juros () {
        const resp = jurosCompostos(entrada, capital, taxa, periodo);
        setResposta(resp);
        console.log(resp)
    } 

    
 return (
    <div>
        <h3>Juros compostos</h3>
        <p>Capital</p><input type="number" value={capital} onChange={e => setCapital( Number(e.target.value) )}/>
        <p>Entrada</p><input type="number" value={entrada} onChange={e => setEntrada( Number(e.target.value) )}/>
        <p>Taxa(anual)</p><input type="number" value={taxa} onChange={e => setTaxa( Number(e.target.value) )}/>
        <p>Periodo</p><input type="number" value={periodo} onChange={e => setPeriodo( Number(e.target.value) )}/>

        <button onClick={Juros}>Calcular</button>
        {resposta}

    </div>
 )

 }

