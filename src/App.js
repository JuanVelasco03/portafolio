import './App.css';
import Navbar from './Componenst/Navbar';
// import Imagen from './Componenst/Imagen';
// import ViewLeft from './views/ViewLeft';
// import ViewRight from './views/ViewRight';
import Home from './Componenst/Home';
import Aboutme from './Componenst/Aboutme';
import Skillset from './Componenst/Skillset';


function App() {
  
  return (
    <div className="App">
      <div className="container-menu">
       <Navbar />
      </div>
      <div id="0">
        <Home />
      </div>
      <div id="1">
        <Aboutme/>
      </div>
      {/* <div id="2">
        <Skillset/>
      </div> */}
    </div>
  );
}

export default App;
