import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const handleClickBoton = () => {
    setNumClicks(numClicks + 1)
  }
  const handleResetBoton = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
      <Contador
        numClicks={numClicks}
      />
      <Boton
        tipo={"click"}
        handleBoton={handleClickBoton}
      />
      <Boton
        tipo={"reset"}
        handleBoton={handleResetBoton}
      />
    </div>
  );
}

export default App;
