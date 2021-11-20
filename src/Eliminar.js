import { useState } from "react";

function Eliminar({ array, setArray, darFeedback }) {
  const [eliminar, setEliminar] = useState("");

  function eliminarCompositor(nombre) {
    let nuevoArray = [...array];
    let nuevoArray2 = nuevoArray.filter(
      (compositor) => compositor.nombre.toLowerCase() !== nombre.toLowerCase()
    );
    if (nuevoArray.length !== nuevoArray2.length) {
      darFeedback(`${nombre} eliminado`);
      setArray(nuevoArray2);
      setEliminar("");
    } else {
      darFeedback(`${nombre} no se ha encontrado`);
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setEliminar(e.target.value)}
          value={eliminar}
        />
        <button onClick={() => eliminarCompositor(eliminar)}>
          Eliminar compositor
        </button>
      </div>
    </>
  );
}

export default Eliminar;
