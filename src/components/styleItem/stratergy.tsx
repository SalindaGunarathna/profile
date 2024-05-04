"use client";
import React from "react";
import { StickyScroll } from "../ui/stickyScrollReveal.tsx";


import TypewriterEffectSmooth from "../ui/typewriterEffectSmooth.jsx";

// import Image from "next/image";

const Jira =require("../../assets/jira.png")
const githubrepo =require("../../assets/githubrepo.png")
const agile = require("../../assets/agile.png")

const Cicd =require("../../assets/cicd.png")

const content = [
  {
    title: "Project management",
    description:
      "Work together in real time with our team, clients, and stakeholders.Jira project management tool helps us stay organized and on top of our workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src={Jira}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes with github",
    description:
      "Experience real-time updates with with github. Track every modification as it happens, ensuring clarity and precision in our project's evolution. Say goodbye to the chaos of version control and welcome the simplicity of staying up-to-date with the latest changes",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={githubrepo}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Follow the agile process",
    description:
      "Work together in real time with our team, clients, and stakeholders. Share our knowledge with team members and process client requirements. Manage workflow by taking Scrum meetings to ensure all group members are in the correct process.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       <img
          src={agile}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Getting start to follow CI/CD pipeline", 
    description:
      "I'm updating my knowledge to align with the CI/CD pipeline development process. I've already completed the development phase and I am now transitioning to testing and deployment. I'm learning DevOps concepts to follow the CI/CD pipeline efficiently.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       <img
          src={Cicd}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const StickyScrollRevealDemo = () => {

  const phrases = [
    { text: "My projects are integrating with     " },
    { text: "project" },

  ];

  return (
    <div className="p-0  ">
      <div className="flex justify-center text-4xl bg-black text-white pb-4">
        <TypewriterEffectSmooth phrases={phrases} />
      </div>
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;

