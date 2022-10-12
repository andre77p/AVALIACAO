import { useState } from 'react'

export default function Temperatura() {

    const[temperatura, setTemperatura] = useState(0);
    const[resp, setResp] = useState(0);

    function calculoTemp() {
        try{
            let resultado = calcularTemperatura(temperatura);

            setResp('A situação para sua temperatura é ' + resultado);
        } catch(err) {
            setResp(err.message);
        }
    }


    function calcularTemperatura(temp) {
        if(temp < 36) {
            return 'Hipotermia';
        }
    
        else if(temp >= 36 && temp < 37.6) {
            return 'Normal';
        }
    
        else if(temp >= 37.6 && temp < 39.6) {
            return 'Febre';
        }
    
        else if(temp >= 39.6 && temp < 41) {
            return 'Febre alta';
        }
    
        else {
            return 'Hipertermia';
        }
    }
    return(
        <main className='page-febre'>
            <div>
                <div>
                    Digite sua temperatura: <input type='number' placeholder='°celsius' value={temperatura} onChange={e => setTemperatura(e.target.value)} />
                </div>

                <div>
                    Resultado: {resp}
                </div>

                <button onClick={calculoTemp}>Calcular</button>
            </div>
        </main>
    )
}