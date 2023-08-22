import './App.css';
import Hero from './components/Title';
import Group from './assets/Group.jpg';
import Meeting from './assets/Meeting.jpg';
import Girl from './assets/Girl.jpg';
import Slider from './components/Slider';
import Study from './assets/Study.jpg';
import Navbar from './components/Navbar.js'

const navbarLinks = [
  {url: "#", title: "Home"},
  {url: "#", title: "About"},
  {url: "#", title: "Dashboard"}
];

function App() {
  return (
    <div className="App">
      
      <Navbar navbarLinks={navbarLinks}/>

      <Hero imageSrc={Group}/>
      <Slider 
        imageScr={Meeting} 
        title={"Learn with other students."}
        subTitle={"our platform only has other students and teachers, meaning that it is a save and encouraging environment for all."}
      />
       <Slider 
        imageScr={Study} 
        title={"Learn from others experiences."}
        subTitle={"On top of education, another focus of this app on interconnectivity."}
        flipped={true}
       />
    </div>
  );
}

export default App;
