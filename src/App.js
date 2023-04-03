import web3 from './web3/web3';
import lottery from './lottery';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [manager,setManager] = useState('');

  useEffect(()=>{
    const manager = lottery.methods.manager().calls();

    setManager(manager);
  },[]);

  return (
    <div className="App">
      <h2>Lottery Contract</h2>
      <p>This Contract is managed by {manager}</p>
    </div>
  );
}

export default App;
