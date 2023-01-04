import './App.css';
import Navbar from './Componenst/Navbar';
import Imagen from './Componenst/Imagen';
import ViewLeft from './views/ViewLeft';
import ViewRight from './views/ViewRight';


function App() {

  return (
    <div className="App">
      <div className="container-menu">
       <Navbar />
      </div>
      <div className="row">
        <div className='content-left'>
          <ViewLeft/>
        </div>
        <div className='content-right backImage'>
          < ViewRight/>
        </div>
      </div>
    </div>
  );
}

export default App;
