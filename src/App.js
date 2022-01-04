import './App.css';
import {Navbar} from './components/Navbar';
import {Cart} from './components/Cart';
import {Body} from './components/Body';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Body/>
    </div>
  );
}

export default App;
