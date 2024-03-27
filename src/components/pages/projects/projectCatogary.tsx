"use client";
import React from "react";
import { BackgroundGradient } from "../../ui/background-gradient.tsx";
import { IconAppWindow } from "@tabler/icons-react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card.tsx";

const Image = require("../../../assets/profile-pic.png");
const externalLink = require("../../../assets/external-link.svg");

const webAppImage = require("../../../assets/GymWebApp.png");
const cameramenApp = require("../../../assets/cameramenApp.png");
const carSaleProject = require("../../../assets/carSaleProject.jpg");
const cwpfAplication = require("../../../assets/wpfAplication-01.png");
const cwpfAplication2 = require("../../../assets/WPFaplication.svg");
const MLproject = require("../../../assets/MLproject.jpg");

export function BackgroundGradientDemo2() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">

            <div className="flex flex-wrap justify-center gap-10 md:gap-5 items-center">

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border">

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
                            <h3 className="text-2xl text-white">Gym Management web aplicvation</h3>
                            <p className="text-gray-200">
                                I developed a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                This application incorporates a comprehensive set of features,
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border">

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
                            <h3 className="text-2xl text-white">Gym Management web aplicvation</h3>
                            <p className="text-gray-200">
                                I developed a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                This application incorporates a comprehensive set of features,
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border">

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
                            <h3 className="text-2xl text-white">Gym Management web aplicvation</h3>
                            <p className="text-gray-200">
                                I developed a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                This application incorporates a comprehensive set of features,
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border">

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
                            <h3 className="text-2xl text-white">Gym Management web aplicvation</h3>
                            <p className="text-gray-200">
                                I developed a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                This application incorporates a comprehensive set of features,
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>

                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[20rem] h-auto rounded-xl p-6 border">

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
                            <h3 className="text-2xl text-white">Gym Management web aplicvation</h3>
                            <p className="text-gray-200">
                                I developed a web application using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                                This application incorporates a comprehensive set of features,
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>Mern Starck</li>
                            </ul>
                        </footer>

                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>



                {/* Add more CardContainer components similarly */}

            </div>
        </div>
    );
}
