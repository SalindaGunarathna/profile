"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient.tsx";
import { IconAppWindow } from "@tabler/icons-react";

const webdev = require("../../assets/webdev.png");
const mobiledev = require("../../assets/mobiledev.png")
const devops = require("../../assets/devops.png")

export function ProjectCatogary() {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">

            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center">
                <div className="max-w-xs w-full md:w-auto p-4 sm:p-6">

                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
                        <img
                            src={mobiledev}
                            alt="jordans"
                            className="object-contain w-full h-auto rounded-xl"
                        />
                        {/* <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Mobile aplication development
                        </p> */}
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            My mobile application development experience involves using Flutter
                            and Dart, integrated with Firebase. For my inaugural project,
                            I created a mobile app designed to locate cameramen for various
                            events. Firebase served as the database, managing image storage
                            and authentication services.
                        </p>
                        <button
                            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center
                          space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span> </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">

                            </span>
                        </button>
                    </BackgroundGradient>
                </div>

                <div className="max-w-xs w-full md:w-auto p-4 sm:p-6">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
                        <img
                            src={webdev}
                            alt="jordans"
                            className="object-contain w-full h-auto"
                        />

                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            My web application development experience encompasses the utilization of React,
                            Node.js, and Express, as well as Spring Boot integrated with both SQL and NoSQL
                            databases. MY experience involved using MongoDB and PostgreSQL as theprimary databases
                            .. All projects feature
                            integrated authentication systems, notification systems, and file
                            uploading functionalities.
                        </p>
                        <button
                            className="rounded-full pl-4 pr-1 py-1 text-white flex items-center
                         space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span></span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">

                            </span>
                        </button>
                    </BackgroundGradient>
                </div>

                <div className="max-w-xs w-full md:w-auto p-4 sm:p-6">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
                        <img
                            src={devops}
                            alt="jordans"
                            className="object-contain w-full h-auto"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            DevOps
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            I possess knowledge of CI/CD pipelines and have a
                            basic understanding of DevOps principles. Additionally,
                            I have hands-on experience with Docker, Ansible, Jenkins,
                            Terraform, Kubernetes, and cloud instance management
                            specifically with AWS
                        </p>
                        <button
                            className="rounded-full pl-4 pr-1
                         py-1 text-white flex items-center
                          space-x-1 bg-black mt-4 text-xs
                           font-bold dark:bg-zinc-800">
                            <span> </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">

                            </span>
                        </button>
                    </BackgroundGradient>
                </div>


            </div>
        </div>
    );
}
