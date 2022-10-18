
import { useState } from "react"




export default function IngressoCinema() {
    const[inteiras, setInteiras] = useState(0);
    const[meias, setMeias] = useState(0);
    const[dia, setDia] = useState('');
    const[nacional, setNacional] = useState(false);
    const[resp, setResp] = useState(0);


function ingressoCinema(inteiras, meias, dia, nacional) {
        let precoIngressos = (inteiras * 28.50) + (meias * 14.25);
    
        if(nacional === true) {
            precoIngressos = (inteiras * 5) + (meias * 5);
        }
    
        else if(dia === 'quarta-feira') {
            precoIngressos = (inteiras * 14.25) + (meias * 14.25);
        }
    
        return precoIngressos;
    }
    
    

    function chamarIngresso() {
        try{
            let precoIngresso = ingressoCinema(inteiras, meias, dia, nacional);
            setResp(precoIngresso);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main >
            <div >
                <h1>Calcular Preço</h1>
                <div>
                    Adultos:  <input type='number' min={0} value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
                </div>

                <div>
                    Crianças:  <input type='number' min={0} value={meias} onChange={e => setMeias(Number(e.target.value))} />
                </div>

                <div>
                    Dia da semana:  <input type='text' value={dia} onChange={e => setDia(e.target.value)} />
                </div>

                <div>
                    É nacional:  <input type='checkbox' value={nacional} onChange={e => setNacional(e.target.checked)} />
                </div>

                <button onClick={chamarIngresso}>Verificar</button>
            
                
                {resp}

            </div>
        </main>
    )
}