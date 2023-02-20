import web3 from './web3/web3';

function App() {
  web3.eth.getAccounts()
    .then(console.log)
    
  return (
    <div className="App">hi
    </div>
  );
}

export default App;
