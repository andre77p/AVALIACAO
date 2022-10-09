import { useState, useRef, useEffect} from 'react';
export default function Index(){

    const [gramas, setGramas] = useState('');
    
    const [resposta, setResposta] = useState('');
    const [valor, setValor] = useState('');
    
    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();

    
  
    function compra(gramas){
      
    let total = 0; 
    

    if ( gramas > 1000) {
        total = (gramas / 100 ) * 3.0;
    }

    else {
        total = ( gramas /100 ) * 3.5;
    }
    

    return total; 
    }


    function calcularClick(){
        let x = compra(gramas);
        setResposta(x);
        
    }


    return(
        <main>
            <h1>Sorveteria</h1>
            <div>
        
        <input type="text" value={gramas} onChange={e => setGramas(e.target.value)} ></input>
       
        </div>

        <div>
        <button className='' onClick={calcularClick} disabled={carregando}>
            Calcular
        </button>
        </div>

        <div>
            O total à pagar é R$<span>{resposta}  </span>
        </div>


        <div>
            {erro}
        </div>

        
        </main>
    )
}