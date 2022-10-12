import { useState } from 'react'

export default function Combustivel() {
    const[capacidade, setCapacidade] = useState(0);
    const[consumo, setConsumo] = useState(0);
    const[distancia, setDistancia] = useState(0);
    const[resp, setResp] = useState(0);

    function calcularCombustivel(capac, consumo, dist) {   
    
        if(capac < 0 || consumo < 0 || dist < 0) 
                throw new Error('Alguma informação está inválida!')
    
        
        let resultado = 0;
    
        let litrosdistancia = dist / consumo;
        let paradas = litrosdistancia / capac;
    
        resultado = Math.ceil(paradas);
    
        if(resultado === Infinity) {
            return 'Consumo ou Capacidade não podem ser zero!';
        }
    
    }


    function calculoAutonomia() {
        try{
            let resultado = calcularCombustivel(capacidade, consumo, distancia);

            setResp('Você precisará fazer ' + resultado + ' paradas para abastecer');
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main className='page-combusti'>
            <div>
                <div>
                    Digite a capacidade do tanque: <input type='number' placeholder='Em litros' value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                </div>

                <div>
                    Digite o consumo do seu veículo: <input type='number' placeholder='Em litros' value={consumo} onChange={e => setConsumo(e.target.value)} />
                </div>

                <div>
                    Digite a distância da sua viagem: <input type='number' placeholder='Em litros'  value={distancia} onChange={e => setDistancia(e.target.value)} />
                </div>

                <div>
                    Número de paradas: {resp}
                </div>

                <button onClick={calculoAutonomia}>Calcular</button>
            </div>
        </main>
    )
}