"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient.tsx";
import { IconAppWindow } from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card.tsx";

import SparklesCore from "../ui/sparkles.tsx";

const Image = require("../../assets/profile-pic.png");
const externalLink = require("../../assets/external-link.svg");

const webAppImage = require("../../assets/GymWebApp.png");
const cameramenApp = require("../../assets/camMobileApp.png");
const carSaleProject = require("../../assets/carsale.png");
const cwpfAplication = require("../../assets/wpfAplication-01.png");
const cwpfAplication2 = require("../../assets/wpfapp2.png");
const MLproject = require("../../assets/malProject.png");
const rentvehicle = require("../../assets/rentvehicle.png");
export function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center justify-center min-h-screen dark:bg-black bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
            <h1 className="md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white ">
                My Projects
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

            <div className="flex flex-wrap justify-center gap-10 md:gap-5 items-center">
                {/* web app */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card dark:hover:shadow-2xl
                     dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
                     border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={webAppImage}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"

                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4 ">Gym management web application</h3>
                            <p className="text-gray-200">
                                This project is a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                This application incorporates a comprehensive set of features,
                                with admin panel and user profile.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-white">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Mern Starck →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/GymManagementWebApp"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                view
                            </a>
                        </div>

                    </CardBody>
                </CardContainer>
                {/* mobile app */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card dark:hover:shadow-2xl
                     dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]
                      w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={cameramenApp}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4 ">Find cameraman, mobile app</h3>
                            <p className="text-gray-200">
                                This was a group project in flutter.
                                In this Flutter app, users can easily find and hire cameramen
                                for their events based on price range and proximity.
                                My main contribution to this group project was in backend development
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200 text-gray-200">
                                <li>Flutter and Firebase,</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-gray-200">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Flutter and Firebase →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/Cameraman_MobileApp"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                view
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* web app otto car sale */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card 
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black
                     dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4"> 
                            <img
                                src={carSaleProject}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4">OTTO Car sale web application</h3>
                            <p className="text-gray-200">
                                This was a group project in MERN stack.
                                I contributed to the backend development of this project using Express, Node.js,
                                and MongoDB for an actual client who needed a solution for managing sales of their cars.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-gray-200">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Node js, Express, Mongodb →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/otto_car_sale_webApp"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                rel="noreferrer"
                            >
                                view
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* wpf application 1 */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card 
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black
                     dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src={cwpfAplication}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4">Student management system .Net framework WPF</h3>
                            <p className="text-gray-200">
                                This is a simple WPF application using the .NET framework.
                                This application is designed to help students manage their modules efficiently.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-gray-200">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                .Net →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/Individual_Project_GUI"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                rel="noreferrer"
                            >
                                view
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* wpf application 2 */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card 
                    dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]
                     border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4 text-gray-200">
                            <img
                                src={cwpfAplication2}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4">Student management system</h3>
                            <p className="text-gray-200">
                                This is a group project we developed a student management
                                system using WPF application with C#, SQL database. My primary contribution was the backend development.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-gray-200">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                C#, SQL, .Net →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/Group_Project_GUI_3945_4062"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                rel="noreferrer"
                            >
                                view
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* machine learning */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card
                     dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
                     dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4 text-gray-200">
                            <img
                                src={MLproject}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4">Machine Learning project</h3>
                            <p className="text-gray-200">
                                This machine learning project aims to predict students' final grades.
                                we used Decision Trees, SVM algorithms
                                The prediction task is approached as both a classification and regression problem.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-gray-200">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                machine learning →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/MachineLearnig_Project_Group95"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                rel="noreferrer"
                            >
                                view
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>

                {/* ott rent vehicle */}
                <CardContainer className="inter-var">
                    <CardBody className="bg-black-[0.8] relative group/card
                     dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black
                      dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border border-gray-700">

                        <CardItem translateZ="100" className="w-full mt-4 ">
                            <img
                                src={rentvehicle}
                                height="500"
                                width="500"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>

                        <div className="body">
                            <h3 className="text-2xl text-blue-500 pt-4">Rent vehicle web application</h3>
                            <p className="text-gray-200">
                                This is a group project. I contributed to backend development using Spring Boot with PostgreSQL database.
                                We followed agile methodology and used Jira and GitHub for project management.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list text-gray-200">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20 text-gray-200">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                spring boot →
                            </CardItem>
                            <a
                                href="https://github.com/SalindaGunarathna/Otto-rent-system-backend"
                                target="_blank"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                rel="noreferrer"
                            >
                                view
                            </a>
                        </div>
                    </CardBody>
                </CardContainer>


            </div>
        </div>
    );
}
