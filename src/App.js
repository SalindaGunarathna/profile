// import logo from './logo.svg';
import './App.css';

import  SparklesPreview from "./components/pages/sparklesPreview.tsx";

import AboutMeHeding from "./components/pages/aboutme/aboutme.jsx";
import {GoogleGeminiEffectDemo} from "./components/pages/parralx.tsx"; 

import {StickyScrollRevealDemo} from "./components/pages/stratergy.tsx"

function App() {
  return (
    <div className="App">
      <SparklesPreview/>
      <AboutMeHeding/>

      <GoogleGeminiEffectDemo/>
      <AboutMeHeding/>
   

      {/* <StickyScrollRevealDemo/> */}
     

    </div>
  );
}

export default App;
