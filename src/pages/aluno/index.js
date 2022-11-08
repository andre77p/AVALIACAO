import { useState } from "react"



export default function Index () {

    const [qtdAluno, setQtdAluno] = useState(0);
    const [alunos, setAlunos] = useState([]);
    const [notaAluno, setNotaAluno] = useState([]);
    const [resp, setResp] = useState()
    let array = []
    
    function Alunos(num) {
        try {
    
            let x = [];
            for (let i = 1; i <= num; i++) {
                x = [...x, i];
            }
            return x;
        } catch (err) {
            return err.message;
        }
    }

    function gerarAlunos() {
        const resp = alunos(qtdAluno);
        setAlunos(resp)
    }

    console.log(notaAluno);

    return(
        <main>
            <h1>Alunos</h1>
            <p>Quantidade de Alunos: <input type="number" value={qtdAluno} onChange={e=> setQtdAluno(e.target.value)} /> <button onClick={gerarAlunos}>OK</button> </p>
            {alunos.map((item, index) => (
                <div>
                    <p>Aluno {item} <input type="number" value={notaAluno[index]} onChange={e => {
                          
                            array[index] = Number(e.target.value)
                           console.log(array)  
                    }} /></p>
                </div>
            ))
            }
            <button onClick={() => setResp(calcularMedia(array ))}>Calcular</button>
            {resp}
        </main>
    );
}