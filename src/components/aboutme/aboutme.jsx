"use client";
import React from "react";
import SparklesCore from "../ui/sparkles.tsx";
import ScrollAnimation from "react-animate-on-scroll";

// import node from "../../../assets/facebook2.jpg";
// import VinayakSingh from "../../../assets/profile-pic.png";
// import wordpress from "../../../assets/wordpress.svg";
// import shopify from "../../../assets/shopify.svg";
// import htmlIcon from "../../../assets/html-icon.svg";
// import cssIcon from "../../../assets/css-icon.svg";
// import jsIcon from "../../../assets/js-icon.svg";
// import nodeIcon from "../../../assets/node-icon.svg";
// import reactIcon from "../../../assets/react-icon.svg";
// import typescriptIcon from "../../../assets/typescript-icon.svg";
// import vueIcon from "../../../assets/vue-icon.svg";
// import boostrapIcon from "../../../assets/bootstrap-icon.svg";


import ShuffleHero from "../../components/ui/aboutmeText.jsx";


const AboutMeHeding = () => {

    
    return (

        <div id="aboutme" className="flex-colunm">


            <div className=" h-1/4 h-[40rem] w-full bg-black flex flex-col items-center mr-top-10 overflow-hidden ">
                <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white ">
                About me 
                </h1>
                <div className="w-[40rem] h-20 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]">




                    </div>
                </div>
                <ShuffleHero />

            </div>



        </div>
    );
}


export default AboutMeHeding