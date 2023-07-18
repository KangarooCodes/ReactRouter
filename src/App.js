import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import CocaCola from './CocaCola';
import NavBar from './NavBar';
import Burrito from './Burrito';
import Sushi from './Sushi';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/sushi">
          <Sushi />
        </Route>
        <Route exact path="/burrito">
          <Burrito />
        </Route>
        <Route exact path="/cocacola">
          <CocaCola />
        </Route>
        <Route exact path="/">
          <VendingMachine />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
