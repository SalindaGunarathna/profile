import React from "react";
import SparklesCore from "../ui/sparkles.tsx";
import ScrollAnimation from "react-animate-on-scroll";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.tsx";

import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandGithub,
} from "@tabler/icons-react";
import TypewriterEffectSmooth2 from "../styleItem/typewriterEffectSmooth.jsx"

// import Illustration from "../../assets/profile-pic.png";
//import Hello from '../../assets/Hello.gif';

const Hello = require('../../assets/Hello.gif')
const Illustration = require('../../assets/profile-pic.png')
const Linkedin = require('../../assets/linkedin.png')
const GithubIcon = require('../../assets/github.png')

const Facebook = require('../../assets/facebook2.png')

const whatsapp = require('../../assets/whatsapp.svg')

//import linkedin from '../../assets/linkedin.svg'
// import githubIcon from '../../assets/github.svg'
// import whatsapp from '../../assets/whatsapp.svg'
// import facebook from '../../assets/facebook2.png'

// import telegram from '../../assets/telegram.svg'

//import    HereBackgroud  from '../../assets/HereBackgroud.jpg'


const HomaPage = () => {


  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const phrases = [
    { text: "i" },
    { text: "'work with" },
    { text: "backend technologies,devOps         .", className: "text-[#6B11A5] dark:text-[#6B11A5]" },
  ];

  const words = [
    { text: "i" },
    { text: "'m" },
    { text: "Salinda Gunarathna         .", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div id ="home" className="h-[40rem] relative w-full bg-black flex flex-col justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mr-left-10 horizontal-center flex flex-row">
          <div className="w-1/2 h-1/2">


            <p className="md:text-1xl text-1xl mr-left-3 lg:text-2xl font-bold text-left text-white relative z-20" style={{ marginTop: "2cm" }}>
              Hello <img src={Hello} alt="Hello" width="20px" />
            </p>
            <h1 className="md:text-7xl text-3xl mr-left-15 padding-left-15 lg:text-6xl font-bold text-left text-white relative z-20">
              <TypewriterEffectSmooth words={words} />
            </h1>
            <p className="md:text-1xl text-1xl mr-left-3 lg:text-2xl font-bold text-left text-white relative z-20" >
            software developer ,DevOps
           </p>
            
              
            
            <div className="mr-left-10 horizontal-center flex flex-column">

            <a href='https://github.com/SalindaGunarathna' target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  GitHub
                </span>
                <BottomGradient />
              </button>
            </a>
              <a className="size-10"
                href="https://github.com/SalindaGunarathna"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GithubIcon} alt="GitHub" />
              </a>
              <a
                className="size-10"
                href="https://wa.me/+94775106025"
                target="_blank"
                rel="noreferrer"
                style={{ cursor: 'pointer' }}
              >
                <img src={whatsapp} alt="Whatsapp" />
              </a>

              <a className="size-10"
                href="https://www.facebook.com/profile.php?id=100093844371992&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} alt="telegram" />
              </a>


            </div>




          </div>
          <div className="w-1/2 flex justify-center items-center z-100">
            <img className="relative z-20 opacity-1"
              src={Illustration}
              alt="Ilustração"
              style={{ width: "100%", height: "auto", maxWidth: "500px", maxHeight: "500px" }}
            />


            <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
              {/* <img className="relative z-20 opacity-1"

                alt="Ilustração"
                style={{ width: "100%", height: "auto", maxWidth: "500px", maxHeight: "500px" }}
              /> */}
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomaPage;
