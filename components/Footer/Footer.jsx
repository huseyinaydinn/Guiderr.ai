import Image from "next/image"
import Link from "next/link"
import React from 'react'
import Logo from '@/public/Guider_Logo.svg'
import { FaFacebook, FaInstagram, FaAddressCard, FaBuilding } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";




const Footer = () => {
    return (
        <section id="#faqs" className="relative overflow-hidden lg:overflow-visible mx-auto">
            {/*Footer Links */}

            <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-8 flex flex-col lg:flex-row justify-between items-center text-center gap-8">
                {/* icon area */}
                <div className="flex flex-col items-start text-center lg:items-start lg:text-start gap-4 lg:max-w-[50%]">
                    <Link href="#home" className="mb-10" >
                        <Image src={Logo} className="w-16 md:w-20 lg:w-24" alt="Logo" />
                    </Link>

                    <div className="flex flex-row items-center gap-2 text-start">
                        <div className="flex flex-row items-center justify-between w-[120px] gap-2 ">
                            <div className="font-bold flex flex-row items-center gap-2">
                                <FaMapLocationDot className="w-6 h-6" />
                                <h5 className="text-sm">Address</h5>
                            </div>
                            <p className="font-bold text-lg">:</p>
                        </div>
                        <p className="text-sm">PLOT NO 134, 2ND FLOOR NESPAK C-1, COLLEGE ROAD GHAZI CHOWK, Punjab, Lahore, 54000, Pakistan</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center justify-between w-[120px]">
                            <div className="font-bold flex flex-row items-center gap-2">
                                <FaAddressCard className="w-6 h-6" />
                                <h5 className="text-sm">Phone number</h5>
                            </div>
                            <p className="font-bold text-lg">:</p>
                        </div>
                        <p className="text-sm">+92 3317380356</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center justify-between w-[120px] ">
                            <div className="font-bold flex flex-row items-center gap-2">
                                <IoPersonCircle className="w-6 h-6" />
                                <h5 className="text-sm">Managing Director</h5>
                            </div>
                            <p className="font-bold text-lg">:</p>
                        </div>
                        <p className="text-sm">Muhammad Hassan Farooq</p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <div className="flex flex-row items-center justify-between w-[120px] ">
                            <div className="font-bold flex flex-row items-center gap-2">
                                <FaBuilding className="w-6 h-6" />
                                <h5 className="text-sm">Product of</h5>
                            </div>
                            <p className="font-bold text-lg">:</p>
                        </div>
                        <p className="text-sm">Zirvesol</p>
                    </div>

                    <p>Discover destinations, get AI-powered recommendations, and plan your perfect trip effortlessly.</p>

                </div>

                {/* Link area */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-12 font-semibold text-lg lg:text-xl">
                    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8">
                        <Link href="/" >About</Link>
                        <Link href="/" >How it work</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8">
                        <Link href="/" >Help/FAQ</Link>
                        <Link href="/" >Newsletter</Link>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-8 text-[#4A90E2] font-bold text-lg lg:text-xl">
                        <h5>Follow us on</h5>
                        <div className="flex flex-row flex-nowrap justify-between items-center gap-4">
                            <Link href="/">
                                <FaFacebook className="w-5 h-5" />
                            </Link>
                            <Link href="/">
                                <AiFillTwitterCircle className="w-6 h-6" />
                            </Link>
                            <Link href="/" className="text-white bg-[#4A90E2] rounded-full w-5 h-5 flex items-center justify-center text-center">
                                <FaInstagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            <hr className="w-full h-1 text-[#999999] opacity-[56%]" />
            {/* Copyright */}
            <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-2 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-2">
                <p>Copyright, guiderr.ai 2025. All rights reserved.</p>
                <Link href="/">Terms & Conditions</Link>
            </div>
        </section>
    )
}

export default Footer