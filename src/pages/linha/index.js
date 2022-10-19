import { useState } from 'react'


export default function Linha() {
    const [tamanho, setTamanho] = useState();
    const [resp, setResp] = useState([]);

     function linha(tamanho){
        let array = [];
        
    
        for(let i = 0; i < tamanho; i++){
            array[i] = '*';    
        }
        return array;
    }


    function mostrarArray() {
        try {
            let resposta = linha(tamanho);
            console.log(resposta);
            setResp(resposta);
        } catch (err) {
            setResp(err.message);
        }


    }

    return (
        <main>
            <div >
                <div>
                    Tamanho: <input type='number' placeholder='inicio' value={tamanho} onChange={e => setTamanho(Number(e.target.value))} />
                </div>

                <div className='infos'>
                    {resp.map(item =>
                        <p > {item} </p>
                    )}
                </div>
                <button onClick={mostrarArray}>Calcular</button>
            </div>
        </main>
    )
}




