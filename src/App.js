import './App.css';
import {Navbar} from './components/Navbar';
import {Cart} from './components/Cart';
import {Body} from './components/Body';
import {Form} from './components/Form';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Body/>
      <Form/>
    </div>
  );
}

export default App;
