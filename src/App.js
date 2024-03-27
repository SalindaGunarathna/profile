// import logo from './logo.svg';
import './App.css';

import SparklesPreview from "./components/pages/sparklesPreview.tsx";

import AboutMeHeding from "./components/pages/aboutme/aboutme.jsx";
import { GoogleGeminiEffectDemo } from "./components/pages/parralx.tsx";

import StickyScrollRevealDemo from "./components/pages/stratergy.tsx";

import { BackgroundGradientDemo } from "./components/pages/preojectCotogary/projectCatogary.tsx";
import { BackgroundGradientDemo2 } from "./components/pages/projects/projectCatogary.tsx";





function App() {
  return (
    <div className="App">
      <SparklesPreview />   
      <AboutMeHeding />

      <GoogleGeminiEffectDemo />

      

      <BackgroundGradientDemo />
      <StickyScrollRevealDemo />

      <BackgroundGradientDemo2 />


   


      {/* <ThreeDCardDemo /> */}


    </div>
  );
}

export default App;
