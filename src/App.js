
import './App.css';
import image from './choose.jpg';
import imageKorb from './korb.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ image } alt="shop" width="250px"/>
      </div>
      <h1>Grocery List</h1>
         <GroceryList/>
         <div className='container'>
      <img src={ imageKorb } alt="korb" width="200px"/>
      </div>
    </div>
  );
}

export default App;
