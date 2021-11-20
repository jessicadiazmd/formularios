function Compositores({ array }) {
  return array.map((compositor) => <li>{compositor.nombre}</li>);
}

export default Compositores;
