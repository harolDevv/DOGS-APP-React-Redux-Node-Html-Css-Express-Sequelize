
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home';
import Inicio from './components/Inicio';
import CardDetail from './components/CardDetail'
import CreateProduct from './components/CreateProduct';


function App() {
  return (
    <div className='app'>
        <Route exact path='/' component={Inicio}/>
        <Route path='/Home' component={Home}/>
        <Route  path='/dogs/:dogName' component={CardDetail}/>
        <Route exact path='/create' component={CreateProduct}/>
      </div>
  );
}

export default App;
