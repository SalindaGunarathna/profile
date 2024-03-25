// import logo from './logo.svg';
import './App.css';

import SparklesPreview from "./components/pages/sparklesPreview.tsx";

import AboutMeHeding from "./components/pages/aboutme/aboutme.jsx";
import { GoogleGeminiEffectDemo } from "./components/pages/parralx.tsx";

import StickyScrollRevealDemo from "./components/pages/stratergy.tsx";

import { BackgroundGradientDemo } from "./components/pages/preojectCotogary/projectCatogary.tsx";

import { ThreeDCardDemo } from "./components/pages/projects/card.jsx";

function App() {
  return (
    <div className="App">
      <SparklesPreview />
      <AboutMeHeding />

      <GoogleGeminiEffectDemo />

      <StickyScrollRevealDemo />

      <BackgroundGradientDemo />


      <ThreeDCardDemo />


    </div>
  );
}

export default App;
