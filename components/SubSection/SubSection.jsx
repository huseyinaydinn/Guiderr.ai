import React from 'react'
import SubscribeBG from '@/public/Subscribe.png'
import { CiMail } from "react-icons/ci"

const SubSection = ({ fontLora }) => {
    return (
        <section id="howitworks" className="relative overflow-hidden container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 lg:py-24 2xl:py-28 text-white">
            <div className="flex flex-col justify-center items-center text-center gap-8 md:gap-20 w-full h-[380px]" style={{
                backgroundImage: `url(${SubscribeBG.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <h2 className={`${fontLora.className} font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white max-w-1/2`}>Subscribe to receive the latest update from Guiderr.ai.</h2>

                <div className="relative w-3/4 md:w-1/2">
                    <div className="relative">
                        <CiMail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500" />
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            className="bg-white w-full pl-16 pr-4 md:pr-36 py-5 rounded-2xl border-none outline-none placeholder-gray-500 text-black"
                        />
                        <button className="absolute top-[100px] max-md:left-0 w-full md:w-fit md:right-3 md:top-1/2 -translate-y-1/2 px-8 py-3 bg-white  md:bg-[#4A90E2] md:hover:bg-[#357ABD] text-[#4A90E2] md:text-white font-semibold rounded-lg transition-colors duration-300 text-base">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubSection