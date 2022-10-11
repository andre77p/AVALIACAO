import { useState, useRef, useEffect} from 'react';

export default function Index(){
  
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desc, setDesc] = useState(0);

    const [total, setTotal] = useState('');
  
  
  
    function salario(salario, bonus, desc)

    {
        let bon = (salario * 10) / 100;
        let meio = salario + bon;
        let final = meio - desc;

        let total = 0;

        return final
        setTotal (final); 



    }

    function salarioClick(){
        let a = salarioliquido(salario,bonus,desc);
         setResposta(a);
    }

  
  
  
  
    return(
        <div >
            <h1>Salário</h1>

            <input type="text" value={salario} onChange={e => setSalario(Number(e.target.value))} ></input>
        <input type="text" value={bonus} onChange={e => setBonus(Number(e.target.value))}></input>
        <input type="text" value={desc} onChange={e => setDesc(Number(e.target.value))}></input>
         
        <button className='' onClick={calcularClick} disabled={carregando}>
            Calcular
        </button>

        <div>
            O total à pagar é R$<span>{resposta} </span>
        </div> 
       
        </div>
    )
}