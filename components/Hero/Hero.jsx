import React from 'react'
import { Lora } from "next/font/google";
import Image from "next/image";
import HeroImage from "@/public/HeroImage.png"
import { CiMail } from "react-icons/ci";
import ExploreDecore from "@/public/Decore.svg"
import PlaneDecore from "@/public/plane.svg"

const fontLora = Lora({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const Hero = () => {
    return (
        <section id="home" className="relative overflow-hidden lg:overflow-visible">
            {/* Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 lg:py-28">
                {/* Sun Shine Effect */}
                <div className="absolute top-[-12%] left-[-20%] md:top-[-10%] md:left-[-10%] lg:top-[-50%] lg:left-[-20%] xl:top-[-30%] xl:left-[-15%] blur-[150px]  w-[250px] h-[250px] lg:w-[500px]  lg:h-[500px] rounded-full bg-[#F7931A] opacity-50  z-[-10]"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* Hero Text*/}
                    <div className="text-center lg:text-left lg:pr-4 xl:pr-8">
                        <h3 className="text-[#4A90E2] font-semibold text-base lg:text-lg xl:text-xl mb-3 lg:mb-4">
                            Best Destinations around the world
                        </h3>
                        <div className={`${fontLora.className} mb-6 lg:mb-8`}>
                            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-6xl font-bold leading-snug lg:leading-[1.15]">
                                Travel,{' '}
                                <span className="relative inline-block">
                                    explore
                                    <Image
                                        src={ExploreDecore}
                                        alt="decore"
                                        className="absolute bottom-0 left-2 lg:-bottom-1 -right-4 lg:-right-6 z-[-1] w-[200px]"
                                    />
                                    <Image
                                        src={PlaneDecore}
                                        alt="plane-decore"
                                        className="absolute -top-6 -right-18 sm:-right-22 lg:-top-7 lg:-right-28 xl:-right-32 w-20 sm:w-24 lg:w-26 xl:w-32"
                                    />
                                </span>
                            </h1>
                            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] 2xl:text-6xl font-bold mt-3 lg:mt-5">
                                And let <span className="text-[#FA7436]">AI</span> be your{' '}
                                <span className="text-[#FA7436]">smart guide</span>
                            </h1>
                        </div>

                        <p className="text-sm sm:text-base lg:text-[15px] xl:text-[16px] text-gray-600 mb-6 lg:mb-10 max-w-xl lg:max-w-[520px] xl:max-w-[580px] mx-auto lg:mx-0">
                            Designed for travelers who crave intelligent, AI-driven insights and personalized recommendations.
                            Uncover unique destinations, hidden gems, and elevate your travel experiences like never before
                        </p>

                        {/* Email Form */}
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                            <div className="relative flex-grow">
                                <CiMail className="absolute left-4 top-3 lg:top-4 w-5 h-5 lg:w-6 lg:h-6 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Enter your mail"
                                    className="w-full pl-11 lg:pl-12 pr-4 py-3 lg:py-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2] text-sm lg:text-base"
                                />
                            </div>
                            <button className="w-full lg:w-auto px-6 lg:px-8 py-3 lg:py-[15px] bg-[#4A90E2] hover:bg-[#357ABD] text-white font-semibold rounded-lg transition-colors duration-300 text-sm lg:text-base text-nowrap">
                                Join Waitlist
                            </button>
                        </div>
                    </div>

                    {/* Hero Image  */}
                    <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end lg:pl-4 xl:pl-8">
                        <Image
                            src={HeroImage}
                            alt="Hero"
                            className="w-full max-w-md lg:max-w-[540px] xl:max-w-[600px] 2xl:max-w-[680px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero