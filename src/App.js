// import logo from './logo.svg';
import './App.css';

import HomaPage from "./components/homapage/homePage.tsx";

import AboutMeHeding from "./components/aboutme/aboutme.jsx";
import { LoagingProgress } from "./components/styleItem/loagingProgress.tsx";

import StickyScrollRevealDemo from "./components/styleItem/stratergy.tsx";

import { ProjectCatogary } from "./components/preojectCotogary/projectCatogary.tsx";
import { Projects } from "./components/projects/projects.tsx";

import {Header} from "./components/Header/Header.tsx";

import EmailForm from "./components/contact/cantact.tsx"
 
import  Footer from "./components/Footer/footer.jsx"

//import Navbar from "./components/pages/Header/navBar.tsx";


function App() {
  return (
    <div className="App">

      <Header/>
      <HomaPage />   
      <AboutMeHeding />
      <LoagingProgress />
      <ProjectCatogary />
      <StickyScrollRevealDemo />
      <Projects />
      <EmailForm/>
      < Footer/>


   


      


    </div>
  );
}

export default App;
