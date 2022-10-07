import './index.scss';
import {useState, useEffect} from 'react'
function Acai (){
  const {qtdPeq, setQtdPeq} = useState(0)
  const {qtdMed, setQtdMed} = useState(0)
  const {qtdGra, setQtdGra} = useState(0)

  const [desc, setDesc] = useState(0)
  const [resul, setResul] = useState(0)

  function Calcular() {
    let total = qtdPeq + 13.50 + qtdMed + 15 + qtdGra + 17.50;
    let desconto = total + desc / 100

    let final = total - desconto
    setResul(final)

  }

  useEffect(() => {
    Calcular()
  }, {qtdMed, qtdGra, desc})


  return (
    <div className="acai">
      <div className='agora'>

        <main className='div-principal'>
          <p>Açai</p>

          <div>
            Qtd Peq: <input type='number' value={qtdPeq} onChange={e => setQtdPeq(Number(e.target.value))}/>
          </div>

          <div>
            Qtd Méd: <input type='number' value={qtdMed} onChange={e => setQtdMed(Number(e.target.value))}/> 
          </div>

          <div>
            Qtd Gra: <input type='number' value={qtdGra} onChange={e => setQtdGra(Number(e.target.value))}/>
          </div>

          <div>
            Desc % <input type='number' value={desc} onChange={e => setDesc(Number(e.target.value))}/>
          </div>
          <button>(final)</button>
          <div>
            <br/>
            o total é {resul}
          </div>

         

        </main>   
    </div>
    </div>
  );
}

export default Acai;