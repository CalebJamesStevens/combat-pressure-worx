import './App.css';
import HeaderSection from './components/header-section';
import NavbarBase from './components/Navbar/navbar-base';
import OurStory from './components/our-story/our-story';

function App() {
  return (
    <div className="App">
      <NavbarBase></NavbarBase>
      <HeaderSection></HeaderSection>
      <OurStory></OurStory>
    </div>
  );
}

export default App;
