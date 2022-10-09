import { useState, useRef} from 'react';

export default function Index(){

    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');

    const [resposta, setResposta] = useState('');
    const [carregando, setCarregando] = useState('');
    const [erro, setErro] = useState('');
    const ref = useRef();
    

    
    function signoLibra(dia, mes){
        try{
        let signo = "";

        if(mes == 'Setembro' && dia >= 23 || 
            mes == 'Outubro' && dia <= 21) {
             signo = "sim";
            }
        else {
            signo ='nao'
        }
            
            return signo;
    }
    catch (err) {
        ref.current.complete()
        setCarregando(false)
        if (err.message.status === 401) {
            setErro(err.message.data.Erro)
        }
    }
}

    
    

    function VerificarClick(){
        let x = signoLibra(dia, mes);
        setResposta(x);
    }

    

    return(
        <main>
            <h1>Verificar se o Signo é de Libra</h1>

            <div>

            
        
        <input type="text"  value={mes} onChange={e => setMes(e.target.value)} ></input>
        
        </div>

        <div>
        <input type='text' value={dia} onChange={e => setDia(e.target.value)}></input>
        </div>

        <div>
        <button className='' onClick={VerificarClick} disabled={carregando}>
            consultar
        </button>
        </div>

        <div>
            É do signo de Libra? <span> {resposta} </span>
        </div>

        <div>
            {erro}
        </div>

        
        </main>
    )
}