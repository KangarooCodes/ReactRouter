import { Link } from 'react-router-dom';
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="container">
    <div className="vending-machine">
      <h1 className="vending-machine__title">Vending Machine</h1>
      <ul className="vending-machine__list">
        <li className="vending-machine__item">
          <Link to="/sushi">🍣 Sushi</Link>
        </li>
        <li className="vending-machine__item">
          <Link to="/burrito">🌯 Burrito !</Link>
        </li>
        <li className="vending-machine__item">
          <Link to="/cocacola">🥤 Coca Cola</Link>
        </li>
      </ul>
      <div className='drawer'><h2>Enjoy!</h2></div>
    </div>
    </div>
  );
};

export default VendingMachine;
