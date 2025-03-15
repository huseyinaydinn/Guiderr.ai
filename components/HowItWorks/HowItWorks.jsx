import Image from "next/image"
import React from 'react'
import HowItWorksImage from '@/public/HowItWorksImage.png'
import { RiCalendarTodoFill } from "react-icons/ri";
import { BiSolidDiscount } from "react-icons/bi"
import { MdLocationOn } from "react-icons/md";
import { SiOpenai } from "react-icons/si";


const HowItWorks = ({ fontLora }) => {
    return (
        <section id="howitworks" className="relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 lg:py-24 2xl:py-28 text-white flex flex-col justify-center items-center text-center gap-20">
                {/* Text Area */}
                <div className="flex flex-col text-center gap-1">
                    <h4 className="text-[#4A90E2] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">How It Works</h4>
                    <h2 className={`${fontLora.className} text-[#14183E] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold`}>How Guiderr.ai Works</h2>
                    <p className="text-[#666666] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2">Discover destinations, get AI-powered recommendations, and plan your perfect trip effortlessly.</p>
                </div>

                {/*Image Area */}
                <div className="flex flex-col items-center justify-center lg:flex-row  gap-10 lg:gap-20">
                    {/*Categories */}
                    <div className="flex flex-col gap-4">
                        {/*1st categorie */}
                        <div className="flex flex-row items-center gap-2 md:gap-4 px-4 py-4 rounded-2xl hover:shadow-2xl cursor-pointer">
                            {/*categories icon */}
                            <div className="bg-[#F7931A] w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
                                <RiCalendarTodoFill className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            {/*categories text*/}
                            <div className="flex flex-col text-black text-start gap-1">
                                <h4 className="font-bold text-lg md:text-xl">Sign Up & Set Preferences</h4>
                                <p className="text-[#A8A8A8] font-light text-sm">Create your profile and customize your travel preferences.</p>
                            </div>
                        </div>
                        {/*2nd categorie */}
                        <div className="flex flex-row items-center gap-4 px-4 py-4 rounded-2xl hover:shadow-2xl cursor-pointer">
                            {/*categories icon */}
                            <div className="bg-[#4A90E2] w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
                                <MdLocationOn className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            {/*categories text*/}
                            <div className="flex flex-col text-black text-start gap-1">
                                <h4 className="font-bold text-lg md:text-xl">Sign Up & Set Preferences</h4>
                                <p className="text-[#A8A8A8] font-light text-sm">Create your profile and customize your travel preferences.</p>
                            </div>
                        </div>
                        {/*3rd categorie */}
                        <div className="flex flex-row items-center gap-4 px-4 py-4 rounded-2xl hover:shadow-2xl cursor-pointer">
                            {/*categories icon */}
                            <div className="bg-[#008F87] w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
                                <SiOpenai className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            {/*categories text*/}
                            <div className="flex flex-col text-black text-start gap-1">
                                <h4 className="font-bold text-lg md:text-xl">Sign Up & Set Preferences</h4>
                                <p className="text-[#A8A8A8] font-light text-sm">Create your profile and customize your travel preferences.</p>
                            </div>
                        </div>
                        {/*4th categorie */}
                        <div className="flex flex-row items-center gap-4 px-4 py-4 rounded-2xl hover:shadow-2xl cursor-pointer">
                            {/*categories icon */}
                            <div className="bg-[#B469E5] w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
                                <BiSolidDiscount className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            {/*categories text*/}
                            <div className="flex flex-col text-black text-start gap-1">
                                <h4 className="font-bold text-lg md:text-xl">Sign Up & Set Preferences</h4>
                                <p className="text-[#A8A8A8] font-light text-sm">Create your profile and customize your travel preferences.</p>
                            </div>
                        </div>
                    </div>
                    <Image src={HowItWorksImage} alt="HowItWorks" className="w-[30vh] lg:w-[300px]" />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks