
import { useState } from 'react';
import './App.css';
import wars from "./data.js";

function App() {
  const [warData, setWarData] = useState(wars);

  const handleClick=()=>{
   setWarData([]);
  }
  return (
    <main>
     <section className='container'>
      <h2>The Bloodiest Wars İn The World</h2>
      {warData.map((war)=>{
        return(
          <div className='warsr' key={war.id}>
        <img src={war.img} alt="" />
        <div>
          <h3>{war.title}</h3>
          <h4>{war.year}</h4>
          <h4>{war.death}</h4>
          <p>{war.explanation}</p>
        </div>
          </div>
        )

      })}
      <button onClick={handleClick}>Clear All</button>
      </section> 
    </main>
  );
}

export default App;
