import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/eliminar">Eliminar</Link>
      </nav>
    </header>
  );
}

export default Cabecera;
