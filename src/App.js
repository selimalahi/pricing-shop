import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1 className='text-4xl font-bold bg-slate-300 pb-12 pt-10 text-white underline '>This is h1 header</h1>
     <p>This is paragraph tag</p>

     <Pricing></Pricing>
    </div>
  );
}

export default App;
