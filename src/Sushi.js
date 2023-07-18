import { Link } from 'react-router-dom';

const Sushi = () => {
  return (
    <div className='container'>
      <h1>🍣 Sushi</h1>
      <p>Sushi, however you like it prepared.</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Sushi;
