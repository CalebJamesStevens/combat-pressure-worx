import './App.css';
import HeaderSection from './components/header-section';
import NavbarBase from './components/Navbar/navbar-base';
import OurStory from './components/our-story/our-story';
import OurWork from './components/our-work/our-work';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <NavbarBase></NavbarBase>
      <HeaderSection></HeaderSection>
      <OurStory></OurStory>
      <OurWork></OurWork>
      <Footer/>
    </div>
  );
}

export default App;
