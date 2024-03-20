// import logo from './logo.svg';
import './App.css';

import  SparklesPreview from "./components/pages/sparklesPreview.tsx";

import AboutMeHeding from "./components/pages/aboutme/aboutme.jsx";
import {GoogleGeminiEffectDemo} from "./components/pages/parralx.tsx"; 

import StickyScrollRevealDemo from "./components/pages/stratergy.tsx";

import {MacbookScrollDemo} from "./components/pages/macLapIcon.jsx"

function App() {
  return (
    <div className="App">
      <SparklesPreview/>
      <AboutMeHeding/>

      <GoogleGeminiEffectDemo/>
     
   

       <StickyScrollRevealDemo/> 

       {/* <MacbookScrollDemo/> */}
     

    </div>
  );
}

export default App;
