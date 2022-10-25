import { useEffect, useSatate } from "react"

export default function Index() {

    const [entrada, setEntrado] = useState():
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [resposta, setResposta] = useState([]);

    function Juros () {
        const resp = jurosCompostos(entrada, capital, taxa, periodo);
        setResposta(resp);
        console.log(resp)
    } 
 }


 return (
    <div>
        <h3>Juros compostos</h3>
        <input type="number" value={capital} onChange={e => setCapital( Number(e.target.value) )}/>
        <input type="number" value={entrada} onChange={e => setEntrada( Number(e.target.value) )}/>
        <input type="number" value={taxa} onChange={e => setTaxa( Number(e.target.value) )}/>
        <input type="number" value={periodo} onChange={e => setPeriodo( Number(e.target.value) )}/>

    </div>
 )