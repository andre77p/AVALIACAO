import { useState } from 'react'


export default function Retangulo() {
    const[base, setBase] = useState();
    const[altura, setAltura] = useState();
    const[resp, setResp] = useState([]);

function retanguloLinhas(base, altura) {
        let arraygrande = [];
        let array = [];
    
       /* for(let i = 0; i < altura; i++) {
            for(let h = 0; h < base; h++) {
                array[h] = '*';
            }*/
    
    
        for(let i = 0; i < altura; i++) {
            arraygrande[i] = array;
    
            for(let h = 0; h < base; h++) {
                array[h] = '*';
            }
        }
            
     //   }
    
        return array;
    }

    function mostrarArray(){
        try{
            let resposta = retanguloLinhas(base, altura);
            console.log(resposta);
            setResp(resposta);
        } catch(err){
            setResp(err.message);
        }
    }

    return (
        <main>
            <div >
                <div>
                    Base: <input type='number' placeholder='base' value={base} onChange={e => setBase(Number(e.target.value))} />
                </div>

                <div>
                    Altura: <input type='number' placeholder='altura' value={altura} onChange={e => setAltura(Number(e.target.value))} />
                </div>

                {resp}

                <button onClick={mostrarArray}>Calcular</button>
            </div>
        </main>
    )
}