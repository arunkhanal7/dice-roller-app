import { useState } from 'react';
import './index.css'


const App = ()=> {
  const [diceNumber,setDiceNumber]= useState(5)
  const refreshDice = ()=> {
    const ranno= Math.floor(Math.random()*6)+1
    setDiceNumber(ranno)
  }
  return (
    <div >
      <img src={require(`./assets/${diceNumber}.png`)}></img>
      <br/>
      <button onClick={()=> refreshDice()} className='button'>Roll</button>
    </div>
  );
}

export default App;
