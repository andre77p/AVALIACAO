


import { useState , useRef, useEffect } from 'react';

export default function Index(){

    const [pequeno, setPequeno ] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);

    const [total, setTotal] = useState('');


    const [resposta, setResposta] = useState(0);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('')
    const ref = useRef();

    
    function compra(acaiP, acaiM, acaiG, desc){


        let pequeno= acaiP * 13.50;
        let medio = acaiM * 15.00;
        let grande = acaiG * 17.50;
        let x= pequeno+medio+grande;
        let y = (pequeno + medio + grande ) * desc / 100;
        let final = x-y;
        return final
        setTotal (final); 
    
    if (acaiP < 0 ||  acaiP < 0 ||  acaiG < 0 || desc < 0 ){
        setTotal('Valor invalido')
    }

    else if(desc === 100){
        setTotal('Free sale')
    }

}

    function calcularClick(){
        let x = compra(pequeno, medio, grande, desconto);
        setResposta(x);
    }

    

    return(
        <main>
            <h1>Açai</h1>
            <div>
        
        <input type="text" value={pequeno} onChange={e => setPequeno(Number(e.target.value))} ></input>
        <input type="text" value={medio} onChange={e => setMedio(Number(e.target.value))}></input>
        <input type="text" value={grande} onChange={e => setGrande(Number(e.target.value))}></input>
        </div>

        <div>
        <input type='text' value={desconto} onChange={e => setDesconto(Number(e.target.value))}></input>
        </div>

        <div>
        <button className='' onClick={calcularClick} disabled={carregando}>
            Calcular
        </button>
        </div>

        <div>
            O total à pagar é R$<span>{resposta} </span>
        </div>

        <div>
            {erro}
        </div>

        
        </main>
    )
}