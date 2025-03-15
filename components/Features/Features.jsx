import Image from "next/image"
import React from 'react'
import FeaturesImage from '@/public/FeaturesImage.svg'

const Features = () => {
    return (
        <section className="airplane-cursor relative overflow-hidden bg-gradient-to-br from-[#050C14] to-[#4A90E2] bg-[length:200%_200%] animate-gradient-flow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20 lg:py-24 2xl:py-28 text-white flex flex-col justify-center items-center text-center gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                <div className="max-w-[75%] flex flex-col justify-center items-center gap-2 md:gap-4 xl:gap-6">
                    <h2 className="text-[#F7931A] text-2xl sm:text-[27px] md:Text-[30px] xl:text-[33px] 2xl:text-[36px] font-bold">Core Features of Guiderr.ai</h2>
                    <p className="text-[10px] sm:text-[12px] md:text-[14px] xl:text-lg 2xl:text-xl font-light">Plan your trips effortlessly with AI-driven recommendations and real-time insights. Explore, organize, and experience stress-free travel like never before.</p>
                </div>
                <div>
                    <Image src={FeaturesImage} alt="Features Image" />
                </div>
            </div>
        </section>
    )
}

export default Features