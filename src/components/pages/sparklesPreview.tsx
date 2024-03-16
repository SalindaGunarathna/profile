import React from "react";
import SparklesCore from "../ui/sparkles.tsx";
import ScrollAnimation from "react-animate-on-scroll";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.tsx";
import Illustration from "../../assets/profile-pic.png";
import Hello from '../../assets/Hello.gif';


import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook2.png'

import telegram from '../../assets/telegram.svg'

import    HereBackgroud  from '../../assets/HereBackgroud.jpg'

const SparklesPreview = () => {
  const words = [
    { text: "i" },
    { text: "'m" },
    { text: "Salinda Gunarathna         .", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col justify-center overflow-hidden rounded-md">
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
          <div className="w-1/2">
            <p className="md:text-1xl text-1xl mr-left-3 lg:text-2xl font-bold text-left text-white relative z-20">
              Hello <img src={Hello} alt="Hello" width="20px" />
            </p>
            <h1 className="md:text-7xl text-3xl mr-left-15 padding-left-15 lg:text-6xl font-bold text-left text-white relative z-20">
              <TypewriterEffectSmooth words={words} />
            </h1>
            <div className="mr-left-10 horizontal-center flex flex-column">

            <a className="size-10"
            href="https://www.linkedin.com/in/salinda-gunarathna-a036a4263"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
            <a className="size-10"
              href="https://github.com/SalindaGunarathna"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a className="size-10"
              href="https://wa.me/+94775106025"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
             <a className="size-10"
              href="https://www.facebook.com/profile.php?id=100093844371992&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="telegram" />
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
            <img className="relative z-20 opacity-1"
                
                alt="Ilustração"
                style={{ width: "100%", height: "auto", maxWidth: "500px", maxHeight: "500px" }}
              />
            </ScrollAnimation>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SparklesPreview;
