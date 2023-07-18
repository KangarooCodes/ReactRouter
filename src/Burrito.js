import { Link } from 'react-router-dom';

const Burrito = () => {
  return (
    <div className='container'>
      <h1>🌯 Burrito !</h1>
      <p>Look at this delicious hispanic cuisine!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Burrito;