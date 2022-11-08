import { useEffect, useState } from "react";


export default function Index() {

    const [n, setN] = useState();
    const [l, setL] = useState();
    const [d, setD] = useState();
    const [resposta, setResposta] = useState();

    function cafezinn () {
        const resp = queroCafe(n, l, d)
        setResposta(resp)
    }

    useEffect(() => {
        cafezinn()
    }, [n, l, d])

    return (
        <div>
            <h1>QUERO CAFÉ</h1>
            <p>Insira a quantidade de Alunos: <input type="number" value={n} onChange={e => setN(e.target.value)}/></p>
            <p>Insira a capacidade da Cafeteira: <input type="number" value={l} onChange={e => setL(e.target.value)}/></p>
            <p>Insira a quantidade que cada Aluno: <input type="number" value={d} onChange={e => setD(e.target.value)}/></p>
            {resposta}
        </div>
    );
}