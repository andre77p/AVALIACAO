import { useState } from "react"

export default function Orcamento() {
    const[ganhos, setGanhos] = useState(0);
    const[gastos, setGastos] = useState(0);
    const[resp, setResp] = useState(0);


   function orcamentoFamiliar(ganhos, gastos) {
        let porcgastos = (gastos * 100) / ganhos;
    
        if(porcgastos <= 20) {
            return 'Parabéns, você está gerenciando bem seu orçamento!';
        }
    
        else if(porcgastos <= 50) {
            return 'Muito bem, seus gastos não ultrapassam metade dos seus ganhos!';
        }
    
        else if(porcgastos <= 80) {
            return 'Atenção, melhor conter os gastos!';
        }
    
        else if(porcgastos <= 100) {
            return 'Cuidado, seu orçamento pode ficar comprometido!';
        }
    
        else {
            return 'Orçamento comprometido! Hora de rever seus gastos!';
        }
    }
    


    function chamarOrcamento() {
        try{
            let mensagem = orcamentoFamiliar(ganhos, gastos);
            setResp(mensagem);
        } catch(err) {
            setResp(err.message);
        }
    }

    return(
        <main>
            <div >
                <h1>Calcular Orçamento</h1>
                <div>
                    Ganhos:  <input type='number' min={0} value={ganhos} onChange={e => setGanhos(Number(e.target.value))} />
                </div>

                <div>
                    Gastos:  <input type='number' min={0} value={gastos} onChange={e => setGastos(Number(e.target.value))} />
                </div>

                <button onClick={chamarOrcamento}>Orçamento</button>          
                {resp}
            </div>
        </main>
    )
}