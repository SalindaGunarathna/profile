"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient.tsx";
import { IconAppWindow } from "@tabler/icons-react";

const webdev = require("../../assets/webdev.png");
const mobiledev =require("../../assets/mobiledev.png")
const devops =require("../../assets/devops.png")

export function ProjectCatogary() {
    return (
        <div  className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="flex flex-col md:flex-row gap-8 md:gap-4 items-center">
                <div className="max-w-xs w-full md:w-auto p-4 sm:p-6">
                    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900">
                        <img
                            src={mobiledev}
                            alt="jordans"
                            className="object-contain w-full h-auto"
                        />
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Air Jordan 4 Retro Reimagined
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                            February 17, 2024. Your best opportunity to get these right now is by
                            entering raffles and waiting for the official releases.
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
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
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Air Jordan 4 Retro Reimagined
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                            February 17, 2024. Your best opportunity to get these right now is by
                            entering raffles and waiting for the official releases.
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
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
                            Air Jordan 4 Retro Reimagined
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                            February 17, 2024. Your best opportunity to get these right now is by
                            entering raffles and waiting for the official releases.
                        </p>
                        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                            <span>Buy now </span>
                            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
                            </span>
                        </button>
                    </BackgroundGradient>
                </div>

                {/* Add more e-cards similarly */}
            </div>
        </div>
    );
}
