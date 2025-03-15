"use client";

import { NavLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Logo from "@/public/Guider_Logo.svg";

const Nav = ({ openNav, navBg }) => {
    return (
        <div
            className={`fixed z-[1000] flex h-[12vh] w-full items-center justify-between transition-all duration-0 ${navBg ? "bg-[#22244C] text-white" : "bg-transparent text-[#212832]"
                }`}
        >
            {/* Container */}
            <div className="container mx-auto px-4">
                <div className="flex h-full w-full items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link href="#home" >
                            <Image src={Logo} className="w-16 md:w-20 lg:w-24" alt="Logo" />
                        </Link>
                    </div>

                    {/* Navlinks */}
                    <div className="hidden items-center justify-between gap-12 lg:flex">
                        {NavLinks.map((link) => (
                            <Link href={link.url} key={link.id}>
                                <p className="block w-fit text-xl font-normal transition-all duration-300 hover:text-[#4A90E2]">
                                    {link.label}
                                </p>
                            </Link>
                        ))}
                        <button className="xl:ml-7 h-12 w-[157px] cursor-pointer rounded-sm bg-[#4A90E2] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:bg-[#357ABD]">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobil Burger Menu */}
                    <div className="flex items-center space-x-4 xl:hidden">
                        <HiBars3BottomLeft
                            onClick={openNav}
                            className="h-8 w-8 cursor-pointer lg:hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;