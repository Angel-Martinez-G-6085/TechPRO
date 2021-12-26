import './inicio.css';
import INICIO from './inicio.html';

const loadInicio = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', INICIO);
};
export default loadInicio;
