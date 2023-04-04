import React, { useState, useEffect } from "react";
import web3 from "./web3/web3";
import lottery from "./lottery";

function App() {
  const [manager, setManager] = useState("");
  const [players, setPlayers] = useState([]);
  const [balance, setBalance] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);

      setManager(manager);
      setPlayers(players);
      setBalance(balance);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>
        This contract is managed by {manager}. There are currently{" "}
        {players.length} people entered, competing to win{" "}
        {web3.utils.fromWei(balance, "ether")} ether!
      </p>
      <hr></hr>
      <form>
        <h2>Try your Luck!!</h2>
        <div>
          <label>Type the amount of ether to enter: </label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button>Enter</button>
        </div>
      </form>
    </div>
  );
}

export default App;
