import { useEffect, useState } from 'react';



function listarAlunos(qtdAlunos) {
    let array = [];

    for(let i = 1; i <= qtdAlunos; i++){
        array = [...array, i];

    }

        return array;
}

export default function MediaAlunos() {
    const [alunos, setAlunos] = useState();
    const [qtdAlunos, setQtdAlunos] = useState([]);
    const [nota, setNota] = useState([])


    function listarQtdAlunos() {
        const resposta = listarAlunos(alunos);
        console.log(resposta);
        setQtdAlunos(resposta);
    }

    return (
        <main>

            <div>
                Qtd.Alunos: <input type='number' value={alunos} onChange={e => setAlunos(Number(e.target.value))} />
                <button onClick={listarQtdAlunos}>Ok</button>
            </div>

            {qtdAlunos.map(item =><div> Alunos: {item} <input /></div>
            )}

            <button >Calcular</button>

        </main>
    );
}