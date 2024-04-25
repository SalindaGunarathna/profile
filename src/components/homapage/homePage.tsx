import React from "react";
import SparklesCore from "../ui/sparkles.tsx";
import ScrollAnimation from "react-animate-on-scroll";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.tsx";
import { IconBrandLinkedin, IconBrandFacebook, IconBrandWhatsapp, IconBrandGithub } from "@tabler/icons-react";

const Hello = require('../../assets/Hello.gif');
const Illustration = require('../../assets/profile-pic.png');

const HomaPage = () => {
  const words = [
    { text: "i" },
    { text: "'m" },
    { text: "Salinda Gunarathna         .", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div id="home" className="h-[40rem] relative w-full bg-black flex flex-col justify-center overflow-hidden rounded-md">
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
              Computer Engineering undergraduate
            </p>
            <div className="flex items-center space-x-4">
              {/* <a href='https://github.com/SalindaGunarathna' target="_blank" rel="noopener noreferrer"><IconBrandGithub className="text-2xl text-white hover:text-blue-500" /></a>
              <a href='https://wa.me/+94775106025' target="_blank" rel="noopener noreferrer"><IconBrandWhatsapp className="text-2xl text-white hover:text-green-500" /></a>
              <a href='https://www.linkedin.com/in/salinda-gunarathna-a036a4263' target="_blank" rel="noopener noreferrer"><IconBrandLinkedin className="text-2xl text-white hover:text-blue-800" /></a>
              <a href='https://www.facebook.com/profile.php?id=100093844371992&mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer"><IconBrandFacebook className="text-2xl text-white hover:text-blue-600" /></a> */}
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center z-100">
            <img className="relative z-20 opacity-1"
              src={Illustration}
              alt="Ilustração"
              style={{ width: "100%", height: "auto", maxWidth: "500px", maxHeight: "500px" }}
            />
            <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
              {/* Animation Content */}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomaPage;
