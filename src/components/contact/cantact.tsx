import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

import { useEffect } from 'react';

import SparklesCore from "../ui/sparkles.tsx";


import { Label } from "../ui/label.tsx";
import { Input } from "../ui/input.tsx";
import { cn } from "../../utils/cn.ts";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandGithub,
} from "@tabler/icons-react";


const EmailForm = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(prefersDarkScheme.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    prefersDarkScheme.addEventListener("change", handleChange);

    return () => {
      prefersDarkScheme.removeEventListener("change", handleChange);
    };
  }, []);






  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_svnkqd4';
    const templateId = 'template_65zn776';
    const publicKey = 'u9sQH-KEcMybeBApJ';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Salinda Gunarathna',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (

    <div  id ="contact" className={`h-[50rem] ${isDarkMode ? 'dark:bg-black' : 'bg-black'} w-full   dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center`}>
      {/* Radial gradient for the container to give a faded look */}
      <div className={`absolute pointer-events-none inset-0 flex items-center
        ${isDarkMode ? 'bg-black' : 'bg-black'}
       justify-center bg-black bg-black
        [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]`}></div>



      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
        <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold  text-white ">
          Contact Me
        </h1>
        <div className="w-[40rem] pb-5 relative">
        
          {/* Gradients */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#orange-300"
          />

          {/* Radial Gradient to prevent sharp edges */}
        </div>
        <p className="text-neutral-600 text-sm max-w-sm mt dark:text-neutral-300 text-white">
          send me an email and I will get back to you as soon as possible
        </p>

        

        <form className="my-8 text-white" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

          </div>
          <LabelInputContainer className="mb-4 ">
            <p>Email address</p>
            
            <Input id="email" placeholder="Enter your email" type="email"
             className='bg-gray-800 dark:bg-zinc-900 text-white rounded-md p-4'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <p> Your Name</p>
            <Input id="password" placeholder="Enter your name" type="name"
             className='bg-gray-800 dark:bg-zinc-900 text-white rounded-md p-4'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Your message</Label>
            <textarea
              placeholder="write your message"
              className='bg-gray-800 dark:bg-zinc-900 text-white h-40 rounded-md p-4'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Email &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />





        </form>


        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-xl text-neutral-500 dark:text-neutral-200">
            == Social Media ==
          </h2>
          <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4">
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

            <a href='https://wa.me/+94775106025' target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandWhatsapp className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  WhatsApp
                </span>
                <BottomGradient />
              </button>
            </a>

            <a href='https://www.linkedin.com/in/salinda-gunarathna-a036a4263' target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  LinkedIn
                </span>
                <BottomGradient />
              </button>
            </a>

            <a href='https://www.facebook.com/profile.php?id=100093844371992&mibextid=ZbWKwL' target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full md:w-auto text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Facebook
                </span>
                <BottomGradient />
              </button>
            </a>
          </div>





        </div>






      </div>
    </div>



    // <form onSubmit={handleSubmit} className='emailForm'>
    //   <input
    //     type="text"
    //     placeholder="Your Name"
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //   />
    //   <input
    //     type="email"
    //     placeholder="Your Email"
    //     value={email}
    //     onChange={(e) => setEmail(e.target.value)}
    //   />
    //   <textarea
    //     cols="30"
    //     rows="10"
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //   >
    //   </textarea>
    //   <button type="submit">Send Email</button>
    // </form>
  )
}



const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full text-white", className)}>
      {children}
    </div>
  );
};

export default EmailForm