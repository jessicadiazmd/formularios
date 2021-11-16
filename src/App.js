import "./App.css";
import { useState } from "react";

function App() {
  const [texto, setTexto] = useState("");
  const [eliminar, setEliminar] = useState("");
  const [array, setArray] = useState([
    "Wolfgang Amadeus Mozart",
    "Ludwig van Beethoven",
    "Johann Sebastian Bach",
  ]);

  let mostrarArray = array.map((compositor) => {
    return <li>{compositor}</li>;
  });
  let nuevoArray;

  return (
    <>
      <ul>{mostrarArray}</ul>
      <input
        type="text"
        onChange={(e) => setTexto(e.target.value)}
        value={texto}
      />
      <button
        onClick={() => {
          nuevoArray = [...array, texto];
          setArray(nuevoArray);
          setTexto("");
        }}
      >
        Añadir compositor
      </button>
      <input
        type="text"
        onChange={(e) => setEliminar(e.target.value)}
        value={eliminar}
      />
      <button
        onClick={() => {
          let nuevoNuevoArray = [...nuevoArray];
          if (nuevoNuevoArray.indexOf(eliminar) > 0) {
            nuevoNuevoArray.splice(nuevoNuevoArray.indexOf(eliminar), 1);
          }

          setArray(nuevoNuevoArray);
        }}
      >
        Eliminar compositor
      </button>
    </>
  );
}

export default App;
