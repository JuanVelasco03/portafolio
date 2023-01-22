import './App.css';
import Navbar from './Componenst/Navbar';
import Home from './Componenst/Home';
import Aboutme from './Componenst/about/Aboutme';
import Skills from './Componenst/skills/Skill';
import Portfolio from './Componenst/portfolio/Portfolio';


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
      <div id='2'>
        <Skills/>
      </div>
      <div id='3'>
        <Portfolio/>
      </div>

    </div>
  );
}

export default App;
