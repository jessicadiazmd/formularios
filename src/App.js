import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Components Import
import Eliminar from "./Eliminar";
import Compositores from "./Compositores";
import Cabecera from "./Cabecera";

function App() {
  //ESTADOS
  const [texto, setTexto] = useState("");
  const [feedback, setFeedback] = useState("");
  const [array, setArray] = useState([
    {
      nombre: "Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  //FEEDBACK DE LAS ACCIONES
  function darFeedback(string) {
    setFeedback(string);
    setTimeout(() => setFeedback(""), 4000);
  }

  return (
    <BrowserRouter>
      <Cabecera />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* MOSTRAR LISTA DE COMPOSITORES */}
              <ul>
                <Compositores array={array} />
              </ul>

              <div>
                {/* CAJA DE TEXTO PARA AÑADIR COMPOSITOR */}
                <input
                  type="text"
                  onChange={(e) => setTexto(e.target.value)}
                  value={texto}
                />

                {/* BOTON PARA AÑADIR COMPOSITOR */}
                <button
                  onClick={() => {
                    let nuevoArray = [...array, texto];
                    setArray(nuevoArray);
                    setTexto("");
                  }}
                >
                  Añadir compositor
                </button>
              </div>
            </>
          }
        />

        <Route
          path="/eliminar"
          element={
            <Eliminar
              array={array}
              setArray={setArray}
              darFeedback={darFeedback}
            />
          }
        />
      </Routes>
      {/* ESPACIO PARA DAR EL FEEDBACK SI NO SE HA ELIMINADO COMPOSITOR */}
      <p>{feedback}</p>
    </BrowserRouter>
  );
}

export default App;
