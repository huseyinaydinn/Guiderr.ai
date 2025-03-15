import React from 'react'
import AboutImage from '@/public/AboutImage.svg'
import Image from "next/image"
import PalmTree from "@/public/AboutPalmTree.svg"


const About = ({ fontLora }) => {
    return (
        <section id="about" className="relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 lg:py-20 2xl:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-start order-1 lg:order-none">
                        <Image
                            src={AboutImage}
                            alt="About Us"
                            className="w-full max-w-xl xl:max-w-2xl"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h4 className="text-[#FF9A6B] font-semibold text-lg lg:text-xl xl:text-2xl mb-4">
                            What is guider.ai?
                        </h4>

                        <div className="flex flex-col gap-6 lg:gap-8">
                            <div className="flex flex-col gap-4 lg:gap-6">
                                <h2 className={`${fontLora.className} text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-bold leading-tight text-[#4A90E2]`}>
                                    Meet Guiderr.ai – Your Smart Travel Guide
                                </h2>

                                <div className="space-y-4 lg:space-y-6">
                                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                        Guiderr.ai is an AI-powered travel assistant designed to make trip planning effortless.
                                        From discovering top destinations to personalized itineraries, our intelligent platform
                                        helps you explore the world with ease. Let AI handle the details while you focus on the adventure!
                                    </p>
                                    <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                                        Get real-time recommendations based on your interests and location. Save your favorite
                                        places and create customized travel plans. Whether you're a solo traveler or planning
                                        a group trip, Guiderr.ai makes exploring seamless and stress-free.
                                    </p>
                                </div>
                            </div>

                            <button className="w-full lg:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold rounded-lg transition-colors duration-300">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>

                {/* Palm Tree Decoration */}
                <Image
                    src={PalmTree}
                    alt="Palm tree decore"
                    className="absolute right-4 lg:right-8 bottom-4 lg:bottom-8 opacity-70 mix-blend-multiply w-24 lg:w-32 xl:w-40"
                />
            </div>
        </section>
    )
}

export default About