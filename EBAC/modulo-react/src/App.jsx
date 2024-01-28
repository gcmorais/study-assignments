import { useEffect, useState } from 'react'
import Input from './components/input'
import './App.css';


function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [render, setRender] = useState(false);

  function handleAlturaChange(e){
    setAltura(e.target.value);
    setRender(true)

    if(!e.target.value){
      setRender(false)
    }
  }

  function handlePesoChange(e){
    setPeso(e.target.value);
    
    if(!e.target.value){
      setRender(false)
    }
  }

  const result = peso/(altura * altura);

  let diagnostico = '';

  if(result < 18.5){
    diagnostico = 'Abaixo do peso';
  }
  else if(result >= 18.5 && result <= 24.9){
    diagnostico = 'Peso normal';
  }
  else if(result >= 25 && result <= 29.9){
    diagnostico = 'Sobrepeso';
  }
  else if(result >= 30 && result <= 34.99){
    diagnostico = 'Obesidade grau I';
  }
  else if(result >= 35 && result <= 39.99){
    diagnostico = 'Obesidade grau II (severa)';
  }
  else if(result > 40){
    diagnostico = 'Obesidade grau III (mórbida)';
  }
  else{
    diagnostico = 'Aguardando valores'
  }

  return (
    <div className='content'>
      <header>
        <h1>Cálculo IMC</h1>
      </header>
      <main>
        <form>
          <Input 
            texto={"Peso(kg)"}
            change={handlePesoChange}
            value={peso}
          />
          <Input 
            texto={"Altura (m)"}
            change={handleAlturaChange}
            value={altura}
          />
          
        </form>
      </main>
      <footer>
        {render && (
          <>
            <h2>IMC: {result.toFixed(2)}</h2>
            <h2>Classificação: {diagnostico}</h2>
          </>
        )}
      </footer>
    </div>
  )
}

export default App
