import React, { useState, useEffect } from "react";
import web3 from "./web3/web3";
import lottery from "./lottery";
 
function App() {
  const [manager, setManager] = useState("");

  useEffect(() => {
    async function fetchData() {
      const manager = await lottery.methods.manager().call();

      setManager(manager);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>
        This contract is managed by {manager}.
      </p>
    </div>
  );
}
 
export default App;